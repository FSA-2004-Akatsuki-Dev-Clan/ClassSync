import React from 'react'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Paper} from '@material-ui/core'
// import ClassworkRow from './classwork-row'
// import HomeworkRow from './homework-row'
import {LiveSession, AllStudents} from '../'
import {startSession, endSession} from '../../store/user'

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

const TeacherDash = ({
  title,
  activityType,
  details,
  url,
  liveSession,
  createSession,
  handleChange
}) => {
  const classes = myStyles()

  return (
    <div className={classes.root}>
      <h1 style={{textAlign: 'center'}}>Dashboard</h1>

      <Grid item xs={12} sm={12}>
        <div id="teacher-session">
          <div id="start-end">
            <h1>Hello! Your students await your tutelage</h1>
            <button
              id="create-session"
              type="button"
              onClick={() => {
                startSession({
                  title: 'test',
                  activityType: 'test',
                  details: 'test'
                })
              }}
            >
              Start Session
            </button>
            {/* <form id="create-session" onSubmit={createSession}>
              <label htmlFor="title">
                Title:{' '}
                {title === '' && (
                  <span>(Enter a title for the new session)</span>
                )}
              </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(evt) => handleChange(evt.target)}
              ></input>
              <label htmlFor="activityType">Activity Type:</label>
              <select
                name="activityType"
                onChange={(evt) => handleChange(evt.target)}
              >
                <option value="writing">Writing</option>
                <option value="reading">Reading</option>
                <option value="discussion">Discussion</option>
              </select>
              <label htmlFor="details">Details:</label>
              <input
                type="text"
                name="details"
                value={details}
                onChange={(evt) => handleChange(evt.target)}
              ></input>
              <label htmlFor="url">Assignment URL:</label>
              <input
                type="text"
                name="url"
                value={url}
                onChange={(evt) => handleChange(evt.target)}
              ></input>
              <button type="submit" disabled={title === ''}>
                Start Session
              </button>
            </form> */}
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
          <div id="re-invites" />
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
            <h3>Current Session Data Averages</h3>
            <Grid container item xs={12}>
              <LiveSession session={liveSession} />
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
