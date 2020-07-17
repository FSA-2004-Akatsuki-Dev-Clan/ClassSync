import io from 'socket.io-client'
import store from '../store'

const openSocket = monitorTimeout => {
  let socket = io(window.location.origin, {'force new connection': true})

  //on reconnection, identify as teacher or student
  socket.on('connect', () => {
    const user = store.getState().user

    console.log(
      `Connected to the ClassSync server as a ${
        user.isTeacher ? 'teacher' : 'student'
      }!`
    )

    //when a student client disconnects while still logged in, it attempts to reconnect and passes a timeout that will stop its activity monitor unless it clears on reconnection here
    if (monitorTimeout) clearTimeout(monitorTimeout)

    socket.on('error', err => {
      console.log('Socket error:', err)
    })

    //send message to server to check if there's a live session and attempt to rejoin
    socket.emit('check-in', user)
  })

  return socket
}

export default openSocket
