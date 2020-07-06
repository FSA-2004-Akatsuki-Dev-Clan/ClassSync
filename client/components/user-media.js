import React from 'react'
import socket, {detectFace, detectSpeech, sendData} from '../socket'

export default class UserMedia extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    socket.emit('user-devices-client')
  }

  render() {
    return (
      <div id="test">
        <h1 id="facetext">Hello!</h1>
        <button id="activate" type="button" onClick={() => this.handleClick()}>
          Activate Devices
        </button>
        <button id="face" hidden={true} type="button" onClick={detectFace}>
          Detect Face
        </button>
        <button id="speech" hidden={true} type="button" onClick={detectSpeech}>
          Start/Stop Speech Detection
        </button>
        <button id="send" hidden={true} type="button" onClick={sendData}>
          Send Data
        </button>
      </div>
    )
  }
}
