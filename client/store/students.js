import axios from 'axios'

// ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS'

// ACTION CREATORS
export const getStudents = students => ({
  type: GET_STUDENTS,
  students
})

// THUNK CREATORS
export const fetchStudents = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/students')
      dispatch(getStudents(data))
    } catch (error) {
      console.log('ERROR IN FETCHSTUDENTS THUNK')
    }
  }
}

// INITIAL STATE
const initialState = []

// REDUCER
export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    default:
      return state
  }
}
