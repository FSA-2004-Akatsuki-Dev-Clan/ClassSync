import React from 'react'
import {Grid} from '@material-ui/core'

export default function ClassSumTotalsRow() {
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <p>100</p>
        <p>Mouse Clicks</p>
      </Grid>
      <Grid item xs={3}>
        <p>100</p>
        <p>Keyboard Clicks</p>
      </Grid>
      <Grid item xs={3}>
        <p>5:23:12</p>
        <p>Webcam Time</p>
      </Grid>
      <Grid item xs={3}>
        <p>3:34:23</p>
        <p>Time Speaking</p>
      </Grid>
    </React.Fragment>
  )
}
