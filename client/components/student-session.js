import React from 'react'
import Iframe from 'react-iframe'
import {connect} from 'react-redux'

const StudentSession = ({student, status}) => (
  <div id="student-session">
    <h1 id="session-message">
      {status.live
        ? 'The class session is live!'
        : 'Please await class session start by the teacher'}
    </h1>
    {status.live && (
      <div id="is-Live">
        <Iframe
          url={
            status.url ||
            'https://docs.google.com/forms/d/e/1FAIpQLSfOzBcCZd61vHVLGe_f9BlOnWrILPx6G_dT9Ahz3fOE5ikUCQ/viewform?usp=sf_link'
          }
          cookieFlags="samesite=none;secure"
          width="600px"
          height="600px"
          id="student-assignment"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </div>
    )}
  </div>
)

const mapState = state => {
  return {
    status: state.status
  }
}

export default connect(mapState)(StudentSession)
