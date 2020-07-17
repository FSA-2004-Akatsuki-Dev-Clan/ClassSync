import React from 'react'
import Modal from './modal'

const StudentLogout = ({first, last, studentId}) => (
  <Modal
    text={`Student ${first} ${last} logged out, ID: ${studentId}`}
    okText="OK"
  />
)

export default StudentLogout
