import socket from '.'
import store, {addLiveData} from '../store'

const teacherSocket = socket

export const startSession = (teacherId, sessionDetails) => {
  if (window.confirm('Are you ready to start the session?')) {
    teacherSocket.emit('start-session', teacherId, sessionDetails)

    document.getElementById('start').hidden = true
    document.getElementById('end').hidden = false
  }
}

export const endSession = () => {
  if (window.confirm('Are you sure you want to end the session?')) {
    teacherSocket.emit('end-session')

    document.getElementById('start').hidden = false
    document.getElementById('end').hidden = true
  }
}

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

teacherSocket.on('student-data', (studentId, dataPoint) => {
  store.dispatch(addLiveData(studentId, dataPoint))
})

teacherSocket.on('data-test', (id, data) => {
  console.log(`current data for student '${id}': `, data)
})

teacherSocket.on('student-disconnect', id => {
  window.alert(`Student disconnected from server, ID: ${id}`)
})

teacherSocket.on('reconnected', () => {
  console.log('Reconnected to the server!')
})

export default teacherSocket
