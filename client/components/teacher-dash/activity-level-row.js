import React from 'react'
import {Grid, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

export default function ActivityLevelRow() {
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <p>
          <h2>25</h2>
          Total number of students
        </p>
      </Grid>
      <Grid item xs={6}>
        <Paper className={useStyles().paper}>item</Paper>
      </Grid>
    </React.Fragment>
  )
}
