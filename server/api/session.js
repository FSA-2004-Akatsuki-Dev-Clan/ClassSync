//req.body or sessionData Format
// {
//   "id":2,
//   "faceCount":40,
//   "faceDetects":70,
//   "wordCount":300,
//   "keyCount":1023,
//   "clickCount":59,
//   "students": {
//   	"1":{
// 	    "socketId": "sdff340",
// 	    "faceCount": 10,
// 	    "faceDetects": 20,
// 	    "wordCount": 40,
// 	   "keyCount": 988,
// 	    "clickCount": 21
//   	},
//   	"2":{
//   		"socketId": "nvjimervi382",
// 	    "faceCount": 30,
// 	    "faceDetects": 50,
// 	    "wordCount": 40,
// 	   "keyCount": 90,
// 	    "clickCount": 21
//   	}
//   }
// }

const router = require('express').Router()
const {Session, Student, StudentSession, Class} = require('../db/models')

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
    console.log(req.body)
    const sessionToClose = await Session.findOne({
      where: {id: req.body.id}
    })
    sessionData.sessFaceCountTot = rawData.faceCount
    sessionData.sessFaceAttemptTot = rawData.faceDetects
    sessionData.sessFaceScore = rawData.faceScore
    sessionData.sessWordsSpokenTot = rawData.wordCount
    sessionData.sessClickTot = rawData.clickCount
    sessionData.sessKeyStrokeTot = rawData.keyCount
    sessionData.sessFaceScore = rawData.sessFaceScore
    sessionData.numOfStudents = req.body.attendance
    await sessionToClose.update(sessionData)

    res.json(sessionToClose)
  } catch (error) {
    next(error)
  }
})
module.exports = router
