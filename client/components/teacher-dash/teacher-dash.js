import React from 'react'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Button} from '@material-ui/core'
import ClassworkRow from './classwork-row'
// import HomeworkRow from './homework-row'
// import {StudentsCard} from './students-card'
import {LiveSession, AllStudents, SessionForm} from '../'
import {setModal, endSession} from '../../store/'

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
  form,
  createSession,
  liveSession,
  live,
  title,
  openTeacherStart
}) => {
  const classes = myStyles()

  return (
    <div>
      <Grid item xs={12}>
        <h1 style={{textAlign: 'center'}}>DASHBOARD</h1>
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
                        Start Session
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
                      onClick={endSession}
                    >
                      End Session
                    </Button>
                  </div>
                )}
              </div>
              <div id="re-invites"> </div>
            </Grid>
            {/* <Grid item xs={12} container direction="row">
              &nbsp;
            </Grid> */}
            {live && <h1>Live Session: {title}</h1>}
            <Grid container item xs={12}>
              <LiveSession session={liveSession} />
              <Grid container item xs={6} />
            </Grid>
            <Grid item xs={12}>
              <h3>Students In Session</h3>
              <AllStudents />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} className={classes.gridStyling}>
            <h3>Past Sessions</h3>
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
    liveSession: state.liveSession,
    live: state.status.live,
    title: state.status.title
  }
}

const mapDispatch = dispatch => {
  return {
    openTeacherStart() {
      dispatch(setModal('teacherStart'))
    }
  }
}

export default connect(mapState, mapDispatch)(TeacherDash)
