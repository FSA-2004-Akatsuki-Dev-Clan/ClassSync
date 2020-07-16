import openSocket from '.'
import store, {setAssignment, setLive, setModal, setTitle} from '../store'
import {loadFaceAPI, startMonitor, stopMonitor} from '../student-monitor'

let studentSocket

const initialData = {
  wordCount: 0,
  faceCount: 0,
  faceDetects: 0,
  keyCount: 0,
  clickCount: 0
}

let monitorTimeout

const openStudentSocket = () => {
  studentSocket = openSocket()

  //when a request to start the session is received, the student hits OK or Cancel, and the respective response is emitted
  studentSocket.on('start-session', (title, url) => {
    store.dispatch(setAssignment(url))
    store.dispatch(setTitle(title))

    const {live, modal} = store.getState().status

    if (!live && !modal) store.dispatch(setModal('studentStart'))
  })

  //if a message is received that the session is over, the timed activity logging interval and  is stopped
  studentSocket.on('end-session', async () => {
    const {live, modal} = store.getState().status

    if (live) {
      await stopMonitor()

      store.dispatch(setLive(false))
    }

    if (!modal) store.dispatch(setModal('endAlert'))
  })

  studentSocket.on('logout', async () => {
    console.log('logged out')

    if (store.getState().status.live) {
      await stopMonitor()

      store.dispatch(setLive(false))
    }

    studentSocket.disconnect(true)
  })

  //on disconnect while still logged in, attempt reconnection
  studentSocket.on('disconnect', () => {
    console.log('disconnect')

    const {user, status} = store.getState()

    if (user.id) {
      monitorTimeout = setTimeout(() => {
        if (status.live) {
          stopMonitor()

          store.dispatch(setLive(false))
        }
      }, 60000)

      console.log('attempting reconnect')
      studentSocket = openSocket(monitorTimeout)
    }
  })

  return studentSocket
}

export const cancelSession = () => {
  const student = store.getState().user

  studentSocket.emit('cancel', student.id, student.firstName, student.lastName)
}

export const acceptSession = async () => {
  const student = store.getState().user

  //if accepted, loads up faceapi library we've chosen above, resets and starts monitoring/data sending functions
  await loadFaceAPI()

  // await stopMonitor()

  await startMonitor(studentSocket, student)

  store.dispatch(setLive(true))

  studentSocket.emit('accept', student, initialData)
}

export default openStudentSocket
