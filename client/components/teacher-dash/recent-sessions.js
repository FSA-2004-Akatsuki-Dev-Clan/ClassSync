import React from 'react'
import {connect} from 'react-redux'
import {fetchSession} from '../../store/session'
import {Grid, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

// const myStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }))

// const style = myStyles()

class RecentSessions extends React.Component {
  componentDidMount() {
    this.props.getSessions()
  }

  render() {
    const {sessions} = this.props

    return (
      <React.Fragment>
        {sessions.map((session) => (
          <Grid item xs={3} key={session.id}>
            <Paper
            // className={style.paper}
            // style={{background: 'linear-gradient(to right bottom, #00ff51, #94ffb6)'}}
            >
              {session.title}
            </Paper>
          </Grid>
        ))}
      </React.Fragment>
    )
  }
}

const mapState = (state) => {
  return {
    sessions: state.sessions,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getSessions: () => dispatch(fetchSession()),
  }
}

export default connect(mapState, mapDispatch)(RecentSessions)
