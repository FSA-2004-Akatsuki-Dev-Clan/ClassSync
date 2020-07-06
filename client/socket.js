import io from 'socket.io-client'
import * as faceapi from 'face-api.js'

faceapi.nets.tinyFaceDetector.loadFromUri('../models')

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
})

const data = {faceCount: 0, wordCount: 0}
let interval

//Creates an image element not appended to the DOM yet
let image = document.createElement('img')

//This will hold the ImageCapture instance for taking snaps of the video stream
let imageCapture

//currently this function is triggered by a button on the UserMedia page
export const detectFace = async () => {
  if (imageCapture === undefined) return

  //grab a snapshot from our video stream as a 'blob' (binary large object)
  let blob = await imageCapture.takePhoto()

  //generates a web URL for the image, attaches it to our image element
  image.src = URL.createObjectURL(blob)

  //place the snapshot on the DOM so we can see it
  document.getElementById('test').appendChild(image)

  if (image.src === undefined) return

  //passes the image to the face-api library and returns the faces detected
  const faces = await faceapi.detectAllFaces(
    image,
    new faceapi.TinyFaceDetectorOptions()
  )

  console.log('got face', faces)

  if (faces.length) console.log('score: ', faces[0].score)

  document.getElementById('facetext').innerHTML = faces.length
    ? 'Face Detected!'
    : 'No Face Present'

  data.faceCount += faces.length
}

//creates a text element not yet appended to the DOM
const speechText = document.createElement('p')
speechText.innerHTML = 'No current speech'

//initialize the SpeechRecognition object from the Web Speech API
const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.continuous = true
recognition.lang = 'en-US'

let words = 0

//when the SpeechRecognition interface recognizes a chunk of speech, we transcribe it, add it to our text element, and count the words
recognition.onresult = event => {
  const transcript = event.results[event.results.length - 1][0].transcript

  console.log('picked up some speech', transcript)

  if (speechText.innerHTML === 'No current speech') speechText.innerHTML = ''

  speechText.innerHTML += transcript

  words += transcript.trim().split(' ').length

  console.log('total words so far: ', words)
}

//currently this function is triggered by a button on the UserMedia page. It places our speech text element on the DOM so we can see it, and it starts or stops the SpeechRecognition interface listening to the microphone audio

export const sendData = (studentID = socket.id) => {
  socket.emit('data', studentID, data)
}

//When a request to activate is sent from another client, the webcam stream is accessed, the ImageCapture interface is set up, and the buttons for controlling speech and facial recognition are revealed
socket.on('user-devices-client', () => {
  let mediaConfigObj = {
    audio: true,
    video: true
  }

  navigator.mediaDevices
    .getUserMedia(mediaConfigObj)
    .then(mediaStreamObj => {
      console.log('connected!', mediaStreamObj)

      const video = mediaStreamObj.getVideoTracks()[0]

      imageCapture = new ImageCapture(video)

      document.getElementById('activate').hidden = true
      // document.getElementById('face').hidden = false
      // document.getElementById('speech').hidden = false
      // document.getElementById('send').hidden = false

      recognition.start()
      console.log('listening for speech')

      interval = setInterval(async () => {
        await detectFace()

        data.wordCount += words
        words = 0

        sendData()
      }, 10000)
    })
    .catch(function(err) {
      console.log('ohh noooo!!', err)
    })
})

socket.on('data', (id, data) => {
  console.log(`current data for student '${id}': `, data)
})

export default socket
