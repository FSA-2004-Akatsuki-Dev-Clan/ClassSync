import io from 'socket.io-client'
import * as faceapi from 'face-api.js'

faceapi.nets.tinyFaceDetector.loadFromUri('../models')

const socket = io(window.location.origin)
// const socket = io('http://localhost:8080')

//for ngrok
// const socket = io('https://ded537cde722.ngrok.io')

socket.on('connect', () => {
  console.log('Connected!')
})

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
}

//creates a text element not yet appended to the DOM
const speechText = document.createElement('p')
speechText.innerHTML = 'No current speech'

//initialize the SpeechRecognition object from the Web Speech API
const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.continuous = true
recognition.lang = 'en-US'

let listening = false

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
export const detectSpeech = () => {
  document.getElementById('test').appendChild(speechText)

  if (!listening) {
    recognition.start()
    console.log('listening for speech')
  } else {
    recognition.stop()
    console.log('no longer listening')
    console.log('counted this many words: ', words)
    words = 0
  }

  listening = !listening
}

// setInterval(async () => {
//   data gathering code here
// }, 100)

//When a request to activate is sent from another client, the webcam stream is accessed, the ImageCapture interface is set up, and the buttons for controlling speech and facial recognition are revealed
socket.on('user-devices-client', function() {
  let mediaConfigObj = {
    audio: false,
    video: true
  }

  navigator.mediaDevices
    .getUserMedia(mediaConfigObj)
    .then(mediaStreamObj => {
      console.log('connected!', mediaStreamObj)

      const video = mediaStreamObj.getVideoTracks()[0]

      imageCapture = new ImageCapture(video)

      document.getElementById('activate').hidden = true
      document.getElementById('face').hidden = false
      document.getElementById('speech').hidden = false
    })
    .catch(function(err) {
      console.log('ohh noooo!!', err)
    })
})

export default socket
