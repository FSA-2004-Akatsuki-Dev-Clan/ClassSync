import io from 'socket.io-client'

// const socket = io(window.location.origin)
const socket = io('http://localhost:8080')

//for ngrok
// const socket = io('https://ded537cde722.ngrok.io')

socket.on('connect', () => {
  console.log('Connected!')
})

socket.on('user-devices-client', function() {
  let mediaConfigObj = {
    audio: true,
    video: true
  }
  navigator.mediaDevices
    .getUserMedia(mediaConfigObj)
    .then(function(mediaStreamObj) {
      console.log('connected!', mediaStreamObj)
    })
    .catch(function(err) {
      console.log('ohh noooo!!', err)
    })
})

export default socket
