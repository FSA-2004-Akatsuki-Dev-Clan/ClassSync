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
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  sessFaceAttemptTot: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  sessFaceScore: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  sessWordsSpokenTot: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  sessClickTot: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  sessKeyStrokeTot: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  numOfStudents: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Session
