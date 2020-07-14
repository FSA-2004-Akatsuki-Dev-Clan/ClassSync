import openSocket from '.'
import store, {setAssignment} from '../store'
import {loadFaceAPI, startMonitor, stopMonitor} from '../student-monitor'

const initialData = {
  wordCount: 0,
  faceCount: 0,
  faceDetects: 0,
  keyCount: 0,
  clickCount: 0
}

let monitorTimeout

const openStudentSocket = () => {
  let studentSocket = openSocket()

  //when a request to start the session is received, the student hits OK or Cancel, and the respective response is emitted
  studentSocket.on('start-session', async url => {
    const student = store.getState().user

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

    //load in the assignment
    store.dispatch(setAssignment(url))

    //if accepted, loads up faceapi library we've chosen above, resets and starts monitoring/data sending functions
    await loadFaceAPI()

    await stopMonitor()

    await startMonitor(studentSocket, student)

    // reveal the assignment
    document.getElementById('is-Live').hidden = false

    document.getElementById('session-message').innerHTML =
      'The class session is live!'

    studentSocket.emit('accept', student, initialData)
  })

  //if a message is received that the session is over, the timed activity logging interval and  is stopped
  studentSocket.on('end-session', async () => {
    await stopMonitor()

    document.getElementById('is-Live').hidden = true

    document.getElementById('session-message').innerHTML =
      'The teacher has ended the class session. Please wait for the next one to start.'

    window.alert('The class session has ended')
  })

  studentSocket.on('logout', async () => {
    console.log('logged out')

    await stopMonitor()

    teacherSocket.disconnect(true)
  })

  //on disconnect while still logged in, attempt reconnection
  studentSocket.on('disconnect', () => {
    console.log('student disconnect')
    if (store.getState().user.id) {
      monitorTimeout = setTimeout(() => {
        stopMonitor()
      }, 60000)

      console.log('attempting reconnect')
      studentSocket = openSocket(monitorTimeout)
    }
  })

  return studentSocket
}

export default openStudentSocket
