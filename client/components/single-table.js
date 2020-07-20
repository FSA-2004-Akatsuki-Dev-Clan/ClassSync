import React from 'react'
import {Grid} from '@material-ui/core'

const SingleTable = ({data}) => (
  <React.Fragment>
    <Grid item xs={3}>
      <p>{data.faceScoreAvg}%</p>
      <h4>Average Time On Webcam</h4>
    </Grid>
    <Grid item xs={3}>
      <p>{data.wordsSpokenAvg}</p>
      <h4>Average Words Spoken</h4>
    </Grid>
    <Grid item xs={3}>
      <p>{data.mouseClickAvg}</p>
      <h4>Average Mouse Clicks</h4>
    </Grid>
    <Grid item xs={3}>
      <p>{data.keyStrokeAvg}</p>
      <h4>Average Key Presses</h4>
    </Grid>
  </React.Fragment>
)

export default SingleTable
