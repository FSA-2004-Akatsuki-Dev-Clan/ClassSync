import React from 'react'
import { connect } from 'react-redux'
import { Chart, Table } from '../'
import { withStyles } from '@material-ui/styles';
import { Grid, Card } from '@material-ui/core'

const styles = theme => ({
  root: {
    justifyContent: 'center',
    textAlign: 'center',
    justify: 'center',
    alignItems: 'center',
  },
  fragment: {
    textAlign: 'center',
    justify: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex",
    minHeight: 315
  },
  graph: {
    minHeight: 300
  },
  cardStyling: {
    color: 'white',
    background: 'linear-gradient(45deg, #01b8b6 30%, #d0e265 90%)'
  }
})


class SingleStudent extends React.Component {
  render() {
    const { liveStudents, liveSession, studentId, classes } = this.props

    const student = liveStudents.find(
      liveStudent => liveStudent.id === studentId
    )

    return (
      <Grid>
        <div>
          <h3>{`${student.firstName} ${student.lastName}`}</h3>
        </div>

        <Grid item xs={12} className={classes.root} container direction='row'>

          <Grid >
            <div>
              <Grid item xs={12} container direction="row">
                <Grid item xs={6}>
                  <Card>
                    <Grid
                      item
                      xs={12}
                      className={classes.fragment}
                      container
                      direction="row">

                      <Grid item xs={10} className={classes.root}>
                        <Card className={classes.cardStyling}>
                          <img src="/graph.png" height="50px" />
                        </Card>
                      </Grid>

                      {student && <Table data={student} />}

                    </Grid>
                  </Card>
                </Grid>

                {/* <Grid>&nbsp; &nbsp; &nbsp; &nbsp;</Grid> */}

                <Grid item xs={6}>
                  <div className="chart">
                    <Card>
                      <Grid item xs={12} className={classes.graph}>
                        {student && <Chart data={student} compare={liveSession} />}
                      </Grid>
                    </Card>
                  </div>
                </Grid>

              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const mapState = state => {
  return {
    liveStudents: state.liveStudents,
    liveSession: state.liveSession
  }
}

export default connect(mapState)(withStyles(styles)(SingleStudent))
