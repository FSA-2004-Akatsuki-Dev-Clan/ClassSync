import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Button} from '@material-ui/core'

const myStyles = makeStyles(theme => ({
  Grid: {
    flexGrow: 1
  }
}))

export const HomePage = () => {
  const classes = myStyles()

  return (
    <div>
      <h1>Hello</h1>
      <Grid item xs={12} container direction="row">
        <Grid>
          <div>
            <img src="../../public/class-sync-homepage.jpg" height="1000px" />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
