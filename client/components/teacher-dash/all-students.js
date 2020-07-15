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
      selectedStudentId: null
    }
  }

  componentDidMount() {
    this.props.getStudents()
  }

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
              <div key={student.id}>
                <Grid item xs={2}>
                  <Card maxWidth="345px">
                    <CardActionArea
                      onClick={() =>
                        this.setState({selectedStudentId: student.id})
                      }
                    >
                      <img
                        src="../../default-profile-pic.jpg"
                        height="150px"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {`${student.firstName || 'New'} ${
                            student.lastName
                          }` || 'Student'}
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
