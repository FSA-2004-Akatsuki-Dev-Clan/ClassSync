import React from 'react'
import {Grid} from '@material-ui/core'

export default class SingleTable extends React.Component {
  constructor() {
    super()
    this.state = {
      metric: 'faceScore'
    }
  }
  render() {
    const {data} = this.props
    console.log('what is DATA ???? ====>', data)
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <p>{data.faceScore || '--'}</p>
          <p>Face Detected on Webcam</p>
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
      </React.Fragment>
    )
  }
}
