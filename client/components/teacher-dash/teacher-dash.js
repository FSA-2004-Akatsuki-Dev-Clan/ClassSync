import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'
import RecentSessions from './recent-sessions'
import {
  LiveSession,
  AllStudents,
  SessionForm,
  SimpleAccordion,
} from '../'
import {setModal, endSession} from '../../store/'

const myStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6888, #FF8E53, 90%)',
    border: 0,
    backgroundColor: '#f8fcd9',
    zeroMinWidth: true
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  dashboardGrid: {
    display: 'flex',
    background: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    background: 'linear-gradient(45deg, #01b8b6 30%, #d0e265 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  gridStyling: {
    textAlign: 'center'
  },
  h1: {
    margin: 0
  }
}))

const TeacherDash = ({
  form,
  createSession,
  liveSession,
  live,
  title,
  saved,
  openTeacherStart,
  openTeacherEnd,
}) => {
  const classes = myStyles()

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Grid>&nbsp;</Grid>
        <h1 style={{ textAlign: 'center' }} className={classes.h1}>DASHBOARD</h1>
        <Grid>&nbsp;</Grid>
        <div id="teacher-session">
          <Grid item xs={12} className={classes.gridStyling}>
            <Grid item xs={12} sm={12}>
              <div id="start-end">
                {!live ? (
                  <div>
                    {/* <h3>Enter an activity title to start a new session</h3> */}
                    <div id="create-session">
                      {/* {form.title && ( */}
                      <Button
                        className={classes.buttonStyle}
                        type="button"
                        // onClick={createSession}
                        onClick={openTeacherStart}
                      >
                        Create New Session
                      </Button>
                      {/* )} */}
                      {/* <SessionForm {...form} classes={classes} /> */}
                    </div>
                  </div>
                ) : (
                    <div id="end">
                      <Button
                        className={classes.buttonStyle}
                        type="button"
                        onClick={openTeacherEnd}
                      >
                        End Session
                    </Button>
                    </div>
                  )}
              </div>
              <div id="re-invites"> </div>
            <Grid>&nbsp;</Grid>
            </Grid>
            {/* <Grid item xs={12} container direction="row">
              &nbsp;
            </Grid> */}
            {liveSession.faceDetects || live ? (
              <h1>
                {live ? 'Live Session: ' : 'Most Recent Session: '}
                {title}
              </h1>
            ) : (
              ''
            )}
            <Grid container item xs={12}>
              <LiveSession session={liveSession} />
              <Grid container item xs={6} />
            </Grid>
            {liveSession.faceDetects ? (
              <Grid item xs={12}>
                <h3>Students In Session</h3>
                <AllStudents />
              </Grid>
            ) : (
              ''
            )}
          </Grid>
 </div>
          <Grid item xs={12} sm={12} className={classes.gridStyling}>
            <h3>Recent Sessions</h3>
            <Grid container item xs={12} spacing={3}>
              <RecentSessions />
            </Grid>
          </Grid>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
          <Grid item xs={12} className={classes.gridStyling}>
            <SimpleAccordion />
          </Grid>
      </Grid>
    </div>
  )
}

const mapState = (state) => {
  return {
    liveSession: state.liveSession,
    live: state.status.live,
    title: state.status.title,
    saved: state.status.saved,
  }
}

const mapDispatch = (dispatch) => {
  return {
    openTeacherStart() {
      dispatch(setModal('teacherStart'))
    },
    openTeacherEnd() {
      dispatch(setModal('teacherEnd'))
    },
  }
}

export default connect(mapState, mapDispatch)(TeacherDash)
