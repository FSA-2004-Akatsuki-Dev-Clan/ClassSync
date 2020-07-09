const router = require('express').Router()
const {Session, Student, StudentSession, Class} = require('../db/models')
const {raw} = require('express')

router.post('/', async (req, res, next) => {
  try {
    const newSession = await Session.create(req.body)

    res.json(newSession)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const rawData = req.body
    const sessionData = {}
    const {students} = req.body
    console.log(req.body)
    const studentsArr = Object.keys(students)
    const sessionToClose = await Session.findOne({
      where: {id: rawData.id}
    })
    sessionData.sessFaceCountTot = rawData.faceCount
    sessionData.sessFaceAttemptTot = rawData.faceDetects
    sessionData.sessWordsSpokenTot = rawData.wordCount
    sessionData.sessClickTot = rawData.clickCount
    sessionData.sessKeyStrokeTot = rawData.keyCount
    sessionData.EndTime = Date.now()
    sessionData.numOfStudents = studentsArr.length
    sessionToClose.update(sessionData)
    for (let i = 0; i < studentsArr.length; i++) {
      const studentSess = rawData.students[studentsArr[i]]
      const studId = Number(studentsArr[i])
      console.log('this->', studId)
      delete studentSess.socketId
      delete studentSess.time
      const student = await Student.findOne({where: {id: studId}})
      await sessionToClose.addStudent(student)
      await StudentSession.update(studentSess, {
        where: {
          studentId: studId,
          sessionId: rawData.id
        }
      })
    }

    res.json(sessionToClose)
  } catch (error) {
    next(error)
  }
})
module.exports = router
