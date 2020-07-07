import io from 'socket.io-client'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected to the ClassSync server!')
})

// export const start = (id) => {
//   if (window.confirm('Are you ready to start the session?')) {
//     socket.emit('start-session', id)

//     document.getElementById('start').hidden = true
//     document.getElementById('end').hidden = false
//   }
// }

// export const end = (id) => {
//   if (window.confirm('Are you sure you want to end the session?')) {
//     socket.emit('end-session', id)

//     document.getElementById('start').hidden = false
//     document.getElementById('end').hidden = true
//   }
// }

export default socket
