/**
 * ACTION TYPES
 */
const ADD_STUDENT_DATA = 'ADD_STUDENT_DATA'

/**
 * INITIAL STATE
 */
const initialState = []

/**
 * ACTION CREATORS
 */
//receives a time-stamped data point from the live session for a single student, and creates an action to add it to the liveStudents array on store
export const addStudentData = (id, data) => ({type: ADD_STUDENT_DATA, id, data})

/**
 * REDUCER
 */
//this reducer function deals with the maintenance of the liveStudents array; each element in the array is a student object that provides its id, it's most current data values, and an array of times that hold the data values collected at every interval during the session
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT_DATA:
      //if this student is not in the array yet, add this student to the array with its first time point
      if (!state.find(student => student.id === action.id))
        return [
          ...state,
          {id: action.id, ...action.data, times: [{...action.data}]}
        ]
      else
        //otherwise, copy the array with the new time point added to that student
        return state.map(student => {
          if (student.id === action.id)
            return {
              ...student,
              ...action.data,
              times: [...student.times, {...action.data}]
            }
          else return student
        })

    default:
      return state
  }
}
