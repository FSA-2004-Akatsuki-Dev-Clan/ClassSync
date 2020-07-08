const Sequelize = require('sequelize')
const db = require('../db')
const {NOW} = require('sequelize')

const Session = db.define('sessions', {
  title: {
    type: Sequelize.STRING
  },
  activityType: {
    type: Sequelize.ENUM(
      'lecture',
      'pair-work',
      'group-work',
      'reading',
      'writing',
      'test',
      'quiz',
      'discussion'
    )
  },
  details: {
    type: Sequelize.TEXT
  },
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
  sessFaceCountTot: {
    type: Sequelize.INTEGER
  },
  sessFaceAttemptTot: {
    type: Sequelize.INTEGER
  },
  sessWordsSpokenTot: {
    type: Sequelize.INTEGER
  },
  sessMouseClickTot: {
    type: Sequelize.INTEGER
  },
  sessKeyStrokeTot: {
    type: Sequelize.INTEGER
  },
  numOfStudents: {
    type: Sequelize.INTEGER
  }
})

module.exports = Session
