import React from 'react'
import {TeacherDash, StudentMonitor} from '../components'
import {connect} from 'react-redux'

class Session extends React.Component {
  render() {
    const user = this.props.user

    return user.isTeacher ? (
      <TeacherDash teacher={user} />
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
