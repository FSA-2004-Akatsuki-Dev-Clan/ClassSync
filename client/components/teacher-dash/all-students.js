import React from 'react'
import {connect} from 'react-redux'
import {fetchStudents} from '../../store/students'
import {SingleStudent} from '../'

export class AllStudents extends React.Component {
  constructor() {
    super()
    this.state = {
      studentId: null
    }
    this.handle = this.handle.bind(this)
  }
  componentDidMount = () => {
    this.props.getStudents()
  }

  handle = id => {
    // if (this.state.studentId) {
    //   this.setState({studentId: null})
    // } else {
    this.setState({studentId: id})
    // }
  }

  render() {
    const {students} = this.props
    // <div onClick={()=>this.handle()}><button type="button">Close graphs</button></div>
    // const selectedStudent = students.find(student => student.id ===this.state.studentId)
    return (
      <div>
        {this.state.studentId ? (
          <div>
            <button type="button" onClick={() => this.handle(null)}>
              Close graphs
            </button>
            <SingleStudent studentId={this.state.studentId} />
          </div>
        ) : (
          <div>
            {students.map(student => (
              <div key={student.id} onClick={() => this.handle(student.id)}>
                <h3>{student.firstName}</h3>
                <h3>{student.lastName}</h3>
              </div>
            ))}
          </div>
        )}
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
