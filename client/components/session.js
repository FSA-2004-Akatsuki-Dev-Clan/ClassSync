import React from 'react'
import {TeacherDash, StudentSession} from '../components'
import {connect} from 'react-redux'
import {startSession} from '../store/user'

class Session extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      activityType: 'discussion',
      details: '',
      url: ''
    }
    this.createSession = this.createSession.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    const user = this.props.user

    return user.isTeacher ? (
      <TeacherDash
        teacher={user}
        form={{
          ...this.state,
          handleChange: this.handleChange
        }}
        createSession={this.createSession}
      />
    ) : (
      <StudentSession student={user} />
    )
  }

  handleChange(attribute) {
    this.setState({[attribute.name]: attribute.value})
  }

  createSession(event) {
    event.preventDefault()

    startSession({
      title: this.state.title,
      activityType: this.state.activityType,
      details: this.state.details,
      url: this.state.url
    })

    this.setState({title: '', activityType: 'discussion', details: '', url: ''})
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(Session)
