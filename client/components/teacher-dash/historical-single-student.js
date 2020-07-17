import React from 'react'
import {connect} from 'react-redux'
import {fetchSession} from '../../store/session'
import {fetchStudentSess} from '../../store/single-student-session'
import {BarGraph, HistoricalSingleStudentSession, SingleTable} from '../'
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core'

class HistoricalSingleStudent extends React.Component {
  constructor() {
    super()
    this.state = {
      sessionId: null
    }
  }

  // handleClick(id) {
  //   this.props.getStudentHis(this.state.sessionId)
  // }

  componentDidMount() {
    this.props.getSessions()
  }
  render() {
    const {students, studentId, sessions} = this.props
    let classClickAvg = 0
    let classFaceScoreAvg = 0
    let classKeyAvg = 0
    let classWordsAvg = 0

    sessions.forEach(
      session => (
        (classClickAvg += session.sessClickTot / 30),
        (classFaceScoreAvg += session.sessFaceScore / 30),
        (classKeyAvg += session.sessKeyStrokeTot / 30),
        (classWordsAvg += session.sessWordsSpokenTot / 30)
      )
    )

    const classClickA = Math.ceil(classClickAvg / 4)
    const classFaceScoreA = Math.ceil(classFaceScoreAvg / 4)
    const classKeyA = Math.ceil(classKeyAvg / 4)
    const classWordsA = Math.ceil(classWordsAvg / 4)

    const classAvg = [classClickA, classFaceScoreA, classKeyA, classWordsA]

    const singleStudent = students[studentId - 1]

    const singledatas = [
      singleStudent.mouseClickAvg,
      singleStudent.faceScoreAvg,
      singleStudent.keyStrokeAvg,
      singleStudent.wordsSpokenAvg
    ]

    return (
      <div>
        <h1>{singleStudent.firstName}</h1>
        <h1>Sessions</h1>
        <div>
          {sessions.map(session => (
            <div value={session.id} key={session.id}>
              <a>{session.title}</a>
            </div>
          ))}
        </div>
        <Grid item xs={12} container direction="row">
          <BarGraph data={classAvg} student={singledatas} />
          <SingleTable data={singleStudent} />
        </Grid>

        <HistoricalSingleStudentSession studentId={studentId} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    students: state.students,
    sessions: state.sessions
  }
}

const mapDispatch = dispatch => {
  return {
    getStudentHis: id => dispatch(fetchStudentSess(id)),
    getSessions: () => dispatch(fetchSession())
  }
}

export default connect(mapState, mapDispatch)(HistoricalSingleStudent)
