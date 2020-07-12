import axios from 'axios'
import history from '../history'
import store from '.'
import openTeacherSocket from '../socket/teacher'
import openStudentSocket from '../socket/student'

let socket

//exported functions for sending reset actions to the store

//if confirmed, sends start message to server with teacher's ID and details for the session
export const startSession = (teacherId, sessionDetails) => {
  if (window.confirm('Are you ready to start the session?')) {
    socket.emit('start-session', teacherId, sessionDetails)

    document.getElementById('start').hidden = true
    document.getElementById('end').hidden = false

    store.dispatch(resetSessionData())
    store.dispatch(resetStudentData())
  }
}

//if confirmed, sends message to server to end the session
export const endSession = () => {
  if (window.confirm('Are you sure you want to end the session?')) {
    socket.emit('end-session')

    document.getElementById('start').hidden = false
    document.getElementById('end').hidden = true
    document.getElementsByClassName('re-invite').forEach(button => {
      button.parentNode.removeChild(button)
    })
  }
}

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
      do {
        let user = store.getState().user
        if (user.id)
          socket = user.isTeacher ? openTeacherSocket() : openStudentSocket()
      } while (!socket)

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
    do {
      let user = store.getState().user
      if (user.id)
        socket = user.isTeacher ? openTeacherSocket() : openStudentSocket()
    } while (!socket)

    history.push('/session')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    const user = await axios.post('/auth/logout')
    dispatch(removeUser())

    //On logout, send logout message to the server
    do {
      let user = store.getState().user
      if (!user.id && socket) socket.emit('logout', user)
    } while (user.id)

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
