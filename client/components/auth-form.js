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
  FormControlLabel,
  Checkbox,
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
        Classync
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: '8px',
    backgroundColor: '#dc004e'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '5px'
  },
  submit: {
    margin: '17px'
  }
}))

const AuthForm = props => {
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
            className={classes.form}
            noValidate
            onSubmit={handleSubmit}
            name={name}
          >
            <Grid xs item={12} container direction="row">
              <Grid xs item={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="First Name"
                  name="firstName"
                  type="text"
                  autoComplete="firstName"
                  autoFocus
                />
              </Grid>

              <Grid xs item={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  type="text"
                  autoComplete="lastName"
                  autoFocus
                />
              </Grid>
            </Grid>

            <TextField
              variant="outlined"
              margin="normal"
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
              margin="normal"
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
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>

      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="firstName">
            <small>First Name</small>
            <input name="firstName" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="lastname">
            <small>Last Name</small>
            <input name="lastName" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="gradeLevel">
            <small>Grade Level</small>
            <select type="text" name="gradeLevel">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
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

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const gradeLevel = evt.target.gradeLevel.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(firstName, lastName, gradeLevel, email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
