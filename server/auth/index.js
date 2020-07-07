const router = require('express').Router()
const Teacher = require('../db/models/teachers')
const Student = require('../db/models/students')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    let user

    const teacher = await Teacher.findOne({where: {email: req.body.email}})
    const student = await Student.findOne({where: {email: req.body.email}})

    if (teacher) {
      user = teacher
    } else {
      user = student
    }
    if (!user) {
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const student = await Student.create(req.body)
    req.login(student, err => (err ? next(err) : res.json(student)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('Student already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
