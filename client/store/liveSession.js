/**
 * ACTION TYPES
 */
const ADD_SESSION_DATA = 'ADD_SESSION_DATA'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
//receives a time-stamped data point from the live session, and creates an action to add it to the liveSession object on store
export const addSessionData = data => ({type: ADD_SESSION_DATA, data})

/**
 * REDUCER
 */
//this reducer function deals with the maintenance of the liveSession object; it provides the most current combined data values for all students combined, and an array of times that hold the data values collected at every interval during the session
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SESSION_DATA:
      if (!state.times)
        return {...state, ...action.data, times: [{...action.data}]}
      else
        return {
          ...state,
          ...action.data,
          times: [...state.times, {...action.data}]
        }

    default:
      return state
  }
}
