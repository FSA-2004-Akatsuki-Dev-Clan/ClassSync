import React from 'react'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Paper, Button, Container, Card, Divider} from '@material-ui/core'
import ClassworkRow from './classwork-row'
import HomeworkRow from './homework-row'
import ClassSumTotalsRow from './class-sum-totals-row'
import ActivityLevelRow from './activity-level-row'
import AllStudents from './all-students'
import {startSession, endSession} from '../../socket/teacher'
import {StudentsCard} from './students-card'

const myStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6888, #FF8E53, 90%)',
    border: 0,
    color: 'red'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary
  },
  dashboardGrid: {
    display: 'flex',
    background: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  gridStyling: {
    textAlign: 'center'
  }
}))

const TeacherDash = ({teacher, liveSession}) => {
  const classes = myStyles()

  return (
    <div>
      <Grid item xs={12}>
        <h1 style={{textAlign: 'center'}}>DASHBOARD</h1>
      </Grid>

      <Grid item xs={12} className={classes.gridStyling}>
        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          Homework status and additional data (by student)
          <Grid container item xs={12} spacing={3}>
          <HomeworkRow />
          </Grid>
          </Paper>
        </Grid> */}

        <Grid>
          <Grid item xs={12} sm={12}>
            <div id="teacher-session">
              <Button
                className={classes.buttonStyle}
                id="start"
                type="button"
                onClick={() => {
                  startSession(teacher.id, 'test')
                }}
              >
                Start New Assignment
              </Button>
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
          <Grid item xs={12} container direction="row">
            &nbsp;
          </Grid>
          <Grid container item xs={12}>
            <ActivityLevelRow session={liveSession} />
            <Grid container item xs={6} />
          </Grid>
          <Grid item xs={12}>
            <h3>Current Students</h3>
            <AllStudents />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} className={classes.gridStyling}>
          <h3>Classwork status and additional data (by student)</h3>
          <Grid container item xs={12} spacing={3}>
            <ClassworkRow />
          </Grid>
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
