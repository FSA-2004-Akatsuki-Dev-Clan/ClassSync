import axios from 'axios'

const GET_STUDENT_SESSIONS = 'GET_STUDENT_SESSIONS'

export const getStudentSessions = studentSessions => ({
  type: GET_STUDENT_SESSIONS,
  studentSessions
})

export const fetchStudentSessions = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/students/allSessions/${id}`)
      dispatch(getStudentSessions(data))
    } catch (error) {
      console.log('ERROR IN FETCHSTUDENTSESSIONS THUNK')
    }
  }
}

export default function singleStudentSessionReducer(state = {}, action) {
  switch (action.type) {
    case GET_STUDENT_SESSIONS:
      return action.studentSessions
    default:
      return state
  }
}
