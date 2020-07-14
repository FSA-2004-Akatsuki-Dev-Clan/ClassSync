'use strict'

const db = require('../server/db')
const {
  Teacher,
  Student,
  StudentSession,
  Session
} = require('../server/db/models')
const studentSeed = require('./seedData/student-seed')
const teacherSeed = require('./seedData/teacher-seed')
const studentSessionSeed = require('./seedData/student-session-seed')
const sessionSeed = require('./seedData/session-seed')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const allTeachers = await Promise.all(
    teacherSeed.map(teacher => {
      return Teacher.create(teacher)
    })
  )

  const allStudents = await Promise.all(
    studentSeed.map(student => {
      return Student.create(student)
    })
  )

  const allSessions = await Promise.all(
    sessionSeed.map(session => {
      return Session.create(session)
    })
  )

  const allStudentSession = await Promise.all(
    studentSessionSeed.map(async studentSess => {
      const StudentWRel = await StudentSession.findOrCreate({
        where: {
          studentId: +studentSess.studentId,
          sessionId: studentSess.sessionId,
          faceCount: studentSess.faceCount,
          faceDetects: studentSess.faceDetects,
          wordCount: studentSess.wordCount,
          clickCount: studentSess.clickCount,
          keyCount: studentSess.keyCount
        }
      })

      return StudentWRel
    })
  )

  console.log(`seeded ${allTeachers.length} teachers`)
  console.log(`seeded ${allStudents.length} students`)
  console.log(`seeded ${allSessions.length} sessions`)
  console.log(`seeded ${allStudentSession.length} student-sessions`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
