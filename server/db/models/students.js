const Sequelize = require('sequelize')
const crypto = require('crypto')
const db = require('../db')

const Student = db.define('students', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  gradeLevel: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  comment: {
    type: Sequelize.TEXT
  },
  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  },
  googleId: {
    type: Sequelize.STRING
  },
  faceCountTot: {
    type: Sequelize.INTEGER
  },
  faceCaptureAttemptTot: {
    type: Sequelize.INTEGER
  },
  wordsSpokenTot: {
    type: Sequelize.INTEGER
  },
  mouseClickTot: {
    type: Sequelize.INTEGER
  },
  keyStrokeTot: {
    type: Sequelize.INTEGER
  }
})

module.exports = Student

/**
 * instanceMethods
 */
Student.prototype.correctPassword = function(candidatePwd) {
  return Student.encryptPassword(candidatePwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
Student.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

Student.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = student => {
  if (student.changed('password')) {
    student.salt = Student.generateSalt()
    student.password = Student.encryptPassword(
      student.password(),
      student.salt()
    )
  }
}

Student.beforeCreate(setSaltAndPassword)
Student.beforeUpdate(setSaltAndPassword)
Student.beforeBulkCreate(students => {
  students.forEach(setSaltAndPassword)
})
