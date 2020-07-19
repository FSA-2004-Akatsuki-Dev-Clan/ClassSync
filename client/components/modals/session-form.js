import React from 'react'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const myStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6888, #FF8E53, 90%)',
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
    textAlign: 'center',
  },
}))

const SessionForm = ({title, details, url, handleChange}) => {
  const classes = myStyles()

  return (
    <Grid item xs={12} classes={classes.gridStyling}>
      <Grid item xs={12} sm={12}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(evt) => handleChange(evt.target)}
        />
        <label htmlFor="activityType">Activity Type:</label>
        <select
          name="activityType"
          onChange={(evt) => handleChange(evt.target)}
        >
          <option value="discussion">Discussion</option>
          <option value="writing">Writing</option>
          <option value="reading">Reading</option>
        </select>
        <label htmlFor="details">Details:</label>
        <input
          type="textarea"
          name="details"
          value={details}
          onChange={(evt) => handleChange(evt.target)}
        />
        <label htmlFor="url">
          {'Assignment URL (embedded form links only:'}
        </label>
        <input
          type="text"
          name="url"
          value={url}
          onChange={(evt) => handleChange(evt.target)}
        />
      </Grid>
    </Grid>
  )
}

export default SessionForm
