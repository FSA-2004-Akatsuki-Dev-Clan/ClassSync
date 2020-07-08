const Sequelize = require('sequelize')
const db = require('../db')

const Class = db.define('classes', {
  subject: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gradeLevel: {
    type: Sequelize.INTEGER
  },
  classRunTotFaceCount: {
    type: Sequelize.INTEGER
  },
  classRunTotFaceCaptureAttempt: {
    type: Sequelize.INTEGER
  },
  classRunTotWordsSpoken: {
    type: Sequelize.INTEGER
  },
  classRunTotMouseClick: {
    type: Sequelize.INTEGER
  },
  classRunTotKeyStroke: {
    type: Sequelize.INTEGER
  }
})

module.exports = Class
