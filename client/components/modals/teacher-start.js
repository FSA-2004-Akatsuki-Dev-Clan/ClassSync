import React from 'react'
import Modal from './modal'
import {startSession} from '../../store/user'
import {default as SessionForm} from './session-form'

class TeacherStart extends React.Component {
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
    return (
      <Modal
        text="Enter an activity title to start a new session"
        onOk={this.state.title && this.createSession}
        okText={this.state.title && 'Start Session'}
        cancelText="Cancel"
      >
        <SessionForm {...this.state} handleChange={this.handleChange} />
      </Modal>
    )
  }

  handleChange(attribute) {
    this.setState({[attribute.name]: attribute.value})
  }

  createSession() {
    startSession({
      title: this.state.title,
      activityType: this.state.activityType,
      details: this.state.details,
      url: this.state.url
    })

    this.setState({title: '', activityType: 'discussion', details: '', url: ''})
  }
}

export default TeacherStart
