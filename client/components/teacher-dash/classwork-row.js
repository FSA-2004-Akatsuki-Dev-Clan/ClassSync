import React from 'react'
import {Grid, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const classworkObject = {
  assignmentName: [
    'Assignment 1',
    'Assignment 2',
    'Assignment 3',
    'Assignment 4',
    'Assignment 5'
  ]
}

export default function ClassworkRow() {
  return (
    <React.Fragment>
      {classworkObject.assignmentName.map(assignment => {
        return (
          <Grid item xs={3}>
            <Paper className={useStyles().paper}>{assignment}</Paper>
          </Grid>
        )
      })}
    </React.Fragment>
  )
}
