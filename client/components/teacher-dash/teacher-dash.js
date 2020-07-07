import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Paper} from '@material-ui/core'
import ClassworkRow from './classwork-row'
import HomeworkRow from './homework-row'
import ClassSumTotalsRow from './class-sum-totals-row'
import ActivityLevelRow from './activity-level-row'

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

export default function FullWidthGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1 style={{textAlign: 'center'}}>Dashboard</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <h3>Classwork status and additional data (by student)</h3>
            <Grid container item xs={12} spacing={3}>
              <ClassworkRow />
            </Grid>
          </Paper>
        </Grid>

        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Homework status and additional data (by student)
            <Grid container item xs={12} spacing={3}>
              <HomeworkRow />
            </Grid>
          </Paper>
        </Grid> */}

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h3>Total Activity Levels by Assignment</h3>
            <Grid container item xs={12}>
              <ActivityLevelRow />
              <Grid container item xs={6}>
                <ClassSumTotalsRow />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h3>All Students</h3>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
