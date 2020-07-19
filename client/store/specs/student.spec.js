import {expect} from 'chai'
import {getSingleStudent} from '../single-student'
import {getStudents} from '../students'
const assert = require('chai').assert
const db = require('../../../server/db/index')
const Student = require('../../../server/db/models/students')

describe('Student model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('student instance', () => {
    let bruce
    beforeEach(async () => {
      bruce = await Student.create({
        firstName: 'Bruce',
        lastName: 'Wayne',
        email: 'BW@gmail.com',
        password: 'Batman',
        comment: 'Martha',
      })
    })
    describe('correctPassword', () => {
      it('returns true if the password is correct', () => {
        expect(bruce.correctPassword('Batman')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(bruce.correctPassword('batman')).to.be.equal(false)
      })
    })

    describe('student attributes', () => {
      it('creates a firstname attribute', () => {
        expect(bruce.firstName).to.equal('Bruce')
      })

      it('create a lastName attribute', () => {
        expect(bruce.lastName).to.equal('Wayne')
      })

      it('comment is a typeOf string', () => {
        let result = bruce.comment
        assert.typeOf(result, 'string')
      })
    })
  })
})

describe('Action creators', () => {
  describe('getSingleStudents', () => {
    it('returns properly formatted action', () => {
      const student = {id: 1, firstName: 'Pierre'}

      expect(getSingleStudent(student)).to.be.deep.equal({
        type: 'GET_SINGLE_STUDENT',
        student,
      })
    })
  })

  describe('getStudents', () => {
    it('returns properly formatted action', () => {
      const students = [
        {id: 1, firstName: 'Pierre'},
        {id: 2, firstName: 'Omar'},
      ]

      expect(getStudents(students)).to.be.deep.equal({
        type: 'GET_STUDENTS',
        students,
      })
    })
  })
})
