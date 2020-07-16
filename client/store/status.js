/**
 * ACTION TYPES
 */
const SET_ASSIGNMENT = 'SET_ASSIGNMENT'
const SET_LIVE = 'SET_LIVE'
const SET_TITLE = 'SET_TITLE'
const SET_MODAL = 'SET_MODAL'

/**
 * INITIAL STATE
 */
const initialState = {assignment: '', live: false, title: '', modal: null}

/**
 * ACTION CREATORS
 */
//receives a time-stamped data point from the live session, and creates an action to add it to the liveSession object on store
export const setAssignment = url => ({type: SET_ASSIGNMENT, url})
export const setLive = bool => ({type: SET_LIVE, bool})
export const setTitle = title => ({type: SET_TITLE, title})
export const setModal = modal => ({type: SET_MODAL, modal})

/**
 * REDUCER
 */
//this reducer function deals with the maintenance of the liveSession object; it provides the most current combined data values for all students, and an array of times that hold the data values collected at every interval during the session
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ASSIGNMENT:
      return {...state, assignment: action.url}

    case SET_LIVE:
      return {...state, live: action.bool}

    case SET_TITLE:
      return {...state, title: action.title}

    case SET_MODAL:
      return {...state, modal: action.modal}

    default:
      return state
  }
}
