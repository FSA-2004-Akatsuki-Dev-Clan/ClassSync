import React from 'react'
import ReactModal from 'react-modal'
import {makeStyles} from '@material-ui/core/styles'
import {Button, Grid} from '@material-ui/core'
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

const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const Modal = ({text, onOk, onCancel, cancelText, okText}) => {
  const classes = myStyles()

  return (
    <ReactModal style={customStyles} isOpen={true}>
      <div>
        <header>
          <h1>{text}</h1>
        </header>
        <Grid
          item
          xs={12}
          className={classes.gridStyling}
          container
          direction="column"
        >
          <Button
            className={classes.buttonStyle}
            type="button"
            onClick={() => {
              // onOk()
              store.dispatch(setModal(null))
            }}
          >
            {okText || 'OK'}
          </Button>

          {/* {onCancel && ( */}
          <div>
            <Button
              type="button"
              onClick={() => {
                // onCancel()
                store.dispatch(setModal(null))
              }}
            >
              {cancelText || 'Cancel'}
            </Button>
          </div>
          {/* )} */}
        </Grid>
      </div>
    </ReactModal>
  )
}

export default Modal
