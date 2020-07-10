import React from 'react'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Paper} from '@material-ui/core'
import ClassworkRow from './classwork-row'
import HomeworkRow from './homework-row'
import ClassSumTotalsRow from './class-sum-totals-row'
import ActivityLevelRow from './activity-level-row'
import AllStudents from './all-students'
import {startSession, endSession} from '../../socket/teacher'

const myStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const TeacherDash = ({teacher, liveSession}) => {
  const classes = myStyles()

  return (
    <div className={classes.root}>
      <h1 style={{textAlign: 'center'}}>Dashboard</h1>

      <Grid item xs={12} sm={12}>
        <div id="teacher-session">
          <h1>Hello! Your students await your tutelage</h1>
          <button
            id="start"
            type="button"
            onClick={() => {
              startSession(teacher.id, 'test')
            }}
          >
            Start Session
          </button>
          <button
            id="end"
            type="button"
            hidden={true}
            onClick={() => {
              endSession()
            }}
          >
            End Session
          </button>
        </div>
      </Grid>

      <Grid container spacing={3}>
        {/*<Grid item xs={12} sm={12}>
          <Paper
            className={classes.paper}
            // style={{background: 'linear-gradient(to right bottom, #ff9d00, #ffd56b)'}}
          >
            <h3>Classwork status and additional data (by student)</h3>
            <Grid container item xs={12} spacing={3}>
              <ClassworkRow />
            </Grid>
          </Paper>
        </Grid> */}

        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Homework status and additional data (by student)
            <Grid container item xs={12} spacing={3}>
              <HomeworkRow />
            </Grid>
          </Paper>
        </Grid> */}

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h3>Current Session Data</h3>
            <Grid container item xs={12}>
              <ActivityLevelRow session={liveSession} />
              <Grid container item xs={6} />
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h3>All Students</h3>
            <AllStudents />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

const mapState = state => {
  return {
    liveSession: state.liveSession
  }
}

export default connect(mapState)(TeacherDash)
