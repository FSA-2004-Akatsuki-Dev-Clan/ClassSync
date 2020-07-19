import React from 'react'
import {Grid} from '@material-ui/core'

const SingleTable = ({data}) => (
  <React.Fragment>
    <Grid item xs={3}>
      <p>{data.faceScoreAvg}</p>
      <p>Average Percent Time On Webcam</p>
    </Grid>
    <Grid item xs={3}>
      <p>{data.wordsSpokenAvg}</p>
      <p>Average Words Spoken</p>
    </Grid>
    <Grid item xs={3}>
      <p>{data.mouseClickAvg}</p>
      <p>Average Mouse Clicks</p>
    </Grid>
    <Grid item xs={3}>
      <p>{data.keyStrokeAvg}</p>
      <p>Average Key Presses</p>
    </Grid>
  </React.Fragment>
)

export default SingleTable
