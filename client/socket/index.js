import io from 'socket.io-client'

let socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected to the ClassSync server!')
})

export default socket
