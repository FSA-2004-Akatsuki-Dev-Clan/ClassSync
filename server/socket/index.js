let teacherSocket
let sessionData = {}

module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })

    socket.on('start-session', id => {
      teacherSocket = socket.id
      socket.broadcast.emit('start-session')
    })

    socket.on('end-session', id => {
      socket.broadcast.emit('end-session')
    })

    socket.on('cancel', (id, first, last) => {
      io.to(teacherSocket).emit('cancel', id, first, last)
    })

    socket.on('re-invite', id => {
      io.to(id).emit('start-session')
    })

    socket.on('data', (id, data) => {
      sessionData[id] = {...data}
      console.log('session data', sessionData)
      io.to(teacherSocket).emit('data', id, data)
    })
  })
}
