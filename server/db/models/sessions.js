const Sequelize = require('sequelize')
const db = require('../db')

const Session = db.define('sessions', {
  title: {
    type: Sequelize.STRING
  },
  activityType: {
    type: Sequelize.ENUM('pair-work', 'group-work', 'reading', 'writing', 'test', 'quiz', 'discussion')
  },
  details: {
    type: Sequelize.TEXT
  },
  comment: {
    type: Sequelize.TEXT
  }
})

module.exports = Session
