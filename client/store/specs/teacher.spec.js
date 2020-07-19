import {expect} from 'chai'
const assert = require('chai').assert
const db = require('../../../server/db/index')
const Teacher = require('../../../server/db/models/teachers')

describe('Teacher model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('teacher instance', () => {
    let clark
    beforeEach(async () => {
      clark = await Teacher.create({
        firstName: 'Clark',
        lastName: 'Kent',
        email: 'DP@gmail.com',
        password: 'Superman',
        isTeacher: true
      })
    })
    describe('correctPassword', () => {
      it('returns true if the password is correct', () => {
        expect(clark.correctPassword('Superman')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(clark.correctPassword('superman')).to.be.equal(false)
      })
    })

    describe('teacher attributes', () => {
      it('creates a firstname attribute', () => {
        expect(clark.firstName).to.equal('Clark')
      })

      it('create a lastName attribute', () => {
        expect(clark.lastName).to.equal('Kent')
      })

      it('isTeacher returns a boolean', () => {
        let result = clark.isTeacher
        assert.typeOf(result, 'boolean')
      })
    })
  })
})
