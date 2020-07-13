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
  faceCountAvg: {
    type: Sequelize.INTEGER,
    get() {
      return () => this.getDataValue('faceCountAvg')
    }
  },
  faceAttemptAvg: {
    type: Sequelize.INTEGER,
    get() {
      return () => this.getDataValue('faceAttemptAvg')
    }
  },
  faceScoreAvg: {
    type: Sequelize.INTEGER,
    get() {
      return () => this.getDataValue('faceScoreAvg')
    }
  },
  wordsSpokenAvg: {
    type: Sequelize.INTEGER,
    get() {
      return () => this.getDataValue('wordsSpokenAvg')
    }
  },
  mouseClickAvg: {
    type: Sequelize.INTEGER,
    get() {
      return () => this.getDataValue('mouseClickAvg')
    }
  },
  keyStrokeAvg: {
    type: Sequelize.INTEGER,
    get() {
      return () => this.getDataValue('keyStrokeAvg')
    }
  },
  numberOfSessions: {
    type: Sequelize.INTEGER,
    get() {
      return () => this.getDataValue('numberOfSessions')
    }
  }
})

module.exports = Student

/**
 * instanceMethods
 */
Student.prototype.correctPassword = function(candidatePwd) {
  return Student.encryptPassword(candidatePwd, this.salt()) === this.password()
}
Student.prototype.avgData = function({
  faceCount = 0,
  faceDetects = 0,
  faceScore = 0,
  wordCount = 0,
  clickCount = 0,
  keyCount = 0
}) {
  const faceCountAvg = Math.ceil(
    (this.faceCountAvg() * this.numberOfSessions() + faceCount) /
      (this.numberOfSessions() + 1)
  )
  console.log('faceCountAvg', faceCountAvg)
  const faceAttemptAvg = Math.ceil(
    (this.faceAttemptAvg() * this.numberOfSessions() + faceDetects) /
      (this.numberOfSessions() + 1)
  )
  console.log('faceAttemptAvg', faceAttemptAvg)
  const faceScoreAvg = Math.ceil(
    (this.faceScoreAvg() * this.numberOfSessions() + faceScore) /
      (this.numberOfSessions() + 1)
  )
  console.log('faceScoreAvg', faceScoreAvg)
  const wordsSpokenAvg = Math.ceil(
    (this.wordsSpokenAvg() * this.numberOfSessions() + wordCount) /
      (this.numberOfSessions() + 1)
  )
  console.log('wordsSpokenAvg', wordsSpokenAvg)
  const mouseClickAvg = Math.ceil(
    (this.mouseClickAvg() * this.numberOfSessions() + clickCount) /
      (this.numberOfSessions() + 1)
  )
  console.log('mouseClickAvg', mouseClickAvg)
  const keyStrokeAvg = Math.ceil(
    (this.keyStrokeAvg() * this.numberOfSessions() + keyCount) /
      (this.numberOfSessions() + 1)
  )
  console.log('keyStrokeAvg', keyStrokeAvg)
  const numberOfSessions = this.numberOfSessions() + 1
  console.log('numberOfSessions', numberOfSessions)
  return {
    faceCountAvg,
    faceAttemptAvg,
    faceScoreAvg,
    wordsSpokenAvg,
    mouseClickAvg,
    keyStrokeAvg,
    numberOfSessions
  }
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

// const setAverages = student => {
//   const newVal = student.avgData()
//   student.faceCountAvg =
//   student.wordsSpokenAvg =
//   student.mouseClickAvg =
//   student.keyStrokeAvg =
// }

Student.beforeCreate(setSaltAndPassword)
Student.beforeUpdate(setSaltAndPassword)
// Student.beforeUpdate(setAverages)
Student.beforeBulkCreate(students => {
  students.forEach(setSaltAndPassword)
})
