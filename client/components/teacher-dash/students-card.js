import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
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

export const StudentsCard = ({student}) => {
  const classes = useStyles()

  return (
    <div>
      <Card maxWidth="345px">
        <CardActionArea>
          <img
            src="../../default-profile-pic.jpg"
            height="150px"
            title="Contemplative Reptile"
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
    </div>
  )
}
