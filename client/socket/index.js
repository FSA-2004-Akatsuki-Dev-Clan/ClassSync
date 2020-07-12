import io from 'socket.io-client'
import store from '../store'

const openSocket = () => {
  let socket = io(window.location.origin, {'force new connection': true})

  //on reconnection, identify as teacher or student
  socket.on('connect', () => {
    const user = store.getState().user

    console.log(
      `Connected to the ClassSync server as a ${
        user.isTeacher ? 'teacher' : 'student'
      }!`
    )

    socket.on('rejoin', () => {
      console.log('Reconnected to live session')
    })

    socket.on('error', err => {
      console.log('Socket error:', err)
    })

    //send message to server to check if there's a live session and attempt to rejoin
    socket.emit('check-in', user)
  })

  return socket
}

export default openSocket
