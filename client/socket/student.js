import openSocket from '.'
import store from '../store'
import {loadFaceAPI, startMonitor, stopMonitor} from '../student-monitor'

const openStudentSocket = () => {
  let studentSocket = openSocket()

  //when a request to start the session is received, the student hits OK or Cancel, and the respective response is emitted
  studentSocket.on('start-session', async () => {
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

    //if accepted, loads up faceapi library we've chosen above, resets and starts monitoring/data sending functions
    await loadFaceAPI()

    await stopMonitor()

    data = {...initialData}

    await startMonitor(studentSocket, student)

    // load up the quiz
    const assignmentCont = document.getElementById('is-Live')
    assignmentCont.hidden = false

    //change of header
    const header = document.getElementById('session-message')
    header.innerHTML = 'The class session is live!'

    studentSocket.emit('accept', student, data)
  })

  //if a message is received that the session is over, the timed activity logging interval and  is stopped
  studentSocket.on('end-session', async () => {
    await stopMonitor()

    document.getElementById('session-message').innerHTML =
      'The teacher has ended the class session. Please wait for the next one to start.'

    window.alert('The class session has ended')
  })

  //on disconnect while still logged in, attempt reconnection
  studentSocket.on('disconnect', () => {
    if (store.getState().user.id) studentSocket = openSocket()
  })

  return studentSocket
}

export default openStudentSocket
