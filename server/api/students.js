const router = require('express').Router()
const {Student} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll()
    res.json(students)
  } catch (err) {
    next(err)
  }
})

router.get('/:studentid', async (req, res, next) => {
  try {
    const singleStudent = await Student.findOne({
      where: {
        id: req.params.studentid
      }
    })
    res.json(singleStudent)
  } catch (error) {
    next(error)
  }
})
