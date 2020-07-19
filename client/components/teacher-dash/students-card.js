import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardActionArea,
  CardMedia
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

export const StudentsCard = ({ student }) => {
  const classes = useStyles()

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={3} container direction='row'>
          <Card maxWidth="345px">
            <CardActionArea>
              <img
                src={student.imageUrl}
                height="120px"
                title={`${student.firstName}'s profile picture`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {`${student.firstName} ${student.lastName}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {student.grade}
                  {student.email}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
