import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const myStyles = makeStyles({
  table: {
    minWidth: 650
  }
})

function createData(name, student, session, percentile) {
  return {name, student, session, percentile}
}

const rows = [
  createData('Face Score', 0.85, 0.9, 0.75),
  createData('Word Count', 237, 375, 182),
  createData('Keystroke Count', 262, 168, 241),
  createData('Click Count', 45, 76, 35)
]

export default function SimpleTable() {
  const classes = myStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>All Metrics</TableCell>
            <TableCell align="right">Student #</TableCell>
            <TableCell align="right">Session Avg</TableCell>
            <TableCell align="right">Percentile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.student}</TableCell>
              <TableCell align="right">{row.session}</TableCell>
              <TableCell align="right">{row.percentile}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
