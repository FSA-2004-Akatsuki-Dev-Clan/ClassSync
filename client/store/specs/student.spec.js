// import {expect} from 'chai'
// import MockAxiosAdapter from 'axios-mock-adapter'
// import axios from 'axios'
// import {reducer} from '../index'
// import enforceImmutableState from 'redux-immutable-state-invariant'
// import {getSingleStudent, fetchSingleStudent} from '../single-student'
// import {getStudents, fetchStudents} from '../students'
// import thunkMiddleware from 'redux-thunk'
// import {createStore, applyMiddleware} from 'redux'
// const assert = require('chai').assert
// const db = require('../../../server/db/index')
// const Student = require('../../../server/db/models/students')

// let store
// let mockAxios

// describe('Student model', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('student instance', () => {
//     let bruce
//     beforeEach(async () => {
//       bruce = await Student.create({
//         firstName: 'Bruce',
//         lastName: 'Wayne',
//         email: 'BW@gmail.com',
//         password: 'Batman',
//         comment: 'Martha',
//       })
//     })
//     describe('correctPassword', () => {
//       it('returns true if the password is correct', () => {
//         expect(bruce.correctPassword('Batman')).to.be.equal(true)
//       })

//       it('returns false if the password is incorrect', () => {
//         expect(bruce.correctPassword('batman')).to.be.equal(false)
//       })
//     })

//     describe('student attributes', () => {
//       it('creates a firstname attribute', () => {
//         expect(bruce.firstName).to.equal('Bruce')
//       })

//       it('create a lastName attribute', () => {
//         expect(bruce.lastName).to.equal('Wayne')
//       })

//       it('comment is a typeOf string', () => {
//         let result = bruce.comment
//         assert.typeOf(result, 'string')
//       })
//     })
//   })
// })

// describe('Action creators', () => {
//   describe('getSingleStudents', () => {
//     it('returns properly formatted action', () => {
//       const student = {id: 1, firstName: 'Pierre'}

//       expect(getSingleStudent(student)).to.be.deep.equal({
//         type: 'GET_SINGLE_STUDENT',
//         student,
//       })
//     })
//   })

//   describe('getStudents', () => {
//     it('returns properly formatted action', () => {
//       const students = [
//         {id: 1, firstName: 'Pierre'},
//         {id: 2, firstName: 'Omar'},
//       ]

//       expect(getStudents(students)).to.be.deep.equal({
//         type: 'GET_STUDENTS',
//         students,
//       })
//     })
//   })
// })

// describe('Student thunks', () => {
//   beforeEach(() => {
//     mockAxios = new MockAxiosAdapter(axios)
//     store = createStore(
//       reducer,
//       applyMiddleware(thunkMiddleware, enforceImmutableState())
//     )
//   })
//   afterEach(() => {
//     mockAxios.restore()
//   })

//   describe('GET /student/:id', () => {
//     beforeEach(() => {
//       mockAxios
//         .onGet('/api/students/1')
//         .reply(200, {id: 1, firstName: 'Pierre'})
//     })
//     it('set a single student to the state', async () => {
//       await store.dispatch(fetchSingleStudent(1))
//       const state = store.getState()
//       expect(state.student).to.deep.equal({id: 1, firstName: 'Pierre'})
//     })
//   })

//   describe('GET /students', () => {
//     beforeEach(() => {
//       mockAxios.onGet('/api/students').reply(200, [
//         {id: 1, firstName: 'Pierre', email: 'pierreparkes1@gmail.com'},
//         {id: 2, firstName: 'Omar', email: 'omarmartin1@gmail.com'},
//         {id: 3, firstName: 'Milly', email: 'millycain1@gmail.com'},
//       ])
//     })
//     it('sets the recieved students to the state', async () => {
//       await store.dispatch(fetchStudents())
//       const state = store.getState()
//       expect(state.students).to.deep.equal([
//         {id: 1, firstName: 'Pierre', email: 'pierreparkes1@gmail.com'},
//         {id: 2, firstName: 'Omar', email: 'omarmartin1@gmail.com'},
//         {id: 3, firstName: 'Milly', email: 'millycain1@gmail.com'},
//       ])
//     })

//     it('sets the recieved students to the state', async () => {
//       await store.dispatch(fetchStudents())
//       const state = store.getState()
//       expect(state.students).to.have.lengthOf(3)
//     })
//   })
// })
