import React from 'react'
import {
  Typography,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #01b8b6 30%, #d0e265 90%)',
    border: 0,
    color: 'red',
  },
  dashboardGrid: {
    display: 'flex',
    background: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridStyling: {
    textAlign: 'center'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: '8px',
    backgroundColor: '#dc004e'
  },
  form: {
    width: '100%',
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

const SessionForm = ({ title, details, url, handleChange }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} className={classes.gridStyling}>
      <form
        className={classes.form}
        noValidate
        name={name}
      >
        <Grid item xs={12} container direction="row">
          <TextField
            variant="outlined"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            type="text"
            autoComplete="title"
            autoFocus
            value={title}
            onChange={evt => handleChange(evt.target)}
          />
        </Grid>

        <FormControl fullWidth={true}>
          <InputLabel>Activity Type</InputLabel>
          <Select
            variant="outlined"
            required
            id="activityType"
            label="Activity Type"
            name="activityType"
            type="text"
            autoComplete="activityType"
            autoFocus
            onChange={evt => handleChange(evt.target)}
          >
            <MenuItem value="discussion">Discussion</MenuItem>
            <MenuItem value="reading">Reading</MenuItem>
            <MenuItem value="writing">Writing</MenuItem>
          </Select>
        </FormControl>

        <TextField
          variant="outlined"
          required
          fullWidth
          id="details"
          label="Details"
          name="details"
          type="text"
          autoComplete="details"
          autoFocus
          value={details}
          onChange={evt => handleChange(evt.target)}
        />
         <TextField
          variant="outlined"
          required
          fullWidth
          id="url"
          label="Assignment URL (embedded form links only)"
          name="url"
          type="text"
          autoComplete="url"
          autoFocus
          value={url}
          onChange={evt => handleChange(evt.target)}
        />
      </form>
    </Grid>
  )
}

export default SessionForm
