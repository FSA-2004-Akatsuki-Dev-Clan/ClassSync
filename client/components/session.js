import React from 'react'
import {TeacherSession, StudentMonitor} from '../components'
import {connect} from 'react-redux'

class Session extends React.Component {
  render() {
    const user = this.props.user

    return user.isTeacher ? (
      <TeacherSession teacher={user} />
    ) : (
      <StudentMonitor student={user} />
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(Session)
