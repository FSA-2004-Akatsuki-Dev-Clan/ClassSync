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
