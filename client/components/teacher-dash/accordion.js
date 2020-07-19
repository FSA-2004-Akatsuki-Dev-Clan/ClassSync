import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { HistoricalSession } from '../'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#f8fcd9',
    alignContent: 'center',
    justifyContent: 'center'
  },
  heading: {
    alignContent: 'center',
    alignText: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  image: {
    alignContent: 'center',
    alignText: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  }
}))

export default function SimpleAccordion() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Accordion className={classes.root}  >
        <AccordionSummary
          container justifyContent="center"
          className={classes.root}
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.root}>
            <img className={classes.image} src="/student-roster-past-sessions.png" height="70px" />
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.root}>
          <HistoricalSession />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
