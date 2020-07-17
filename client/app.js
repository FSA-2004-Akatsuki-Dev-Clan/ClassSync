import React from 'react'
import {connect} from 'react-redux'

import {Navbar, ModalSelector} from './components'
import Routes from './routes'

const App = ({modal}) => (
  <div>
    <Navbar />
    <Routes />
    <ModalSelector modal={modal} />
  </div>
)

const mapState = state => {
  return {
    modal: state.status.modal
  }
}

export default connect(mapState)(App)
