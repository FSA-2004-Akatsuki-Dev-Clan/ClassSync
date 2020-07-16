import React from 'react'
import Modal from './modal'

const StudentDisconnect = ({first, last, studentId, socket}) => (
  <Modal
    text={`Student ${first} ${last} disconnected, ID: ${studentId} socket: ${socket}`}
    okText={OK}
  />
)

export default StudentDisconnect
