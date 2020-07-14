import React from 'react'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Paper, Button, Container, Card, Divider} from '@material-ui/core'
import ClassworkRow from './classwork-row'
import HomeworkRow from './homework-row'
import {StudentsCard} from './students-card'
import {LiveSession, AllStudents} from '../'
import {startSession, endSession} from '../../store/user'

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
    <div>
      <Grid item xs={12}>
        <h1 style={{textAlign: 'center'}}>DASHBOARD</h1>
        <div id="teacher-session">
          {/* <h1>Hello! Your students await your tutelage</h1> */}

          <Grid item xs={12} className={classes.gridStyling}>
            <Grid item xs={12} sm={12}>
              <div id="start-end">
                <div id="create-session">
                  <Button
                    className={classes.buttonStyle}
                    type="button"
                    onClick={() => {
                      startSession({
                        title: 'test',
                        activityType: 'test',
                        details: 'test'
                      })
                    }}
                  >
                    Start New Assignment
                  </Button>
                </div>
                <div id="end" hidden={true}>
                  <Button
                    className={classes.buttonStyle}
                    type="button"
                    onClick={() => {
                      endSession()
                    }}
                  >
                    End Session
                  </Button>
                </div>
              </div>
              <h3 style={{textAlign: 'center'}}>
                Current Session Data Averages
              </h3>
              <div id="re-invites"> </div>
            </Grid>
            <Grid item xs={12} container direction="row">
              &nbsp;
            </Grid>
            <Grid container item xs={12}>
              <LiveSession session={liveSession} />
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
        </div>
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

{
  /* <form id="create-session" onSubmit={createSession}>
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
            </form> */
}
