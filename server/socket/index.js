let teacherSocket
let sessionData = {}

module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })

    socket.on('user-devices-client', () => {
      teacherSocket = socket.id
      socket.broadcast.emit('user-devices-client')
    })

    socket.on('data', (id, data) => {
      sessionData[id] = {...data}
      console.log('session data', sessionData)
      io.to(teacherSocket).emit('data', id, data)
    })
  })
}
