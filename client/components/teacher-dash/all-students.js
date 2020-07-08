import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchStudents} from '../../store/students'

export class AllStudents extends React.Component {
  componentDidMount = () => {
    this.props.getStudents()
  }

  render() {
    const {students} = this.props
    return (
      <div>
        {students.map(student => (
          <div key={student.id}>
            <Link to={`/allstudents/${student.id}`}>
              <h3>{student.firstName}</h3>
              <h3>{student.lastName}</h3>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    students: state.students
  }
}

const mapDispatch = dispatch => {
  return {
    getStudents: () => dispatch(fetchStudents())
  }
}

export default connect(mapState, mapDispatch)(AllStudents)
