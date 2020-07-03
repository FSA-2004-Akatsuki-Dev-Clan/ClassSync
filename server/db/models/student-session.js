const Sequelize = require('sequelize')
const db = require('../db')

const StudentSession = db.define('studentSession', {
  data: {
    type: Sequelize.INTEGER
  }
})

module.exports = StudentSession
