const Sequelize = require('sequelize')
const db = require('../db')
const {NOW} = require('sequelize')

const StudentSession = db.define('studentSession', {
  comment: {
    type: Sequelize.TEXT
  },
  startTime: {
    type: Sequelize.DATE,
    defaultValue: NOW
  },
  EndTime: {
    type: Sequelize.DATE,
    defaultValue: null
  },
  sessionFaceCount: {
    type: Sequelize.INTEGER
  },
  sessionFaceCaptureAttempts: {
    type: Sequelize.INTEGER
  },
  sessionWordsSpoken: {
    type: Sequelize.INTEGER
  },
  sessionClicks: {
    type: Sequelize.INTEGER
  }
})

module.exports = StudentSession
