const router = require('express').Router()
const {Session, Student, StudentSession, Class} = require('../db/models')

router.get('/:id', async (req, res, next) => {
  try {
    const studentSess = await StudentSession.findAll({
      where: {
        sessionId: req.params.id,
      },
      include: {model: Student},
    })
    res.json(studentSess)
  } catch (error) {
    next(error)
  }
})

router.get('/singleStudent/:id', async (req, res, next) => {
  try {
    const studentSess = await StudentSession.findOne({
      where: {
        // sessionId: +req.params.id,
        studentId: +req.body.studentId,
      },
      include: {model: Session},
    })
    res.json(studentSess)
  } catch (error) {
    next(error)
  }
})

module.exports = router
