import socket from '.'

const teacherSocket = socket

teacherSocket.on('cancel', (id, first, last) => {
  if (
    window.confirm(
      `Student ${first} ${last}, ID ${id} did not accept session start. Send another invitation?`
    )
  )
    socket.emit('re-invite', id)
  else {
    const reInvite = document.createElement('button')
    reInvite.innerHTML = `Re-Invite Student: ${first} ${last}, ID ${id}`

    document.getElementById('teacher-session').appendChild(reInvite)

    reInvite.onclick = () => {
      socket.emit('re-invite', id)
      document.getElementById('teacher-session').removeChild(reInvite)
    }
  }
})

teacherSocket.on('data', (id, data) => {
  console.log(`current data for student '${id}': `, data)
})

export const startSession = id => {
  if (window.confirm('Are you ready to start the session?')) {
    teacherSocket.emit('start-session', id)

    document.getElementById('start').hidden = true
    document.getElementById('end').hidden = false
  }
}

export const endSession = id => {
  if (window.confirm('Are you sure you want to end the session?')) {
    teacherSocket.emit('end-session', id)

    document.getElementById('start').hidden = false
    document.getElementById('end').hidden = true
  }
}

export default teacherSocket
