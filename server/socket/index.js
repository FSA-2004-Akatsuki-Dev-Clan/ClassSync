const axios = require('axios')

let teacher = {id: null, socket: null}
let sessionData = {}
let sessionId = null
let live = false
let startTime
let endTime

module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    let interval

    socket.on('disconnect', () => {
      console.log('disconnect')
      // if (socket.id === teacher.socket)
      //   console.log(`The teacher disconnected from socket ${socket.id}`)
      // else {
      //   for (let studentId in sessionData[sessionId]) {
      //     if (sessionData[sessionId].hasOwnProperty(studentId)){
      //             if (socket.id === sessionData[sessionId][studentId].socket)
      //             console.log(
      //               `Student ${studentId} disconnected from socket ${socket.id}`
      //             )
      //           io.to(teacher.socket).emit('student-disconnect', studentId)
      //           return
      //     }
      //   }
      // }
    })

    socket.on('start-session', async (teacherId, sessionDetails) => {
      //?if there is unsaved data from an old session, save it now?

      teacher = {id: null, socket: null}
      sessionData = {}

      teacher.id = teacherId
      teacher.socket = socket.id

      try {
        // const {data} = await axios.post('api/session', sessionDetails)
        // sessionDataId = data

        sessionId = 'test'
        sessionData[sessionId] = {attendance: 0, students: {}}

        socket.broadcast.emit('start-session')
        live = true
        startTime = Date.now()

        interval = setInterval(() => {
          io
            .to(teacher.socket)
            .emit(
              'session-data',
              Math.floor(Date.now() / 60000),
              sessionData[sessionId]
            )
        }, 15000)
      } catch (err) {
        console.log(
          'There was a problem trying to create a new session in the database',
          err
        )
      }
    })

    socket.on('end-session', async () => {
      socket.broadcast.emit('end-session', interval)
      live = false

      clearInterval(interval)

      endTime = Date.now()

      // try {
      //   await axios.put(`api/session/:${sessionId}`, sessionData, startTime, endTime)
      // } catch (err) {
      //   console.log(
      //     'There was a problem saving the session data in the database',
      //     err
      //   )
      // }
    })

    socket.on('accept', (student, metrics) => {
      sessionData[sessionId].students[student.id] = {
        socket: socket.id,
        firstName: student.firstName,
        lastName: student.lastName,
        data: {}
      }
      if (!sessionData[sessionId].rawTotals) {
        sessionData[sessionId].rawTotals = {...metrics}
        sessionData[sessionId].averages = {...metrics}
      }
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
        if (!sessionData[sessionId].students[studentId].data.faceDetects) {
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
