import {expect} from 'chai'
const assert = require('chai').assert
const db = require('../../../server/db/index')
const StudentSession = require('../../../server/db/models/student-session')
const Student = require('../../../server/db/models/students')
const Session = require('../../../server/db/models/sessions')

describe('Student-Session model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Student-session instance', () => {
    let student
    let session
    let studSession
    beforeEach(async () => {
      student = await Student.create({
        firstName: 'Barry',
        lastName: 'Allen',
        email: 'BA@gmail.com'
      })

      session = await Session.create({
        title: 'DC'
      })

      studSession = await StudentSession.create({
        studentId: 1,
        sessionId: 1,
        comment: 'Needs to participate more, low wordCount',
        faceCount: 20,
        faceDetects: 17,
        wordCount: 95,
        clickCount: 48,
        keyCount: 186
      })
    })

    describe('student session attributes', () => {
      it('creates a faceCount attribute', () => {
        expect(studSession.faceCount).to.equal(20)
      })

      it('create a wordCount attribute', () => {
        expect(studSession.wordCount).to.equal(95)
      })

      it('comment is a typeOf string', () => {
        let result = studSession.comment
        assert.typeOf(result, 'string')
      })

      it('keycount is a typeOf number', () => {
        let result = studSession.keyCount
        assert.typeOf(result, 'number')
      })
    })
  })
})
