import axios from 'axios'
import history from '../history'
import store from '.'
import openTeacherSocket from '../socket/teacher'
import openStudentSocket from '../socket/student'
import {
  resetSessionData,
  resetStudentData,
  setLive,
  setTitle,
  setSaved
} from '.'

let socket

//exported functions for sending reset actions to the store

//if confirmed, sends start message to server with teacher's ID and details for the session
export const startSession = async ({title, activityType, details, url}) => {
  // if (window.confirm('Are you ready to start the session?')) {
  try {
    const {data} = await axios.post('/api/session', {
      title,
      activityType,
      details
    })
    const sessionId = data
    socket.emit('start-session', title, sessionId, url)

    store.dispatch(setLive(true))
    store.dispatch(setTitle(title))
    store.dispatch(resetSessionData())
    store.dispatch(resetStudentData())
    store.dispatch(setSaved(false))
  } catch (err) {
    console.log(
      'There was a problem trying to create a new session in the database',
      err
    )
  }
  // }
}

//if confirmed, sends message to server to end the session
export const endSession = save => {
  socket.emit('end-session', save)

  store.dispatch(setLive(false))

  const reInvites = document.getElementById('re-invites')

  while (reInvites.childNodes.length) {
    reInvites.removeChild(reInvites.childNodes[0])
  }
}

export const saveSession = () => {
  socket.emit('save-data')
}

export const saveLogout = () => {
  socket.emit('save-logout')
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

    //on loading up the session user, import the appropriate socket functionality
    if (res.data) {
      do {
        let user = store.getState().user
        if (user.id)
          socket = user.isTeacher ? openTeacherSocket() : openStudentSocket()
      } while (!socket)

      history.push(res.data ? '/session' : '/')

      const {status, liveSession} = store.getState()

      if (
        !status.saved &&
        !status.live &&
        liveSession.faceDetects &&
        !status.modal
      )
        store.dispatch(setModal('teacherSave'))
    }
  } catch (err) {
    console.error(err)
  }
}

export const auth = (
  firstName,
  lastName,
  gradeLevel,
  email,
  password,
  method
) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {
      firstName,
      lastName,
      gradeLevel,
      email,
      password
    })
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    console.log(res.data)

    //on login/signup, import the appropriate socket functionality
    do {
      let user = store.getState().user
      if (user.id)
        socket = user.isTeacher ? openTeacherSocket() : openStudentSocket()
    } while (!socket)

    history.push('/session')

    const {status, liveSession} = store.getState()

    if (
      !status.saved &&
      !status.live &&
      liveSession.faceDetects &&
      !status.modal
    )
      store.dispatch(setModal('teacherSave'))
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    const res = await axios.post('/auth/logout')
    dispatch(removeUser())

    //On logout, send logout message to the server

    do {
      let user = store.getState().user
      console.log('user', user)
      if (!user.id) socket.emit('logout', res.data)
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
