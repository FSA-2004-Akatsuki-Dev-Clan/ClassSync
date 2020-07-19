import React from 'react'
import { connect } from 'react-redux'
import { fetchStudentSess } from '../../store/historical-session'
import { fetchStudents } from '../../store/students'
import { HistoricalSingleStudent } from '../'
import { withStyles } from '@material-ui/styles';
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography,
  Button
} from '@material-ui/core'

const styles = theme => ({
  root: {
    minWidth: 275,
    minHeight: 225
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

class HistoricalSession extends React.Component {
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
    const { students, classes } = this.props
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
            <HistoricalSingleStudent studentId={this.state.selectedStudentId} />
          </div>
        ) : (
            <div>
              <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="center"
              >
                {students.map(student => (
                  <Grid key={student.id} item xs={12} sm={6} md={3} container direction='row'>
                    <Card className={classes.root}>
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
                          <Typography gutterBottom variant="h5" component="h2" textAlign='center'>
                            {`${student.firstName || 'New'} ${
                              student.lastName
                              }` || 'Student'}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            textAlign='center'
                          >
                            {student.grade}
                            {student.email}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
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

export default connect(mapState, mapDispatch)(withStyles(styles)(HistoricalSession))

{
  /* <div>
        {students.map(student => (
          <div key={student.id}>
            <h1>{student.firstName}</h1>
          </div>
        ))}

        <button type="button" onClick={() => this.handleClick(3)}>
          {' '}
          Get Student History
        </button>
      </div> */
}
