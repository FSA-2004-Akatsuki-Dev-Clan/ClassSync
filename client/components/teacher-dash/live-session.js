import React from 'react'
import {Grid, Card} from '@material-ui/core'
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
  },
  fragment: {
    textAlign: 'center',
    justify: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardStyling: {
    color: 'white',
    background: 'linear-gradient(45deg, #8bfe6b 30%, #53ebff 90%)'
  }
}))

const LiveSession = ({session}) => {
  const classes = myStyles()
  return (
    <Grid className={classes.fragment} container direction="row">
      <React.Fragment className={classes.fragment}>
        <Grid item xs={5}>
          <Card>
            <Grid
              item
              xs={12}
              className={classes.fragment}
              container
              direction="row"
            >
              <Grid item xs={8}>
                <Card className={classes.cardStyling}>
                  <img src="../../graph.png" height="50px" />
                </Card>
              </Grid>
            </Grid>
            <h1>{session.attendance || 0}</h1>
            Totals Students Transmitting Data
            <Grid item xs={12} container direction="row">
              &nbsp;
            </Grid>
            <Grid item xs={12} container direction="row">
              &nbsp;
            </Grid>
            <Grid item xs={12} container direction="row">
              {session !== {} && <Table data={session} />}
            </Grid>
          </Card>
        </Grid>
        <Grid>&nbsp; &nbsp; &nbsp; &nbsp;</Grid>
        <Grid item xs={5}>
          <Card>{session !== {} && <Chart data={session} />}</Card>
        </Grid>
      </React.Fragment>
    </Grid>
  )
}

export default LiveSession
