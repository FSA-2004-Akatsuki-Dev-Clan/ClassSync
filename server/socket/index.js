const axios = require('axios')

//data relevant to live sessions is stored here
let teacher = {id: null, socket: null}
let sessionData = {}
let studentData = {}
let live = false
let startTime
let endTime

module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    let interval

    //On socket disconnect, identify whether student or teacher. If student, inform the teacher
    socket.on('disconnect', () => {
      console.log('disconnect')
      if (socket.id === teacher.socket)
        console.log(`The teacher disconnected from socket ${socket.id}`)
      else if (live) {
        for (studentId in studentData) {
          if (socket.id === studentData[studentId].socket) {
            console.log(
              `Student ${studentId} disconnected from socket ${socket.id}`
            )
            io.to(teacher.socket).emit('student-disconnect', {
              id: studentId,
              firstName: studentData[studentId].firstName,
              lastName: studentData[studentId].lastName
            })
            return
          }
        }
      }
    })

    //start message from teacher => session data is initialized, new session instance is created in database
    //Students are sent start message; Interval is set to send the teacher data pings
    socket.on('start-session', async (teacherId, sessionDetails) => {
      //?if there is unsaved data from an old session, save it now?

      teacher = {id: null, socket: null}
      sessionData = {}
      studentData = {}

      teacher.id = teacherId
      teacher.socket = socket.id

      try {
        // const {data} = await axios.post('api/session', sessionDetails)
        // sessionDataId = data

        sessionId = 'test'
        sessionData.id = sessionId
        sessionData.attendance = 0

        socket.broadcast.emit('start-session')
        live = true
        startTime = Date.now()

        interval = setInterval(() => {
          io
            .to(teacher.socket)
            .emit(
              'session-data',
              Math.floor(Date.now() / 60000),
              sessionData,
              studentData
            )
        }, 15000)
      } catch (err) {
        console.log(
          'There was a problem trying to create a new session in the database',
          err
        )
      }
    })

    //end message from teacher => end message is sent to students, data message interval is cleared
    //session data is saved in the database
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

    // accept message from student => their data on the session is initialized
    //if this is the first accept for the session, session data is also initialized
    socket.on('accept', (student, metrics) => {
      studentData[student.id] = {
        id: student.id,
        socket: socket.id,
        firstName: student.firstName,
        lastName: student.lastName,
        data: {}
      }
      if (!sessionData.rawTotals) {
        sessionData.rawTotals = {...metrics}
        sessionData.averages = {...metrics}
      }
    })

    //cancel message from student => their ID is sent to teacher
    socket.on('cancel', (studentId, first, last) => {
      io.to(teacher.socket).emit('cancel', socket.id, studentId, first, last)
    })

    //re-invites routed to students from teacher
    socket.on('re-invite', socketId => {
      io.to(socketId).emit('start-session')
    })

    //reconnect message sent whenever a socket is opened for a logged-in user => if there is a live session =>
    //if user is teacher, teacher socket is reset; if student and they have associated data on session, socket ID is associated to that data
    socket.on('reconnect', userId => {
      if (live) {
        if (teacher.id === userId) {
          teacher.socket = socket.id
          io
            .to(socket.id)
            .emit('Reconnected to live session, should continue receiving data')
        } else if (studentData[userId]) {
          studentData[userId].socket = socket.id
          io.to(socket.id).emit('Reconnected to live session')
          io.to(socket.id).emit('start-session')
        }
      }
    })

    //data point from student => if session is live, add the data
    socket.on('student-data', (studentId, newData) => {
      if (live) {
        //if no data for this student yet, copy values, calculate faceScore, and session attendance variable
        if (!studentData[studentId].data.faceDetects) {
          studentData[studentId].data = {...newData}
          studentData[studentId].data.faceScore = Math.ceil(
            studentData[studentId].data.faceCount /
              studentData[studentId].data.faceDetects *
              100
          )
          sessionData.attendance++
        } else {
          //if data exists for student, add the new numbers and recalculate faceScore
          for (metric in newData) {
            studentData[studentId].data[metric] += newData[metric]
            studentData[studentId].data.faceScore = Math.ceil(
              studentData[studentId].data.faceCount /
                studentData[studentId].data.faceDetects *
                100
            )
          }
        }

        //add new numbers to session data totals, calculate faceScore, and calculate average values for all students in attendance
        for (metric in newData) {
          sessionData.rawTotals[metric] += newData[metric]
          sessionData.rawTotals.faceScore = Math.ceil(
            sessionData.rawTotals.faceCount /
              sessionData.rawTotals.faceDetects *
              100
          )
          sessionData.averages[metric] = Math.ceil(
            sessionData.rawTotals[metric] / sessionData.attendance
          )
          sessionData.averages.faceScore = Math.ceil(
            sessionData.averages.faceCount /
              sessionData.averages.faceDetects *
              100
          )
        }
      }
    })

    //on user logout => if teacher, end the session; if student, inform the teacher
    socket.on('logout', user => {
      console.log('logout')
      if (user.id === teacher.id) {
        console.log(`The teacher logged out`)
        socket.broadcast.emit('end-session')
        live = false

        clearInterval(interval)
      } else {
        console.log(`Student ${user.id} logged out`)
        io.to(teacher.socket).emit('student-disconnect', user)
      }
    })
  })
}
