import openSocket from '.'
import store, {
  addStudentData,
  addSessionData,
  setLive,
  studentAlert,
  setModal,
  setSaved,
  logout
} from '../store'
import axios from 'axios'

let teacherSocket

//if cancel message from student => give option to resend a start message from server, or create a button to do so later
export const reinvite = socket => {
  teacherSocket.emit('re-invite', socket)
}

export const makeReinviteButton = ({first, last, studentId, socket}) => {
  const reInvite = document.createElement('button')
  reInvite.innerHTML = `Re-Invite Student: ${first} ${last}, ID ${studentId}`

  reInvite.onclick = () => {
    teacherSocket.emit('re-invite', socket)
    reInvite.parentNode.removeChild(reInvite)
  }

  document.getElementById('re-invites').appendChild(reInvite)
}

const openTeacherSocket = () => {
  teacherSocket = openSocket()

  teacherSocket.on('cancel', student => {
    if (!store.getState().status.modal) {
      store.dispatch(studentAlert(student))
      store.dispatch(setModal('studentCancel'))
    } else makeReinviteButton(student)
  })

  //on receipt of session-data update, dispatch to redux store
  teacherSocket.on('session-data', (time, sessionData, studentData) => {
    store.dispatch(addStudentData(time, studentData))
    store.dispatch(
      addSessionData({
        time,
        attendance: sessionData.attendance,
        ...sessionData.averages
      })
    )
  })

  teacherSocket.on('save-data', async (session, student) => {
    try {
      if (session.rawTotals && session.rawTotals.faceDetects) {
        student.sessionId = +session.id
        await axios.put(`api/session/save`, session)
        await axios.put('api/students/save', student)
      } else store.dispatch(setModal('noServerData'))

      store.dispatch(setSaved(true))
    } catch (err) {
      console.log(
        'There was a problem saving the session data in the database',
        err
      )
    }
  })

  teacherSocket.on('save-logout', async (session, student) => {
    try {
      if (session.rawTotals && session.rawTotals.faceDetects) {
        student.sessionId = +session.id
        await axios.put(`api/session/save`, session)
        await axios.put('api/students/save', student)
      } else store.dispatch(setModal('noServerData'))

      store.dispatch(setSaved(true))

      logout()
    } catch (err) {
      console.log(
        'There was a problem saving the session data in the database',
        err
      )
    }
  })

  teacherSocket.on('student-logout', student => {
    if (!store.getState().status.modal) {
      store.dispatch(studentAlert(student))
      store.dispatch(setModal('studentLogout'))
    }
  })

  teacherSocket.on('student-disconnect', student => {
    if (!store.getState().status.modal) {
      store.dispatch(studentAlert(student))
      store.dispatch(setModal('studentDisconnect'))
    }
  })

  teacherSocket.on('student-rejoin', student => {
    if (!store.getState().status.modal) {
      store.dispatch(studentAlert(student))
      store.dispatch(setModal('studentRejoin'))
    }
  })

  teacherSocket.on('student-join', student => {
    if (!store.getState().status.modal) {
      store.dispatch(studentAlert(student))
      store.dispatch(setModal('studentJoin'))
    }
  })

  teacherSocket.on('logout', () => {
    console.log('logged out')

    store.dispatch(setLive(false))

    teacherSocket.disconnect(true)
  })

  //on disconnect while still logged in, attempt reconnection
  teacherSocket.on('disconnect', () => {
    console.log('disconnect')

    store.dispatch(setLive(false))

    if (store.getState().user.id) {
      console.log('attempting reconnect')
      teacherSocket = openSocket()
    }
  })

  return teacherSocket
}

export default openTeacherSocket
