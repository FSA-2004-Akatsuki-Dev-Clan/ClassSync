import React from 'react'
import Iframe from 'react-iframe'

const StudentSession = ({student}) => (
  <div id="student-session">
    <h1 id="session-message">
      Hello! Please await class session start by the teacher
    </h1>
    <div id="is-Live" hidden={true}>
      <Iframe
        url="https://docs.google.com/forms/d/e/1FAIpQLSfOzBcCZd61vHVLGe_f9BlOnWrILPx6G_dT9Ahz3fOE5ikUCQ/viewform?usp=sf_link"
        SameSite="None"
        Secure
        width="600px"
        height="600px"
        id="student-assignment"
        className="myClassname"
        display="initial"
        position="relative"
      />
    </div>
  </div>
)

export default StudentSession
