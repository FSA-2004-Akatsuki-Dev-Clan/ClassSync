import React from 'react'
// import {fetchStudents} from '../../store/students'
import {connect} from 'react-redux'
import {SingleStudent} from '../'

class AllStudents extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedStudentId: null
    }
  }

  // componentDidMount() {
  //   this.props.getStudents()
  // }

  render() {
    const {liveStudents, liveSession} = this.props

    return (
      <div>
        {this.state.selectedStudentId ? (
          <div>
            <button
              type="button"
              onClick={() => this.setState({selectedStudentId: null})}
            >
              Back to Student List
            </button>
            <SingleStudent studentId={this.state.selectedStudentId} />
          </div>
        ) : (
          <div>
            {liveStudents.map(student => (
              <div
                key={student.id}
                onClick={() => this.setState({selectedStudentId: student.id})}
              >
                <h3>
                  {`${student.firstName || 'New'} ${student.lastName ||
                    'Student'}`}
                </h3>
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
    // students: state.students,
    liveStudents: state.liveStudents,
    liveSession: state.liveSession
  }
}

// const mapDispatch = (dispatch) => {
//   return {
//     getStudents: () => dispatch(fetchStudents()),
//   }
// }

export default connect(mapState)(AllStudents)
