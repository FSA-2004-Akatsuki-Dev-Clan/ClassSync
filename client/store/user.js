import axios from 'axios'
import history from '../history'

let teacherSocket
let studentSocket

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
    if (res.data.isTeacher) require('../socket/teacher')
    else require('../socket/student')
    history.push('/session')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */

// export const startSession = (id) => {
//   if (window.confirm('Are you ready to start the session?')) {
//     teacherSocket.emit('start-session', id)

//     document.getElementById('start').hidden = true
//     document.getElementById('end').hidden = false
//   }
// }

// export const endSession = (id) => {
//   if (window.confirm('Are you sure you want to end the session?')) {
//     teacherSocket.emit('end-session', id)

//     document.getElementById('start').hidden = false
//     document.getElementById('end').hidden = true
//   }
// }

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
