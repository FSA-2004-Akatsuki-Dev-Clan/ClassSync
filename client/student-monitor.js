import * as faceapi from 'face-api.js'

const initialData = {
  wordCount: 0,
  faceCount: 0,
  faceDetects: 0,
  keyCount: 0,
  clickCount: 0
}

let data = {...initialData}

let serverTransmitInterval

let listening = false

let clickAdd = () => {
  data.clickCount++
}

// let iframeClickAdd = frame => {
//   frame.contentWindow.postMessage('click', '*')
// }

let clickListener
let iframeClickListener

let keyAdd = () => {
  data.keyCount++
}

// let iframeKeyAdd = frame => {
//   frame.contentWindow.postMessage('keydown', '*')
// }

let keyListener
let iframeKeyListener
let iframeMessage

let mediaStream

//Creates an image element not appended to the DOM
let image = document.createElement('img')

//This will hold the ImageCapture instance for taking snaps of the video stream
let imageCapture

//tinyFaceDetector model library is less accurate but faster and more optimized for mobile/web
export const loadFaceAPI = () =>
  faceapi.nets.ssdMobilenetv1.loadFromUri('../models')
//const loadFaceAPI = () => faceapi.nets.tinyFaceDetector.loadFromUri('../models')

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

  //update student's facial monitoring data
  data.faceCount += faces.length
  data.faceDetects++
}

//initialize the SpeechRecognition object from the Web Speech API
let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
let recognition = new SpeechRecognition()
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
export const startMonitor = async (studentSocket, student) => {
  let mediaConfigObj = {
    audio: true,
    video: true
  }

  //The webcam/microphone streams are accessed
  navigator.mediaDevices
    .getUserMedia(mediaConfigObj)
    .then(async mediaStreamObj => {
      console.log('connected to media stream!', mediaStreamObj)

      data = {...initialData}

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
      const iframe = document.getElementById('student-assignment')

      clickListener = window.addEventListener('click', clickAdd)
      keyListener = window.addEventListener('keydown', keyAdd)

      // iframeClickListener = iframe.contentWindow.document.body.addEventListener(
      //   'click',
      //   clickAdd
      // )
      // iframeKeyListener = iframe.contentWindow.document.body.addEventListener(
      //   'keydown',
      //   keyAdd
      // )

      // iframeClickListener = iframe.contentWindow.document.body.addEventListener(
      //   'click',
      //   function iframeClick(iframe) {
      //     iframeClickAdd(iframe)
      //   }
      // )

      // iframeKeyListener = iframe.contentWindow.document.body.addEventListener(
      //   'keydown',
      //   function iframeKey(iframe) {
      //     iframeKeyAdd(iframe)
      //   }
      // )

      // iframeMessage = window.addEventListener('message', event => {
      //   if (event === 'click') data.clickCount++
      //   else if (event === 'keydown') data.keyCount++
      // })

      //We set up our timed interval for checking for a face on webcam, and sending a data ping to the server
      serverTransmitInterval = setInterval(async () => {
        await detectFace()

        studentSocket.emit('student-data', student.id, data)

        // await recognition.stop()
        // await recognition.start()

        data = {...initialData}
      }, 4000)
    })
    .catch(function(err) {
      console.log(
        'There was trouble trying to connect to the media stream',
        err
      )
    })
}

//stops all monitoring functions and clears the data-sending interval, resets data object
export const stopMonitor = async () => {
  clearInterval(serverTransmitInterval)

  if (mediaStream) {
    mediaStream.getAudioTracks().forEach(async track => {
      track.stop()
    })

    mediaStream.getVideoTracks().forEach(async track => {
      track.stop()
    })
  }

  if (listening) {
    recognition.stop()
    listening = false
  }

  const iframe = document.getElementById('student-assignment')

  window.removeEventListener('click', clickListener)

  // iframe.contentWindow.document.body.removeEventListener(
  //   'click',
  //   iframeClickListener
  // )
  // iframe.contentWindow.document.body.removeEventListener(
  //   'keydown',
  //   iframeKeyListener
  // )

  // iframe.contentWindow.document.body.removeEventListener(
  //   'click',
  //   iframeClickListener
  // )

  window.removeEventListener('keydown', keyListener)

  // iframe.contentWindow.document.body.removeEventListener(
  //   'keydown',
  //   iframeKeyListener
  // )

  window.removeEventListener('message', iframeMessage)

  data = {initialData}
}
