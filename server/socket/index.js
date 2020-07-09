let teacher = {id: null, socket: null}
let sessionData = {}
let sessionId = null
let live = false
const axios = require('axios')

module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    let interval

    socket.on('disconnect', () => {
      console.log('disconnect')
      // if (socket.id === teacher.socket)
      //   console.log(`The teacher disconnected from socket ${socket.id}`)
      // else {
      //   for (studentId in sessionData[sessionId]) {
      //     if (socket.id === sessionData[sessionId][studentId].socket)
      //       console.log(
      //         `Student ${studentId} disconnected from socket ${socket.id}`
      //       )
      //     io.to(teacher.socket).emit('student-disconnect', studentId)
      //     return
      //   }
      // }
    })

    socket.on('start-session', (teacherId, sessionDetails) => {
      //if there is unsaved data from an old session, save it now

      teacher = {id: null, socket: null}
      sessionData = {}

      teacher.id = teacherId
      teacher.socket = socket.id

      //create session in database here, and get its id

      //const {data} = axios.post('api/session', sessionDetails)
      //sessionId = data.id
    
      sessionId = 'test'
      sessionData[sessionId] = {attendance: 0, students: {}}

      socket.broadcast.emit('start-session')
      live = true
    })

    socket.on('end-session', sessioData => {
      axios.put('api/session', sessioData)
      socket.broadcast.emit('end-session')
      live = false

      //save data here
    })

    socket.on('accept', (studentId, metrics) => {
      sessionData[sessionId].students[studentId] = {socket: socket.id}
      if (!sessionData[sessionId].rawTotals) {
        sessionData[sessionId].rawTotals = {...metrics}
        sessionData[sessionId].averages = {...metrics}
      }

      interval = setInterval(() => {
        io
          .to(teacher.socket)
          .emit(
            'student-data',
            studentId,
            Date.now(),
            {...sessionData[sessionId].students[studentId].data},
            {...sessionData[sessionId].averages}
          )
      }, 20000)
    })

    // socket.on('cancel', (studentId, first, last) => {
    //   io.to(teacher.socket).emit('cancel', socket.id, studentId, first, last)
    // })

    socket.on('re-invite', socketId => {
      io.to(socketId).emit('start-session')
    })

    socket.on('reconnect', userId => {
      // if (live) {
      //   if (teacher.id === userId) {
      //     teacher.socket = socket.id
      //     io.to(socket.id).emit('reconnected')
      //   } else if (sessionData[sessionId][userId]) {
      //     sessionData[sessionId][userId].socket = socket.id
      //     io.to(socket.id).emit('reconnected', sessionData[sessionId][userId])
      //   }
      // }
    })

    socket.on('student-data', (studentId, newData) => {
      if (live) {
        if (!sessionData[sessionId].students[studentId].data) {
          sessionData[sessionId].students[studentId].data = {...newData}
          sessionData[sessionId].attendance++
        } else {
          for (metric in newData) {
            sessionData[sessionId].students[studentId].data[metric] +=
              newData[metric]
          }
        }

        for (metric in newData) {
          sessionData[sessionId].rawTotals[metric] += newData[metric]
          sessionData[sessionId].averages[metric] =
            sessionData[sessionId].rawTotals[metric] /
            sessionData[sessionId].attendance
        }

        console.log('session data', sessionData)
        io
          .to(teacher.socket)
          .emit(
            'data-test',
            studentId,
            sessionData[sessionId].students[studentId]
          )
      }
    })

    socket.on('logout', () => {
      console.log('logout')
      // if (socket.id === teacher.socket) {
      //   socket.disconnect(true)
      //   console.log(
      //     `The teacher logged out and disconnected from socket ${socket.id}`
      //   )
      // } else {
      //   for (studentId in sessionData[sessionId]) {
      //     if (socket.id === sessionData[sessionId][studentId].socket)
      //       console.log(
      //         `Student ${studentId} disconnected from socket ${socket.id}`
      //       )
      //     io.to(teacher.socket).emit('student-disconnect', studentId)
      //     return
      //   }
      // }
    })
  })
}
