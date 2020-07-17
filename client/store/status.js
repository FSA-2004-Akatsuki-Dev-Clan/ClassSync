/**
 * ACTION TYPES
 */
const SET_ASSIGNMENT = 'SET_ASSIGNMENT'
const SET_LIVE = 'SET_LIVE'
const SET_TITLE = 'SET_TITLE'
const SET_MODAL = 'SET_MODAL'
const STUDENT_ALERT = 'STUDENT_ALERT'

/**
 * INITIAL STATE
 */
const initialState = {
  assignment: '',
  live: false,
  title: '',
  modal: null,
  alert: {}
}

/**
 * ACTION CREATORS
 */

export const setAssignment = url => ({type: SET_ASSIGNMENT, url})
export const setLive = bool => ({type: SET_LIVE, bool})
export const setTitle = title => ({type: SET_TITLE, title})
export const setModal = modal => ({type: SET_MODAL, modal})
export const studentAlert = student => ({type: STUDENT_ALERT, student})

/**
 * REDUCER
 */

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

    case STUDENT_ALERT:
      return {...state, alert: {...action.student}}

    default:
      return state
  }
}
