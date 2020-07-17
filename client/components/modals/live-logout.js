import React from 'react'
import Modal from './modal'
import {makeStyles} from '@material-ui/core/styles'
import {Button} from '@material-ui/core'
import {saveLogout, logout, setModal} from '../../store/user'
import store from '../../store'

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

const LiveLogout = ({isTeacher, session}) => {
  const classes = myStyles()

  const dataCollected = !!session.faceDetects

  return (
    <Modal
      text={
        isTeacher
          ? 'Your classroom is still live and logging out will end the session. Are you sure you want to leave?'
          : 'You are in a live session. Are you sure you want to leave?'
      }
      onOk={logout}
      okText={
        isTeacher
          ? dataCollected
            ? 'End Session WITHOUT Saving (you can still save it later)'
            : 'End Session and Log Out'
          : 'Leave Now'
      }
      cancelText="Cancel and Continue Session"
    >
      {isTeacher &&
        dataCollected && (
          <Button
            className={classes.buttonStyle}
            type="button"
            onClick={() => {
              saveLogout()
              store.dispatch(setModal(null))
            }}
          >
            End Session and Save Data
          </Button>
        )}
    </Modal>
  )
}

export default LiveLogout
