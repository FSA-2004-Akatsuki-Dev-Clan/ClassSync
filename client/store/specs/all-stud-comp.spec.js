// import React from 'react'
// import {expect} from 'chai'
// import Enzyme, {shallow, mount} from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import {spy} from 'sinon'
// import {SingleStudent, AllStudents} from '../../components/index'
// import {Provider} from 'react-redux'
// import store from '../../store/index'
// import ReactDOM from 'react-dom'
// const db = require('../../../server/db/index')

// const adapter = new Adapter()
// Enzyme.configure({adapter})

// describe('Testing AllStudent componment', () => {
//   beforeEach(() => {})

//   describe('All student component', () => {
//     let allStudents

//     beforeEach('shallow copy of component', () => {
//       allStudents = mount(
//         <Provider store={store}>
//           <AllStudents />
//         </Provider>
//       )
//     })

//     it('renders a SingleStudent component', () => {
//       expect(allStudents.find(SingleStudent).length).to.be.below(2)
//     })

//     it('it has a selectedStudent field on its state', () => {
//       expect(allStudents.state().selectedStudent).to.exist
//     })
//   })
// })
