import React from 'react'
import ReactDOM from 'react-dom'
import {PersistGate} from 'redux-persist/lib/integration/react'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store, {persistor} from './store'
import App from './app'
import {LoadingView} from './loading'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('app')
)
