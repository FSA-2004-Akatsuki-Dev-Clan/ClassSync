import React from 'react'
import Modal from './modal'
import {saveSession} from '../../store/user'

const TeacherSave = () => {
  return (
    <Modal
      text="You have not saved data from the latest session yet. Save now?"
      onOk={saveSession}
      okText="Save"
      cancelText="Not Now"
    />
  )
}

export default TeacherSave
