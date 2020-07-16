import React from 'react'
import Modal from './modal'
import {connect} from 'react-redux'
import {acceptSession, cancelSession} from '../../socket/student'

const StudentStart = ({title}) => (
  <Modal
    text={`Your teacher has started the live session: ${title}. This will access your video and audio streams.`}
    onOk={acceptSession}
    okText="Accept Connection"
    onCancel={cancelSession}
    cancelText="Refuse Connection (the teacher will be notified)"
  />
)
const mapState = state => ({
  title: state.status.title
})

export default connect(mapState)(StudentStart)
