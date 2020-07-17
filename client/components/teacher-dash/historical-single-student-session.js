import React from 'react'
import {connect} from 'react-redux'
import {fetchStudentSessions} from '../../store/single-student-session'

class HistoricalSingleStudentSession extends React.Component {
  componentDidMount() {
    this.props.fetchStudentSessions(this.props.studentId)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleStudentSession: state.studentSessions
  }
}

const mapDispatch = dispatch => {
  return {
    fetchStudentSessions: id => dispatch(fetchStudentSessions(id))
  }
}

export default connect(mapState, mapDispatch)(HistoricalSingleStudentSession)
