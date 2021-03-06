import React from 'react'
import {connect} from 'react-redux'
import {fetchSession} from '../../store/session'
import {fetchStudentSess} from '../../store/single-student-session'
import {withStyles} from '@material-ui/styles'
import {BarGraph, HistoricalSingleStudentSession, SingleTable} from '../'
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography,
  // GridListTile,
  // GridListTileBar,
  // IconButton,
  // StarBorderIcon,
  // GridList
} from '@material-ui/core'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const styles = (theme) => ({
  root: {
    justifyContent: 'center',
    textAlign: 'center',
    justify: 'center',
    alignItems: 'center',
  },
  h1: {
    textAlign: 'center',
  },
  cards: {
    minWidth: 275,
  },
  fragment: {
    textAlign: 'center',
    justify: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    minHeight: 275,
  },
  graph: {
    minHeight: 275,
  },
  cardStyling: {
    color: 'white',
    background: 'linear-gradient(45deg, #01b8b6 30%, #d0e265 90%)',
  },
  rootGridList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    // color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  gridListTile: {
    width: '100px',
  },
})

class HistoricalSingleStudent extends React.Component {
  constructor() {
    super()
    this.state = {
      sessionId: null,
    }
  }

  componentDidMount() {
    this.props.getSessions()
  }

  render() {
    const {students, student, sessions, classes} = this.props
    let classClickAvg = 0
    let classFaceScoreAvg = 0
    let classKeyAvg = 0
    let classWordsAvg = 0

    sessions.forEach(
      (session) => (
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

    const singledatas = [
      student.mouseClickAvg,
      student.faceScoreAvg,
      student.keyStrokeAvg,
      student.wordsSpokenAvg,
    ]

    let selectSess
    if (this.state.sessionId) {
      selectSess = sessions.filter(
        (session) => session.id === this.state.sessionId
      )[0]
    }

    return (
      <Grid className={classes.root} container direction="row">
        <h2>
          {student.firstName} {student.lastName}'s Engagement Metrics
        </h2>

        <Grid item xs={12} container direction="row" justify="center">
          <Grid item xs={5}>
            <Card>
              <Grid
                item
                xs={12}
                className={classes.fragment}
                container
                direction="row"
              >
                <Grid item xs={10} className={classes.root}>
                  <Card className={classes.cardStyling}>
                    <img src="../../graph.png" height="50px" />
                  </Card>
                </Grid>

                <Grid>&nbsp;</Grid>

                <SingleTable data={student} />
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

        <h2>{student.firstName}'s Past Sessions</h2>

        <Grid item xs={12} className={classes.root} container direction="row">
          <div className={classes.rootGridList}>
            <GridList className={classes.gridList} cols={2.5}>
              {sessions.map((tile) => (
                <GridListTile
                  className={classes.gridListTile}
                  key={tile.id}
                  onClick={() => this.setState({sessionId: tile.id})}
                >
                  <img src={tile.imageUrl} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                    actionIcon={
                      <IconButton aria-label={`star ${tile.title}`}>
                        <StarBorderIcon className={classes.title} />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>

          {/*{sessions.map(session => (
            // <div key={session.id}>
            //   <Grid item xs={12} sm={6} md={3} className={classes.cards}>
            //     <Card width="100%">
            //       <CardActionArea
            //         onClick={() => this.setState({ sessionId: session.id })}
            //       >
            //         <img
            //           src={session.imageUrl}
            //           height="150px"
            //         />
            //         <CardContent>
            //           <Typography gutterBottom variant="h5" component="h3">
            //             {`${session.title}`}
            //           </Typography>
            //           {/* <Typography
            //               variant="body2"
            //               color="textSecondary"
            //               component="p"
            //             >
            //               {student.grade}
            //               {student.email}
            //             </Typography> */}
          {/* //         </CardContent>
            //       </CardActionArea>*/}
          {/* //     </Card>
            //   </Grid> */}
          {/* // </div>
         // ))} */}
        </Grid>

        <Grid item xs={12}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Grid>

        {this.state.sessionId && this.state.sessionId <= 4 ? (
          <HistoricalSingleStudentSession
            studentId={student.id}
            specificSess={selectSess}
            sessionId={this.state.sessionId}
          />
        ) : (
          ''
        )}
      </Grid>
    )
  }
}

const mapState = (state) => {
  return {
    students: state.students,
    sessions: state.sessions,
    singleStudentSession: state.singleStudentSession,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getStudentHis: (id) => dispatch(fetchStudentSess(id)),
    getSessions: () => dispatch(fetchSession()),
  }
}

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(HistoricalSingleStudent))
