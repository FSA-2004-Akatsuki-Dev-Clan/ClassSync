import React from 'react'
import {connect} from 'react-redux'
import {Chart, Table} from '../'
import {Grid} from '@material-ui/core'

class SingleStudent extends React.Component {
  render() {
    const {liveStudents, liveSession, studentId} = this.props

    const student = liveStudents.find(
      (liveStudent) => liveStudent.id === studentId
    )

    return (
      <div>
        <Grid item xs={12} container direction="row">
          <Grid item xs={6}>
            {student && <Table data={student} />}
          </Grid>
          <Grid item xs={6}>
            <div className="chart">
              {student && <Chart data={student} compare={liveSession} />}
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    liveStudents: state.liveStudents,
    liveSession: state.liveSession,
  }
}

export default connect(mapState)(SingleStudent)
