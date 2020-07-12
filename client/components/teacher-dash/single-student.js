import React from 'react'
import {Chart, Table} from '../'
import {Grid} from '@material-ui/core'

const SingleStudent = ({student, session}) => (
  <div>
    <Grid item xs={12} container direction="row">
      <Grid item xs={6}>
        <SingleTable data={student} />
      </Grid>
      <Grid item xs={6}>
        <div className="chart">
          <Chart data={student} compare={session} />
        </div>
      </Grid>
    </Grid>
  </div>
)

export default SingleStudent
