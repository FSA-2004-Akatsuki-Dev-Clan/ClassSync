import React from 'react'
import {connect} from 'react-redux'
import {fetchStudentSess} from '../store/historical-session'
import {fetchStudents} from '../store/historical-session'

class HistoricalSession extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  //   componentDidMount() {
  //     this.props.getStudents()
  //   }

  handleClick(id) {
    console.log('i am props =========>', this.props)
    this.props.getStudentHis(id)
  }
  render() {
    const {students} = this.props

    return (
      <div>
        {students.map(student => (
          <div key={student.id}>
            <h1>{student.firstName}</h1>
          </div>
        ))}
        <button type="button" onClick={() => this.handleClick(3)}>
          {' '}
          Get Student History
        </button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    studentSession: state.studentSession,
    students: state.students
  }
}

const mapDispatch = dispatch => {
  return {
    getStudentHis: id => dispatch(fetchStudentSess(id)),
    getStudents: () => dispatch(fetchStudents())
  }
}

export default connect(mapState, mapDispatch)(HistoricalSession)
