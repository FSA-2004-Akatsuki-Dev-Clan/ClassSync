import React from 'react'
import Modal from './modal'

const StudentRejoin = ({first, last, studentId}) => (
  <Modal
    text={`Student ${first} ${last} has re-connected to the session, ID: ${studentId}`}
    okText={OK}
  />
)

export default StudentRejoin
