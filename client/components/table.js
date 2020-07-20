import React from 'react'
import {Grid} from '@material-ui/core'

const Table = ({data}) => (
  <React.Fragment>
    <Grid item xs={3}>
      <p>{data.faceScore || '--'}%</p>
      <h4>Time On Webcam</h4>
    </Grid>
    <Grid item xs={3}>
      <p>{data.wordCount || '--'}</p>
      <h4>Words Spoken</h4>
    </Grid>
    <Grid item xs={3}>
      <p>{data.clickCount || '--'}</p>
      <h4>Mouse Clicks</h4>
    </Grid>
    <Grid item xs={3}>
      <p>{data.keyCount || '--'}</p>
      <h4>Key Presses</h4>
    </Grid>
  </React.Fragment>
)

export default Table
