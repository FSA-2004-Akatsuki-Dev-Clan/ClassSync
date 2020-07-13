import openSocket from '.'
import store, {addStudentData, addSessionData} from '../store'
import axios from 'axios'
const openTeacherSocket = () => {
  let teacherSocket = openSocket()

  //if cancel message from student => give option to resend a start message from server, or create a button to do so later
  teacherSocket.on('cancel', (socketId, studentId, first, last) => {
    if (
      window.confirm(
        `Student ${first} ${last}, ID ${studentId} did not accept session start. Send another invitation?`
      )
    )
      teacherSocket.emit('re-invite', socketId)
    else {
      // const reInvite = document.createElement('button')
      // reInvite.innerHTML = `Re-Invite Student: ${first} ${last}, ID ${studentId}`
      // reInvite.className = 're-invite'
      // document.getElementById('teacher-session').appendChild(reInvite)
      // reInvite.onclick = () => {
      //   teacherSocket.emit('re-invite', socketId)
      //   reInvite.parentNode.removeChild(reInvite)
      // }
    }
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
      await axios.put(`api/session/save`, session)
      await axios.put('api/students/save', student)
    } catch (err) {
      console.log(
        'There was a problem saving the session data in the database',
        err
      )
    }
  })

  teacherSocket.on('student-logout', ({id, first, last}) => {
    window.alert(`Student ${first} ${last} logged out, ID: ${id}`)
  })

  teacherSocket.on(
    'student-disconnect',
    ({id, firstName, lastName}, socket) => {
      window.alert(
        `Student ${firstName} ${lastName} disconnected, ID: ${id} socket: ${socket}`
      )
    }
  )

  teacherSocket.on('student-join', ({id, first, last}) => {
    window.alert(
      `Student ${first} ${last} has joined after session start, ID: ${id}`
    )
  })

  //on disconnect while still logged in, attempt reconnection
  teacherSocket.on('disconnect', () => {
    console.log('teacher disconnect')
    if (store.getState().user.id) {
      console.log('attempting reconnect')
      teacherSocket = openSocket()
    }
  })

  return teacherSocket
}

export default openTeacherSocket
