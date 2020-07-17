import React from 'react'
import Modal from './modal'

const StudentLogout = ({first, last, id}) => (
  <Modal text={`Student ${first} ${last} logged out, ID: ${id}`} okText="OK" />
)

export default StudentLogout
