/**
 * ACTION TYPES
 */
const SET_ASSIGNMENT = 'SET_ASSIGNMENT'

/**
 * INITIAL STATE
 */
const initialState = ''

/**
 * ACTION CREATORS
 */
//receives a time-stamped data point from the live session, and creates an action to add it to the liveSession object on store
export const setAssignment = url => ({type: SET_ASSIGNMENT, url})

/**
 * REDUCER
 */
//this reducer function deals with the maintenance of the liveSession object; it provides the most current combined data values for all students, and an array of times that hold the data values collected at every interval during the session
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ASSIGNMENT:
      return action.url

    default:
      return state
  }
}
