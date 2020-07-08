import axios from 'axios'

// ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS'
const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT'

// ACTION CREATORS
export const getStudents = students => ({
  type: GET_STUDENTS,
  students
})

export const getSingleStudent = student => ({
  type: GET_SINGLE_STUDENT,
  student
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

// INITIAL STATE
const initialState = []

// REDUCER
export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    case GET_SINGLE_STUDENT:
      return action.student
    default:
      return state
  }
}
