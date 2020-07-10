import React from 'react'
import {Grid} from '@material-ui/core'

export default function ClassSumTotalsRow({session}) {
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <p>{session.faceScore || '--'}</p>
        <p>Average Percent Time In Front of Webcam</p>
      </Grid>
      <Grid item xs={3}>
        <p>{session.wordCount || '--'}</p>
        <p>Average Words Spoken</p>
      </Grid>
      <Grid item xs={3}>
        <p>{session.clickCount || '--'}</p>
        <p>Average Mouse Clicks</p>
      </Grid>
      <Grid item xs={3}>
        <p>{session.keyCount || '--'}</p>
        <p>Average Key Presses</p>
      </Grid>
    </React.Fragment>
  )
}
