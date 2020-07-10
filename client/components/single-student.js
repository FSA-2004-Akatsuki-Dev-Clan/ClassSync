import React from 'react'
import SimpleTable from './table'
import Chart from './teacher-dash/chart'
import ClassSumTotalsRow from '../components/teacher-dash/class-sum-totals-row'
import SingleTable from './single-stud-table'

export default class SingleStudent extends React.Component {
  render() {
    const {student, liveSession} = this.props

    return (
      <div>
        {student.firstName}
        {student.lastName}
        {student.email}

        <SingleTable data={liveSession} />

        <div className="chart">
          <Chart data={student} compare={liveSession} />
        </div>
      </div>
    )
  }
}
