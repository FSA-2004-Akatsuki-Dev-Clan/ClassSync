import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#63621f'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: '#01b8b6',
    fontSize: '0.9rem',
    fontFamily: 'Montserrat'
  },
  buttonStyle: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
}))

const Navbar = ({handleClick, user}) => {
  const classes = useStyles()
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Link className={classes.link} to="/homepage">
              <img src="../../classsync-logo.png" height="50px" />
            </Link>
            <nav>
              {user.id ? (
                <div>
                  {/* The navbar will show these links after you log in */}
                  <Link className={classes.link} to="/session">
                    {user.isTeacher ? 'Dashboard' : 'Student Session'}
                  </Link>
                  <a className={classes.link} href="#" onClick={handleClick}>
                    Logout
                  </a>
                </div>
              ) : (
                <div>
                  {/* The navbar will show these links before you log in */}
                  <Link to="/login" className={classes.link}>
                    Login
                  </Link>
                  <Link to="/signup" className={classes.link}>
                    Signup
                  </Link>
                </div>
              )}
            </nav>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                {user.id && (
                  <span>Welcome to your classroom, {user.firstName}!</span>
                )}
                {/* <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                >
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My account</MenuItem>
                </Menu> */}
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
