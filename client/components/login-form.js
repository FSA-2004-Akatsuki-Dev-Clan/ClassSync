import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {
  Typography,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Container
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {makeStyles} from '@material-ui/styles'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        ClassSync
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    // marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: '8px',
    backgroundColor: '#dc004e'
  },
  form: {
    width: '100%' // Fix IE 11 issue.
  },
  buttonStyle: {
    marginTop: '10px',
    background: 'linear-gradient(45deg, #01b8b6 30%, #d0e265 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  linkStyle: {
    color: '#535415',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const LoginForm = props => {
  const classes = useStyles()
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            // margin={0}
            className={classes.form}
            noValidate
            onSubmit={handleSubmit}
            name={name}
          >
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="text"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.buttonStyle}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link
                  href="/signup"
                  variant="body2"
                  className={classes.linkStyle}
                >
                  {'Sign Up As A New  Student'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>

      {/* <a href="/auth/google">{displayName} with Google</a> */}
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const firstName = null
      const lastName = null
      const gradeLevel = null
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(firstName, lastName, gradeLevel, email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(LoginForm)

/**
 * PROP TYPES
 */
LoginForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
