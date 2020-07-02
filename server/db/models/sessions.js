const Sequelize = require('sequelize')
const db = require('../db')

const Session = db.define('sessions', {
  title: {
    type: Sequelize.STRING
  },
  activityType: {
    type: Sequelize.ENUM('pair-classwork', 'pair-homework', 'reading', 'writing', 'test', 'quiz', 'discussion')
  }
})

module.exports = Session