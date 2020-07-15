import React from 'react'
import {connect} from 'react-redux'
import {fetchStudentSess} from '../../store/historical-session'
import {fetchStudents} from '../../store/historical-session'
import {HistoricalSingleStudent} from '../'
import {makeStyles} from '@material-ui/core/styles'
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core'

class HistoricalSession extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedStudentId: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  //   componentDidMount() {
  //     this.props.getStudents()
  //   }

  handleClick(id) {
    this.props.getStudentHis(id)
  }
  render() {
    const {students} = this.props

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
            <HistoricalSingleStudent studentId={this.state.selectedStudentId} />
          </div>
        ) : (
          <div>
            {students.map(student => (
              <div key={student.id}>
                <Grid item xs={2}>
                  <Card width="100%">
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
