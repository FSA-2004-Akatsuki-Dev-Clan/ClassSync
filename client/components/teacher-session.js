import React from 'react'
import {startSession, endSession} from '../socket/teacher'

const TeacherSession = ({teacher}) => (
  <div id="teacher-session">
    <h1>Hello! Your students await your tutelage</h1>
    <button
      id="start"
      type="button"
      onClick={() => {
        startSession(teacher.id)
      }}
    >
      Start Session
    </button>
    <button
      id="end"
      type="button"
      hidden={true}
      onClick={() => {
        endSession(teacher.id)
      }}
    >
      End Session
    </button>
  </div>
)

export default TeacherSession
