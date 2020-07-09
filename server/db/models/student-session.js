const Sequelize = require('sequelize')
const db = require('../db')

const StudentSession = db.define('studentSession', {
  comment: {
    type: Sequelize.TEXT
  },
  faceCount: {
    type: Sequelize.INTEGER
  },
  faceDetects: {
    type: Sequelize.INTEGER
  },
  wordCount: {
    type: Sequelize.INTEGER
  },
  clickCount: {
    type: Sequelize.INTEGER
  },
  keyCount: {
    type: Sequelize.INTEGER
  }
})

module.exports = StudentSession
