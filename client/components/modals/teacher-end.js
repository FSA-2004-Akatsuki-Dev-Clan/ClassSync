import React from 'react'
import Modal from './modal'
import {makeStyles} from '@material-ui/core/styles'
import {Button} from '@material-ui/core'
import {endSession} from '../../store/user'
import store, {setModal} from '../../store'

const myStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6888, #FF8E53, 90%)',
    border: 0,
    color: 'red'
  },
  buttonStyle: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  gridStyling: {
    textAlign: 'center'
  }
}))

const TeacherEnd = ({session}) => {
  const classes = myStyles()

  const dataCollected = !!session.faceDetects

  return (
    <Modal
      text={
        dataCollected
          ? 'You are about to end the session. Do you want to save this dataset?'
          : 'You are about to end the session. There is no data to save'
      }
      onOk={endSession}
      okText={
        dataCollected
          ? 'End Session WITHOUT Saving (you can still save it later)'
          : 'End Session'
      }
      cancelText="Cancel and Continue Session"
    >
      {dataCollected && (
        <Button
          className={classes.buttonStyle}
          type="button"
          onClick={() => {
            endSession(true)
            store.dispatch(setModal(null))
          }}
        >
          End Session and Save Data
        </Button>
      )}
    </Modal>
  )
}

export default TeacherEnd
