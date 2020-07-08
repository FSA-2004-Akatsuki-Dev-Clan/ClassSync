import socket from '.'
import store from '../store'
import * as faceapi from 'face-api.js'

const studentSocket = socket

const student = store.getState().user

let data = {}

let interval

let listening = false

const clickAdd = () => {
  data.clickCount++
}

let clickListener

const keyAdd = () => {
  data.keyCount++
}

let keyListener

//tinyFaceDetector model library is less accurate but faster and more optimized for mobile/web
const loadFaceAPI = () => faceapi.nets.ssdMobilenetv1.loadFromUri('../models')
//const loadFaceAPI = () => faceapi.nets.tinyFaceDetector.loadFromUri('../models')

let mediaStream

//Creates an image element not appended to the DOM
let image = document.createElement('img')

//This will hold the ImageCapture instance for taking snaps of the video stream
let imageCapture

const detectFace = async () => {
  if (imageCapture === undefined) return

  //grab a snapshot from our video stream as a 'blob' (binary large object)
  let blob = await imageCapture.takePhoto()

  //generates a web URL for the image, attaches it to our image element
  image.src = URL.createObjectURL(blob)

  if (image.src === undefined) return

  //passes the image to the face-api library and returns the faces detected
  const faces = await faceapi.detectAllFaces(
    image,
    new faceapi.SsdMobilenetv1Options()
  )

  // const faces = await faceapi.detectAllFaces(
  //   image,
  //   new faceapi.TinyFaceDetectorOptions()
  // )

  console.log('got face', faces)
  if (faces.length) console.log('score: ', faces[0].score)

  data.faceCount += faces.length
  data.faceDetects++
}

//initialize the SpeechRecognition object from the Web Speech API
const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.continuous = true
recognition.lang = 'en-US'

//when the SpeechRecognition interface recognizes a chunk of speech, we transcribe it, count the words, and add it to our word count
recognition.onresult = event => {
  const transcript = event.results[event.results.length - 1][0].transcript

  console.log('picked up some speech', transcript)

  data.wordCount += transcript.trim().split(' ').length

  console.log('total words so far: ', data.wordCount)
}

//monitoring/activity logging script
const startMonitor = () => {
  let mediaConfigObj = {
    audio: true,
    video: true
  }

  //The webcam/microphone streams are accessed
  navigator.mediaDevices
    .getUserMedia(mediaConfigObj)
    .then(mediaStreamObj => {
      console.log('connected to media stream!', mediaStreamObj)

      mediaStream = mediaStreamObj

      //The video track is isolated
      let video = mediaStreamObj.getVideoTracks()[0]

      //the ImageCapture interface is instantiated
      imageCapture = new ImageCapture(video)

      //speech recognition interface starts listening to the microphone
      if (!listening) {
        recognition.start()
        console.log('listening for speech')
        listening = true
      }

      //set up keystroke and mouse-click listeners
      clickListener = window.addEventListener('click', clickAdd)

      keyListener = window.addEventListener('keydown', keyAdd)

      document.getElementById('session-message').innerHTML =
        'The class session is live!'

      //We set up our timed interval for checking for a face on webcam, and sending a data ping to the server
      interval = setInterval(async () => {
        await detectFace()

        studentSocket.emit('student-data', student.id, data)
      }, 10000)
    })
    .catch(function(err) {
      console.log(
        'There was trouble trying to connect to the media stream',
        err
      )
    })
}

const stopMonitor = () => {
  clearInterval(interval)

  if (mediaStream) {
    mediaStream.getAudioTracks().forEach(track => {
      track.stop()
    })

    mediaStream.getVideoTracks().forEach(track => {
      track.stop()
    })
  }

  if (listening) {
    recognition.stop()
    listening = false
  }

  window.removeEventListener('click', clickListener)

  window.removeEventListener('keydown', keyListener)

  data = {}
}

//when a request to start the session is received, the student hits OK or Cancel, and the respective response is emitted
studentSocket.on('start-session', async () => {
  if (
    !window.confirm(
      'Your teacher has started a live session. This will access your video and audio streams.'
    )
  ) {
    studentSocket.emit(
      'cancel',
      student.id,
      student.firstName,
      student.lastName
    )
    return
  }

  await loadFaceAPI()

  stopMonitor()

  data = {
    wordCount: 0,
    faceCount: 0,
    faceDetects: 0,
    keyCount: 0,
    clickCount: 0
  }

  studentSocket.emit('accept', student.id, data)

  startMonitor()
})

//if a message is received that the session is over, the timed activity logging interval is stopped
studentSocket.on('end-session', () => {
  stopMonitor()

  document.getElementById('session-message').innerHTML =
    'The teacher has ended the class session. Please wait for the next one to start.'

  window.alert('The class session has ended')
})

studentSocket.on(
  'reconnected',
  async ({faceCount, faceDetects, wordCount, keyCount, clickCount}) => {
    stopMonitor()

    data = {faceCount, faceDetects, wordCount, keyCount, clickCount}

    await loadFaceAPI()

    startMonitor()

    console.log('Reconnected to server!')
  }
)

export default studentSocket
