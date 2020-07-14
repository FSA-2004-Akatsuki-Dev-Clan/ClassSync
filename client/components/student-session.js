import React from 'react'
import Iframe from 'react-iframe'
import {connect} from 'react-redux'

const StudentSession = ({student, url}) => (
  <div id="student-session">
    <h1 id="session-message">
      Hello! Please await class session start by the teacher
    </h1>
    <div id="is-Live" hidden={true}>
      <Iframe
        url={
          url.length
            ? url
            : 'https://docs.google.com/forms/d/e/1FAIpQLSfOzBcCZd61vHVLGe_f9BlOnWrILPx6G_dT9Ahz3fOE5ikUCQ/viewform?usp=sf_link'
        }
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

const mapState = state => {
  return {
    url: state.assignment
  }
}

export default connect(mapState)(StudentSession)