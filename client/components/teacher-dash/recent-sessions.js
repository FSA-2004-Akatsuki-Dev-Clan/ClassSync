import React from 'react'
import { connect } from 'react-redux'
import { fetchSession } from '../../store/session'
import { Grid, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


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
});

class RecentSessions extends React.Component {
  componentDidMount() {
    this.props.getSessions()
  }

  render() {
    const { sessions, classes } = this.props

    return (
      <React.Fragment>

        <GridList className={classes.gridList} cols={2.5}>
          {sessions.map((tile) => (
            <GridListTile
              key={tile.id}
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

        {/* {sessions.map((session) => (
          <Grid item xs={3} key={session.id}>
            <Paper
            // className={style.paper}
            // style={{background: 'linear-gradient(to right bottom, #00ff51, #94ffb6)'}}
            >
              {session.title}
              <img height="150px" src={session.imageUrl} />
            </Paper>
          </Grid>
          // <GridList key={session.id} session={session} />
        ))} */}
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

export default connect(mapState, mapDispatch)(withStyles(styles)(RecentSessions))
