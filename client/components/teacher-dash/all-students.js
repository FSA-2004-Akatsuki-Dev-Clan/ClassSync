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
    this.checkStudentAlert = this.checkStudentAlert.bind(this)
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
              <div key={student.id}>
                <Grid item xs={2}>
                  {this.checkStudentAlert(student, liveSession).map(metric => {
                    if (metric)
                      return (
                        <i
                          className="fa fa-caret-down"
                          style={{color: 'red', fontSize: '30px'}}
                        />
                      )
                  })}
                  {/* <i
                    className="fa fa-caret-down"
                    style={{color: 'red', fontSize: '30px'}}
                  /> */}
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

  checkStudentAlert(student, session) {
    return [
      student.faceScore < session.faceScore / 2,
      student.wordCount < session.wordCount / 2,
      student.keyCount < session.keyCount / 2,
      student.clickCount < session.clickCount / 2
    ]
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
