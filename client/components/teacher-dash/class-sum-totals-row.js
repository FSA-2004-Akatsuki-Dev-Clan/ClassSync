import React from 'react'
import {Grid} from '@material-ui/core'

export default function ClassSumTotalsRow({session}) {
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <h2>{session.faceScore || '0'}</h2>
        <p>Average Percent Time In Front of Webcam</p>
      </Grid>
      <Grid item xs={3}>
        <h2>{session.wordCount || '0'}</h2>
        <p>Average Words Spoken</p>
      </Grid>
      <Grid item xs={3}>
        <h2>{session.clickCount || '0'}</h2>
        <p>Average Mouse Clicks</p>
      </Grid>
      <Grid item xs={3}>
        <h2>{session.keyCount || '0'}</h2>
        <p>Average Key Presses</p>
      </Grid>
    </React.Fragment>
  )
}
