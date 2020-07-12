import {expect} from 'chai'
const assert = require('chai').assert
const db = require('../../../server/db/index')
const Session = require('../../../server/db/models/sessions')

describe('Session model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('session instance', () => {
    let session
    let date = new Date()
    beforeEach(async () => {
      session = await Session.create({
        title: 'Best movie trilogy',
        activityType: 'discussion',
        endTime: date,
        sessWordsSpokenTot: 858,
        numOfStudents: 12
      })
    })

    describe('session attributes', () => {
      it('creates a title attribute', () => {
        expect(session.title).to.equal('Best movie trilogy')
      })

      it('creates a activityType attribute', () => {
        expect(session.activityType).to.equal('discussion')
      })

      it('endTime is a typeOf object', () => {
        let result = session.numOfStudents
        assert.typeOf(result, 'number')
      })

      it('returns the correct number of students in session', () => {
        expect(session.numOfStudents).to.equal(12)
      })
    })
  })
})
