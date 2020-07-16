import React from 'react'
import Modal from './modal'
import {endSession} from '../../store/user'

const TeacherEnd = () => (
  <Modal
    text="Are you sure you want to end the session?"
    onOk={endSession}
    okText="End Session and Save Dataset"
    cancelText="Continue Session"
  />
)

export default TeacherEnd
