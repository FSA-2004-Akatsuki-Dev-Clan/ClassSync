import React from 'react'
import Modal from './modal'

const StudentJoin = ({first, last, studentId}) => (
  <Modal
    text={`Student ${first} ${last} has joined after session start, ID: ${studentId}`}
    okText="OK"
  />
)

export default StudentJoin
