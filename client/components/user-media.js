import React from 'react'
import {connect} from 'react-redux'
import socket, {userDevices} from '../socket'

export default class UserMedia extends React.Component {
  constructor() {
    super()
  }
  handleClick = () => {
    socket.emit('user-devices-client')
  }
  // deactivateDevices = () => {
  //     const microphone = navigator.permissions.query({ name: 'microphone' }).then(function (permissionStatus) {
  //         console.log('i am permission status before', permissionStatus)
  //         // permissionStatus.onchange = function () {
  //         //     permissionStatus.state = 'prompt'
  //         // }

  //         console.log('i am permission status after', permissionStatus)
  //     })

  //     // navigator.permissions.revoke(microphone).then(function () {
  //     //     console.log('Im disconnected??', microphone)
  //     // })
  //     // const camera = navigator.permissions.query({ name: 'camera' })
  //     // navigator.permissions.revoke(camera)
  // }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <button type="button" onClick={() => this.handleClick()}>
          Activate Devices
        </button>
        {/* <div>
                    <button type="button" onClick={() => this.deactivateDevices()}>Deactivate Devices</button>
                </div> */}
      </div>
    )
  }
}

// const mapState = state => ({

// })

// const mapDispatch = dispatch => ({

// })

// export default connect(mapState, mapDispatch)(UserMedia)
