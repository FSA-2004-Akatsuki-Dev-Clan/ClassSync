import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {
  Grid,
  Button,
  CssBaseline,
  Paper,
  Avatar,
  ButtonGroup
} from '@material-ui/core'

const myStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zeroMinWidth: true,
    backgroundColor: '#f8fcd9'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  image: {
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justify: 'center'
  },
  h1: {
    textAlign: 'center',
    color: '#393a34'
  },
  h2: {
    textAlign: 'center',
    color: '#393a34'
  },
  imageButtons: {
    position: 'relative',
    width: '100%'
  },
  buttons: {
    position: 'absolute',
    top: '42%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#a6c42e',
    color: 'white',
    fontSize: '16px',
    padding: '8px 8px',
    border: 'none',
    cursor: 'pointer'
  }
}))

const HomePage = () => {
  const classes = myStyles()

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <div className={classes.imageButtons}>
          <img src="/class-sync-homepage.jpg" width="100%" height="auto" />
          <ButtonGroup className={classes.buttons}>
            <Link to="/login">
              <Button
                variant="contained"
                color="#a2c221"
                startIcon={<Avatar src="/SignIn.png" href="/login" />}
              >
                SIGN IN
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                variant="contained"
                color="a2c221"
                startIcon={<Avatar src="/SignUp.png" />}
              >
                SIGN UP
              </Button>
            </Link>
          </ButtonGroup>
        </div>
        <h1 className={classes.h1}>Imagine a piece of software...</h1>
      </Grid>
      &nbsp;
      <Grid container spacing={3} direction="row">
        <Grid item xs={4}>
          <img
            className={classes.image}
            src="/student-teacher.png"
            height="200px"
          />
        </Grid>
        <Grid item xs={8}>
          <h2 className={classes.h2}>
            That helps your students learn just as well as when they were
            physically in school
          </h2>
        </Grid>
      </Grid>
      &nbsp;
      <Grid container spacing={1} direction="row">
        <Grid item xs={8}>
          <h2 className={classes.h2}>
            And no matter what subject you teach...
          </h2>
        </Grid>
        <Grid item xs={4}>
          <img
            className={classes.image}
            src="/schoolsubjects.png"
            height="200px"
          />
        </Grid>
      </Grid>
      &nbsp;
      <Grid container spacing={3} direction="row">
        <Grid item xs={4}>
          <img
            className={classes.image}
            src="/boyoncomputer.png"
            height="200px"
          />
        </Grid>
        <Grid item xs={8}>
          <h2 className={classes.h2}>
            You can keep an eye on what they're doing and be ready to help when
            they need it as if you never left the building!
          </h2>
        </Grid>
      </Grid>
    </div>
  )
}

export default HomePage
