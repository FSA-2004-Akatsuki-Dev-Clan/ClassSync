const router = require('express').Router()
const {Session, Student, StudentSession, Class} = require('../db/models')
const {NOW} = require('sequelize/types')

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
    const sessionToClose = await Session.findOne({
      where: {id: rawData.sessionId}
    })
    sessionData.sessFaceCountTot = 0
    sessionData.sessFaceAttemptTot = 0
    sessionData.sessWordsSpokenTot = 0
    sessionData.Endtime = NOW
    sessionData.numOfStudents = Object.key(rawData).length

    for (let key in rawData) {
      if (rawData.hasOwnProperty(key)) {
        sessionData.sessFaceCountTot += rawData[key].faceCount
        sessionData.sessFaceAttemptTot += rawData[key].faceDetections
        sessionData.sessWordsSpokenTot += rawData[key].wordCount
        sessionData.sessClickTot += rawData[key].clickCount
        sessionData.sessKeyStrokeTot += rawData[key].keyCount
        const studData = rawData[key]
        delete studData.socketId
        const studentSess = await StudentSession.create(studData)
      }
    }
    sessionToClose.update(sessionData)

    res.json(sessionToClose)
  } catch (error) {
    next(error)
  }
})
module.exports = router
