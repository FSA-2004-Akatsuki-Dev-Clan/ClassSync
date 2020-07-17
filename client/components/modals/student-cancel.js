import React from 'react'
import Modal from './modal'
import {reinvite, makeReinviteButton} from '../../socket/teacher'

const StudentCancel = ({first, last, studentId, socket}) => (
  <Modal
    text={`Student ${first} ${last}, ID ${studentId} did not accept session start. Send another invitation?`}
    onOk={() => reinvite(socket)}
    okText={`Re-Invite ${first}`}
    onCancel={() => makeReinviteButton({first, last, studentId, socket})}
    cancelText="Not Now"
  />
)

export default StudentCancel
