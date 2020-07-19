import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { fetchStudents } from '../../store/students'
import { connect } from 'react-redux'
import { SingleStudent } from '../'
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography,
  Button
} from '@material-ui/core'
import { StudentsCard } from './students-card'

const styles = theme => ({
  root: {
    justifyContent: 'center',
    textAlign: 'center',
    justify: 'center',
    alignItems: 'center',
  },
  h1: {
    textAlign: 'center'
  },
  cards: {
    minWidth: 250
  },
  fragment: {
    textAlign: 'center',
    justify: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex",
    minHeight: 275
  },
  graph: {
    minHeight: 275
  },
  cardStyling: {
    color: 'white',
    background: 'linear-gradient(45deg, #01b8b6 30%, #d0e265 90%)'
  },
  buttonStyle: {
    background: 'linear-gradient(45deg, #01b8b6 30%, #d0e265 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
});

class AllStudents extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedStudentId: null
    }
    this.checkStudentAlert = this.checkStudentAlert.bind(this)
  }

  componentDidMount() {
    this.props.getStudents()
  }

  render() {
    const { liveStudents, liveSession, classes } = this.props

    return (
      <div>
        {this.state.selectedStudentId ? (
          <div>
            <Button
              className={classes.buttonStyle}
              type="button"
              onClick={() => this.setState({ selectedStudentId: null })}
            >
              Back to Student List
            </Button>
            {liveStudents.find(
              student => student.id === this.state.selectedStudentId
            ) && <SingleStudent studentId={this.state.selectedStudentId} />}
          </div>
        ) : (
            <div>
              <Grid item xs={12} className={classes.root} container direction='row'>

                {liveStudents.map(student => (
                  <div key={student.id}>
                    <div>
                    <Grid item xs={12} sm={6} md={3} className={classes.cards}>
                      {this.checkStudentAlert(student, liveSession).map(metric => {
                        if (metric)
                          return (
                            <i
                              className="fa fa-caret-down"
                              style={{ color: 'red', fontSize: '30px' }}
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
                            this.setState({ selectedStudentId: student.id })
                          }
                        >
                          <img
                            src={student.imageUrl}
                            height="120px"
                            title={`${student.firstName}'s profile picture`}
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
                  <Grid>&nbsp;&nbsp;&nbsp;&nbsp;</Grid>
                      </Card>
                    </Grid>
                  </div>
                    </div>
                ))}
              </Grid>
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

export default connect(mapState, mapDispatch)(withStyles(styles)(AllStudents))
