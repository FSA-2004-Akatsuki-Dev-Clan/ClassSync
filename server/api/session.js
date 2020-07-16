const router = require('express').Router()
const {Session} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const sessions = await Session.findAll()

    res.json(sessions)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const session = await Session.findByPk(req.params.id)

    res.json(session)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newSession = await Session.create(req.body)

    res.json(newSession.id)
  } catch (error) {
    next(error)
  }
})

router.put('/save', async (req, res, next) => {
  try {
    const rawData = req.body.rawTotals
    const sessionData = {}
    const sessionToClose = await Session.findByPk(+req.body.id)

    sessionData.sessFaceCountTot = rawData.faceCount
    sessionData.sessFaceAttemptTot = rawData.faceDetects
    sessionData.sessFaceScore = rawData.faceScore
    sessionData.sessWordsSpokenTot = rawData.wordCount
    sessionData.sessClickTot = rawData.clickCount
    sessionData.sessKeyStrokeTot = rawData.keyCount
    sessionData.sessFaceScore = rawData.faceScore
    sessionData.numOfStudents = req.body.attendance
    await sessionToClose.update(sessionData)

    res.json(sessionToClose)
  } catch (error) {
    next(error)
  }
})
module.exports = router
