/**
 * ACTION TYPES
 */
const ADD_DATA_POINT = 'ADD_DATA_POINT'

/**
 * INITIAL STATE
 */
const initialState = []

/**
 * ACTION CREATORS
 */
export const addLiveData = (id, data) => ({type: ADD_DATA_POINT, id, data})

/**
 * REDUCER
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA_POINT:
      if (!state.length)
        return [{id: action.id, ...action.data, times: [action.data]}]
      else
        return state.map(student => {
          if (student.id === action.id)
            return {
              ...student,
              ...action.data,
              times: [...student.times, action.data]
            }
          else return student
        })

    default:
      return state
  }
}
