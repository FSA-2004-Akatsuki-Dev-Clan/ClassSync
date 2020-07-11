import socket from '.'
import store, {
  addStudentData,
  addSessionData,
  resetSessionData,
  resetStudentData
} from '../store'

let teacherSocket = socket

//if confirmed, sends start message to server with teacher's ID and details for the session

export const startSession = (teacherId, sessionDetails) => {
  if (window.confirm('Are you ready to start the session?')) {
    teacherSocket.emit('start-session', teacherId, sessionDetails)

    document.getElementById('start').hidden = true
    document.getElementById('end').hidden = false
  }
}

//if confirmed, sends message to server to end the session
export const endSession = () => {
  if (window.confirm('Are you sure you want to end the session?')) {
    teacherSocket.emit('end-session')

    document.getElementById('start').hidden = false
    document.getElementById('end').hidden = true

    store.dispatch(resetSessionData())
    store.dispatch(resetStudentData())
  }
}

//if cancel message from student => give option to resend a start message from server, or create a button to do so later
teacherSocket.on('cancel', (socketId, studentId, first, last) => {
  if (
    window.confirm(
      `Student ${first} ${last}, ID ${studentId} did not accept session start. Send another invitation?`
    )
  )
    socket.emit('re-invite', socketId)
  else {
    const reInvite = document.createElement('button')
    reInvite.innerHTML = `Re-Invite Student: ${first} ${last}, ID ${studentId}`

    document.getElementById('teacher-session').appendChild(reInvite)

    reInvite.onclick = () => {
      socket.emit('re-invite', socketId)
      document.getElementById('teacher-session').removeChild(reInvite)
    }
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

teacherSocket.on('student-disconnect', ({id, first, last}) => {
  window.alert(`Student ${first} ${last} disconnected from server, ID: ${id}`)
})

teacherSocket.on('reconnected', () => {
  console.log('Reconnected to the server!')
})

export default teacherSocket
