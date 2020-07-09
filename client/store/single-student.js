import axios from 'axios'

// ACTION TYPES
const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT'

// ACTION CREATORS
export const getSingleStudent = student => ({
  type: GET_SINGLE_STUDENT,
  student
})

// THUNK CREATORS
export const fetchSingleStudent = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/students/${id}`)
      dispatch(getSingleStudent(data))
    } catch (error) {
      console.log('ERROR IN FETCHSTUDENTS THUNK')
    }
  }
}

// REDUCER
export default function singleStudentReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_STUDENT:
      return action.student
    default:
      return state
  }
}
