const Sequelize = require('sequelize')
const db = require('../db')
const {NOW} = require('sequelize')

const StudentSession = db.define('studentSession', {
  comment: {
    type: Sequelize.TEXT
  },
  faceCount: {
    type: Sequelize.INTEGER
  },
  faceCaptureAttempts: {
    type: Sequelize.INTEGER
  },
  wordsSpoken: {
    type: Sequelize.INTEGER
  },
  clicks: {
    type: Sequelize.INTEGER
  },
  keyStrokes: {
    type: Sequelize.INTEGER
  }
})

module.exports = StudentSession
