import React from 'react'
import ReactModal from 'react-modal'
import store, {setModal} from '../../store'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const Modal = ({text, onOk, onCancel, cancelText, okText}) => (
  <ReactModal
    // style={customStyles}
    isOpen={true}
  >
    <div>
      <header>
        <h1>{text}</h1>
      </header>

      <button
        onClick={() => {
          // onOk()
          store.dispatch(setModal(null))
        }}
      >
        {okText || 'OK'}
      </button>

      {onCancel && (
        <button
          onClick={() => {
            // onCancel()
            store.dispatch(setModal(null))
          }}
        >
          {cancelText || 'Cancel'}
        </button>
      )}
    </div>
  </ReactModal>
)

export default Modal
