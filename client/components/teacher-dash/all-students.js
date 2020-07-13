import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {fetchStudents} from '../../store/students'
import {connect} from 'react-redux'
import {SingleStudent} from '../'
import {Card, Grid} from '@material-ui/core'
import {StudentsCard} from './students-card'

class AllStudents extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedStudent: {}
    }
  }

  componentDidMount() {
    this.props.getStudents()
  }

  render() {
    const {students, liveStudents, liveSession} = this.props

    console.log('liveStudents, liveSession', liveStudents, liveSession)

    return (
      <div>
        {this.state.selectedStudent.id ? (
          <div>
            <button
              type="button"
              onClick={() => this.setState({selectedStudent: {}})}
            >
              Back to Student List
            </button>
            <SingleStudent
              student={this.state.selectedStudent}
              liveStudents={liveStudents}
              liveSession={liveSession}
            />
          </div>
        ) : (
          <div>
            {liveStudents.map(student => (
              <div
                key={student.id}
                onClick={() => this.setState({selectedStudent: student})}
              >
                <Card>
                  <h3>{student.firstName}</h3>
                  <h3>{student.lastName}</h3>
                </Card>
                <Grid item xs={2}>
                  <StudentsCard {...this.props} />
                </Grid>
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
    students: state.students,
    liveStudents: state.liveStudents,
    liveSession: state.liveSession
  }
}

const mapDispatch = dispatch => {
  return {
    getStudents: () => dispatch(fetchStudents())
  }
}

export default connect(mapState, mapDispatch)(AllStudents)
