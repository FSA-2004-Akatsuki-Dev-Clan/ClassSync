import axios from 'axios'

const GET_SESSIONS = 'GET_SESSIONS'

export const getSessions = sessions => ({
  type: GET_SESSIONS,
  sessions
})

export const fetchSession = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/session')
      dispatch(getSessions(data))
    } catch (error) {
      console.log('ERROR IN FETCHSESSION THUNK', error)
    }
  }
}

export default function sessionReducer(state = [], action) {
  switch (action.type) {
    case GET_SESSIONS:
      return action.sessions
    default:
      return state
  }
}
