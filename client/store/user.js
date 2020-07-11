import axios from 'axios'
import history from '../history'

let socket

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))

    //on loading up the session user, import the appropriate socket functionality, and send reconnect message to server
    if (res.data) {
      if (res.data.isTeacher) socket = require('../socket/teacher').default
      else socket = require('../socket/student').default

      socket.emit('reconnect', res.data.id)

      history.push('/session')
    }
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))

    //on login/signup, import the appropriate socket functionality and send reconnect message to server
    if (res.data.isTeacher) socket = require('../socket/teacher').default
    else socket = require('../socket/student').default

    socket.emit('reconnect', res.data.id)

    history.push('/session')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    const user = await axios.post('/auth/logout')
    await dispatch(removeUser())

    //On logout, send logout message to the server
    if (socket) {
      socket.emit('logout', user)
      socket.disconnect(true)
    }

    history.push('/')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */

export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
