import React from 'react'
import {Grid} from '@material-ui/core'

const SingleTable = ({data}) => (
  <React.Fragment>
    <Grid item xs={3}>
      <p>{data.faceScoreAvg}</p>
      <p>FaceScore Avg</p>
    </Grid>
    <Grid item xs={3}>
      <p>{data.wordsSpokenAvg}</p>
      <p>Words Spoken Avg</p>
    </Grid>
    <Grid item xs={3}>
      <p>{data.mouseClickAvg}</p>
      <p>Mouse Clicks Avg</p>
    </Grid>
    <Grid item xs={3}>
      <p>{data.keyStrokeAvg}</p>
      <p>Key Presses Avg</p>
    </Grid>
  </React.Fragment>
)

export default SingleTable
