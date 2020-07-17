import React from 'react'
import {connect} from 'react-redux'
import TeacherStart from './teacher-start'
import StudentStart from './student-start'
import EndAlert from './end-alert'
import TeacherEnd from './teacher-end'
import TeacherSave from './teacher-save'
import StudentCancel from './student-cancel'
import StudentLogout from './student-logout'
import StudentDisconnect from './student-disconnect'
import StudentRejoin from './student-rejoin'
import StudentJoin from './student-join'
import NoServerData from './no-data'
import LiveLogout from './live-logout'

const ModalSelector = ({modal, student, session, user}) => {
  switch (modal) {
    case 'teacherStart':
      return <TeacherStart />

    case 'studentStart':
      return <StudentStart />

    case 'endAlert':
      return <EndAlert />

    case 'teacherEnd':
      return <TeacherEnd session={session} />

    case 'teacherSave':
      return <TeacherSave />

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

    case 'noServerData':
      return <NoServerData />

    case 'liveLogout':
      return <LiveLogout isTeacher={user.isTeacher} session={session} />

    default:
      return null
  }
}

const mapState = state => ({
  student: state.status.alert,
  session: state.liveSession,
  user: state.user
})

export default connect(mapState)(ModalSelector)
