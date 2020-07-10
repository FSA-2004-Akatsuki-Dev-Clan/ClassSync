import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {fetchStudents} from '../../store/students'
import {connect} from 'react-redux'
import {SingleStudent} from '../'
import {Card, CardActions, CardContent, Typography} from '@material-ui/core'

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
    // const useStyles = makeStyles({
    //   root: {
    //     minWidth: 275,
    //   },
    //   bullet: {
    //     display: 'inline-block',
    //     margin: '0 2px',
    //     transform: 'scale(0.8)',
    //   },
    //   title: {
    //     fontSize: 14,
    //   },
    //   pos: {
    //     marginBottom: 12,
    //   },
    // });

    // const classes = useStyles()

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
                {/* <Card className={classes.root}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {`${student.firstName} ${student.lastName}`}
                      </Typography>
                      {/* <Typography className={classes.pos} color="textSecondary">
                        adjective
                      </Typography> */}
                {/* <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography> */}
                {/* </CardContent>
                    <CardActions>
                    </CardActions> */}
                {/* </Card> */}

                <Card>
                  <h3>{student.firstName}</h3>
                  <h3>{student.lastName}</h3>
                </Card>
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
