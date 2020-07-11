import React from 'react'
import {TeacherDash, StudentMonitor} from '../components'
import {connect} from 'react-redux'

class Session extends React.Component {
  constructor() {
    super()
    this.state = {
      Gform: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    const user = this.props.user

    return user.isTeacher ? (
      <TeacherDash
        teacher={user}
        GformHandle={event => this.changeHandler(event)}
        GformLink={this.state.Gform}
      />
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
