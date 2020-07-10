import React from 'react'
import SimpleTable from './table'
import Chart from './teacher-dash/chart'

export default class SingleStudent extends React.Component {
  render() {
    const {student, liveSession} = this.props

    return (
      <div>
        {student.firstName}
        {student.lastName}
        {student.email}

        {/* <SimpleTable student={student} /> */}

        <div className="chart">
          <Chart data={student} compare={liveSession} />
        </div>
      </div>
    )
  }
}
