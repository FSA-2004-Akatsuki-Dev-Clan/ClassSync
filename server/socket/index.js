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
      if (socket.id === teacher.socket)
        console.log(`The teacher disconnected from socket ${socket.id}`)
      else if (live) {
        for (studentId in sessionData[sessionId].students) {
          if (socket.id === sessionData[sessionId].students[studentId].socket) {
            console.log(
              `Student ${studentId} disconnected from socket ${socket.id}`
            )
            io.to(teacher.socket).emit('student-disconnect', {
              id: studentId,
              firstName: sessionData[sessionId].students[studentId].firstName,
              lastName: sessionData[sessionId].students[studentId].lastName
            })
            return
          }
        }
      }
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
      socket.broadcast.emit('end-session')
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

    socket.on('cancel', (studentId, first, last) => {
      io.to(teacher.socket).emit('cancel', socket.id, studentId, first, last)
    })

    socket.on('re-invite', socketId => {
      io.to(socketId).emit('start-session')
    })

    socket.on('reconnect', userId => {
      if (live) {
        if (teacher.id === userId) {
          teacher.socket = socket.id
          io
            .to(socket.id)
            .emit('Reconnected to live session, should continue receiving data')
        } else if (sessionData[sessionId].students[userId]) {
          sessionData[sessionId].students[userId].socket = socket.id
          io.to(socket.id).emit('Reconnected to live session')
          io.to(socket.id).emit('start-session')
        }
      }
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
          sessionData[sessionId].averages[metric] = Math.ceil(
            sessionData[sessionId].rawTotals[metric] /
              sessionData[sessionId].attendance
          )
        }
      }
    })

    socket.on('logout', user => {
      console.log('logout')
      if (user.id === teacher.id) {
        console.log(
          `The teacher logged out and disconnected from socket ${socket.id}`
        )
        socket.broadcast.emit('end-session')
        live = false

        clearInterval(interval)
      } else {
        console.log(
          `Student ${user.id} logged out and disconnected from socket ${
            socket.id
          }`
        )
        io.to(teacher.socket).emit('student-disconnect', user)
      }
    })
  })
}
