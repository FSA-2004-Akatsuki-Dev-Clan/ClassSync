import React from 'react'
import SimpleTable from './table'
import Chart from './teacher-dash/chart'
import ClassSumTotalsRow from '../components/teacher-dash/class-sum-totals-row'
import SingleTable from './single-stud-table'
import {Grid} from '@material-ui/core'

export default class SingleStudent extends React.Component {
  render() {
    const {student, liveSession} = this.props

    return (
      <div>
        {student.firstName}
        {student.lastName}
        {student.email}

        <React.Fragment>
          <Grid item xs={12} container direction="row">
            <Grid item xs={6}>
              <SingleTable data={student} />
            </Grid>
            <Grid item xs={6}>
              <div className="chart">
                <Chart data={student} compare={liveSession} />
              </div>
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    )
  }
}
