import React from 'react'
import {Grid, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const myStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const classworkObject = {
  assignmentName: [
    'Assignment 1',
    'Assignment 2',
    'Assignment 3',
    'Assignment 4',
  ],
}

export default function ClassworkRow() {
  return (
    <React.Fragment>
      {classworkObject.assignmentName.map((assignment) => {
        return (
          <Grid item xs={3} key={assignment[11]}>
            <Paper
              className={myStyles().paper}
              // style={{background: 'linear-gradient(to right bottom, #00ff51, #94ffb6)'}}
            >
              {assignment}
            </Paper>
          </Grid>
        )
      })}
    </React.Fragment>
  )
}

const mapState = (state) => {
  return {
    students: state.students,
    sessions: state.sessions,
    singleStudentSession: state.singleStudentSession,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getStudentHis: (id) => dispatch(fetchStudentSess(id)),
    getSessions: () => dispatch(fetchSession()),
  }
}

export default connect(mapState, mapDispatch)(HistoricalSingleStudent)
