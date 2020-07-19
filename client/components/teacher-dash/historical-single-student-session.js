import React from 'react'
import {connect} from 'react-redux'
import {fetchStudentSessions} from '../../store/single-student-session'
import {Grid} from '@material-ui/core'
import BarGraph from '../bar-graph'

class HistoricalSingleStudentSession extends React.Component {
  componentDidMount() {
    this.props.fetchStudentSessions(this.props.studentId)
  }

  render() {
    const {specificSess, singleStudentSession} = this.props
    let sessClickAvg
    let sessFaceScoreAvg
    let sessKeyStrokeAvg
    let sessWordsSpokenAvg

    if (specificSess) {
      sessClickAvg = Math.round(specificSess.sessClickTot / 30)
      sessFaceScoreAvg = Math.round(specificSess.sessFaceScore / 30)
      sessKeyStrokeAvg = Math.round(specificSess.sessKeyStrokeTot / 30)
      sessWordsSpokenAvg = Math.round(specificSess.sessWordsSpokenTot / 30)
    }

    let specificSessAverages = [
      sessClickAvg,
      sessFaceScoreAvg,
      sessKeyStrokeAvg,
      sessWordsSpokenAvg,
    ]

    let studClickAvg
    let studFaceScoreAvg
    let studKeyStrokeAvg
    let studWordsSpokenAvg

    if (this.props.sessionId) {
      studClickAvg =
        singleStudentSession.studentSessions[this.props.sessionId - 1]
          .clickCount
      studFaceScoreAvg = Math.round(
        (singleStudentSession.studentSessions[this.props.sessionId - 1]
          .faceCount /
          singleStudentSession.studentSessions[this.props.sessionId - 1]
            .faceDetects) *
          100
      )
      studKeyStrokeAvg =
        singleStudentSession.studentSessions[this.props.sessionId - 1].keyCount
      studWordsSpokenAvg =
        singleStudentSession.studentSessions[this.props.sessionId - 1].wordCount
    }
    let studentSessionArray = [
      studClickAvg,
      studFaceScoreAvg,
      studKeyStrokeAvg,
      studWordsSpokenAvg,
    ]

    return (
      <div>
        <div>
          <Grid item xs={12} container direction="row">
            <BarGraph
              data={specificSessAverages}
              student={studentSessionArray}
            />
          </Grid>
        </div>
        {specificSess && <h1>{specificSess.title}</h1>}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    singleStudentSession: state.singleStudentSession,
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchStudentSessions: (id) => dispatch(fetchStudentSessions(id)),
  }
}

export default connect(mapState, mapDispatch)(HistoricalSingleStudentSession)
