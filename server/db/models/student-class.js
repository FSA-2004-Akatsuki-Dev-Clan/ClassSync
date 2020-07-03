const Sequelize = require('sequelize')
const db = require('../db')

const StudentClass = db.define('studentClass', {
  data: {
    type: Sequelize.INTEGER
  }
})

module.exports = StudentClass
