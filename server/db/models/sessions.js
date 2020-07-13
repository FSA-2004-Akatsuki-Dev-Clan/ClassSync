const Sequelize = require('sequelize')
const db = require('../db')

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
