const Sequelize = require('sequelize')
const db = require('../db')

const StudentSession = db.define('studentSession', {
  data: {
    type: Sequelize.INTEGER
  },
  comment: {
    type: Sequelize.TEXT
  }
})

module.exports = StudentSession
