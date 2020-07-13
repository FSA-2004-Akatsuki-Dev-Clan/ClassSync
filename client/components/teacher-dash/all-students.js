import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {fetchStudents} from '../../store/students'
import {connect} from 'react-redux'
import {SingleStudent} from '../'
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core'
import {StudentsCard} from './students-card'

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345
//   },
//   media: {
//     height: 140
//   }
// })

// const classes = useStyles()

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
                <Grid item xs={2}>
                  <Card maxWidth="345px">
                    <CardActionArea>
                      <img
                        src="../../default-profile-pic.jpg"
                        height="150px"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {`${student.firstName} ${student.lastName}` ||
                            'New Student'}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {student.grade}
                          {student.email}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <h3>{student.firstName || 'New Student'}</h3>
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
