import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Button} from '@material-ui/core'

const myStyles = makeStyles(theme => ({
  Grid: {
    flexGrow: 1
  }
}))

const HomePage = () => {
  const classes = myStyles()

  return (
    <div>
      <h1>Hello World</h1>
      <Grid item xs={12} container direction="row">
        <Grid>
          O
          <div>
            <img src="../../public/class-sync-homepage.jpg" height="1000px" />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default HomePage
