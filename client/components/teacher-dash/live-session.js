import React from 'react'
import {Grid, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Table, Chart} from '../'

const myStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const LiveSession = ({session}) => (
  <React.Fragment>
    <Grid item xs={6}>
      <h2>{session.attendance || 0}</h2>
      Totals Students in Attendance
      <Grid item xs={12} container direction="row">
        &nbsp;
      </Grid>
      <Grid item xs={12} container direction="row">
        &nbsp;
      </Grid>
      <Grid item xs={12} container direction="row">
        <Table data={session} />
      </Grid>
    </Grid>
    <Grid item xs={6}>
      <Paper className={myStyles().paper}>
        <Chart data={session} />
      </Paper>
    </Grid>
  </React.Fragment>
)

export default LiveSession
