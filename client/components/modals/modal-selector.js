import React from 'react'
import {connect} from 'react-redux'
import TeacherStart from './teacher-start'
import StudentStart from './student-start'
import EndAlert from './end-alert'
import TeacherEnd from './teacher-end'
import StudentCancel from './student-cancel'
import StudentLogout from './student-logout'
import StudentDisconnect from './student-disconnect'
import StudentRejoin from './student-rejoin'
import StudentJoin from './student-join'

const ModalSelector = ({modal, student}) => {
  switch (modal) {
    case 'teacherStart':
      return <TeacherStart />

    case 'studentStart':
      return <StudentStart />

    case 'endAlert':
      return <EndAlert />

    case 'teacherEnd':
      return <TeacherEnd />

    case 'studentCancel':
      return <StudentCancel {...student} />

    case 'studentLogout':
      return <StudentLogout {...student} />

    case 'studentDisconnect':
      return <StudentDisconnect {...student} />

    case 'studentRejoin':
      return <StudentRejoin {...student} />

    case 'studentJoin':
      return <StudentJoin {...student} />

    default:
      return null
  }
}

const mapState = state => ({
  student: state.status.alert
})

export default connect(mapState)(ModalSelector)
