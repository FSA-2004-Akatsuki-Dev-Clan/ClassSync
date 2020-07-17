import axios from 'axios'

const GET_STUDENT_HISTORY = 'GET_STUDENT_HISTORY'

export const getStudentSession = studentSessHistory => ({
  type: GET_STUDENT_HISTORY,
  studentSessHistory
})

export const fetchStudentSess = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/studentSession/${id}`)
      dispatch(getStudentSession(data))
    } catch (err) {
      console.log('ERROR IN FETCHSTUDENTSESS THUNK')
    }
  }
}

export default function historicalSessReducer(state = [], action) {
  switch (action.type) {
    case GET_STUDENT_HISTORY:
      return action.studentSessHistory
    default:
      return state
  }
}
