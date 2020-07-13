import React from 'react'
import {Grid} from '@material-ui/core'

export default class SingleTable extends React.Component {
  render() {
    const {data} = this.props
    return (
      <React.Fragment>
        <Grid item xs={12} container direction="row">
          <Grid item xs={3}>
            <p>{data.faceScore || '--'}</p>
            <p>Average Percent Time In Front of Webcam</p>
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
        </Grid>
      </React.Fragment>
    )
  }
}
