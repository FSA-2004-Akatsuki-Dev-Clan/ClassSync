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
    type: Sequelize.INTEGER
  },
  sessFaceCaptureAttemptTot: {
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
  }
})

module.exports = Session
