import React from 'react'
import TeacherStart from './teacher-start'

const ModalSelector = props => {
  switch (props.modal) {
    case 'teacherStart':
      return <TeacherStart />

    default:
      return null
  }
}

export default ModalSelector
