import React from 'react'
import { connect } from 'react-redux'
import { fetchSession } from '../../store/session'
import { fetchStudentSess } from '../../store/single-student-session'
import { withStyles } from '@material-ui/styles';
import { BarGraph, HistoricalSingleStudentSession, SingleTable, GridList } from '../'
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core'

const styles = theme => ({
  root: {
    justifyContent: 'center',
    textAlign: 'center',
    justify: 'center',
    alignItems: 'center',
  },
  h1: {
    textAlign: 'center'
  },
  cards: {
    minWidth: 275
  },
  fragment: {
    textAlign: 'center',
    justify: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex",
    minHeight: 275
  },
  graph: {
    minHeight: 275
  },
  cardStyling: {
    color: 'white',
    background: 'linear-gradient(45deg, #01b8b6 30%, #d0e265 90%)'
  }
});

class HistoricalSingleStudent extends React.Component {
  constructor() {
    super()
    this.state = {
      sessionId: null
    }
  }

  componentDidMount() {
    this.props.getSessions()
  }

  render() {
    const { students, studentId, sessions, classes } = this.props
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

    let selectSess
    if (this.state.sessionId) {
      selectSess = sessions.filter(
        session => session.id === this.state.sessionId
      )[0]
    }

    return (
      <Grid className={classes.root} container direction='row'>

        <h2>{singleStudent.firstName}'s Overall Session Averages vs Class Averages</h2>

        <Grid item xs={12} container direction="row" justify="center" >
          <Grid item xs={5} >
            <Card>
              <Grid
                item
                xs={12}
                className={classes.fragment}
                container
                direction="row">

                <Grid item xs={10} className={classes.root}>
                  <Card className={classes.cardStyling}>
                    <img src="../../graph.png" height="50px" />
                  </Card>
                </Grid>

                <Grid>&nbsp;</Grid>

                <SingleTable data={singleStudent} />

              </Grid>
            </Card>
          </Grid>

          <Grid>&nbsp; &nbsp; &nbsp; &nbsp;</Grid>

          <Grid item xs={5}>
            <Card>
              <Grid className={classes.graph}>
                <BarGraph data={classAvg} student={singledatas} />
              </Grid>
            </Card>
          </Grid>

        </Grid>

        <h2>{singleStudent.firstName}'s Single Session Averages vs Class Averages</h2>

        <Grid item xs={12} className={classes.root} container direction='row'>
          {sessions.map(session => (
            <div key={session.id}>
              <Grid item xs={12} sm={6} md={3} className={classes.cards}>
                <Card width="100%">
                  <CardActionArea
                    onClick={() => this.setState({ sessionId: session.id })}
                  >
                    <img
                      src="../../Assignment.jpg"
                      height="150px"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h3">
                        {`${session.title}`}
                      </Typography>
                      {/* <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {student.grade}
                          {student.email}
                        </Typography> */}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </div>
          ))}
        </Grid>
        
        <Grid item xs={12}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Grid>
        
        <HistoricalSingleStudentSession
          studentId={studentId}
          specificSess={selectSess}
          sessionId={this.state.sessionId}
        />

      </Grid>
    )
  }
}

const mapState = state => {
  return {
    students: state.students,
    sessions: state.sessions,
    singleStudentSession: state.singleStudentSession
  }
}

const mapDispatch = dispatch => {
  return {
    getStudentHis: id => dispatch(fetchStudentSess(id)),
    getSessions: () => dispatch(fetchSession())
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(HistoricalSingleStudent))

