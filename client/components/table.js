import React from 'react'
import {Grid} from '@material-ui/core'

const Table = ({data}) => (
  <div>
    <Grid item xs={3}>
      <p>{data.faceScore || '--'}</p>
      <p>Percent Time In Front of Webcam</p>
    </Grid>
    <Grid item xs={3}>
      <p>{data.wordCount || '--'}</p>
      <p>Words Spoken</p>
    </Grid>
    <Grid item xs={3}>
      <p>{data.clickCount || '--'}</p>
      <p>Mouse Clicks</p>
    </Grid>
    <Grid item xs={3}>
      <p>{data.keyCount || '--'}</p>
      <p>Key Presses</p>
    </Grid>
  </div>
)

export default Table
