const Sequelize = require('sequelize')
const db = require('../db')

const Class = db.define('classes', {
  subject: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gradeLevel: {
    type: Sequelize.INTEGER
  }
})

module.exports = Class