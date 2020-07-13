/**
 * ACTION TYPES
 */
const ADD_STUDENT_DATA = 'ADD_STUDENT_DATA'
const RESET_STUDENT_DATA = 'RESET_STUDENT_DATA'
/**
 * INITIAL STATE
 */
const initialState = []

/**
 * ACTION CREATORS
 */
//receives a time-stamped data point from the live session for a single student, and creates an action to add it to the liveStudents array on store
export const addStudentData = (time, students) => ({
  type: ADD_STUDENT_DATA,
  time,
  students
})

export const resetStudentData = () => ({type: RESET_STUDENT_DATA})

/**
 * REDUCER
 */
//this reducer function deals with the maintenance of the liveStudents array; each element in the array is a student object that provides its id and name, it's most current data values, and an array of times that hold the data values collected at every interval during the session
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT_DATA:
      //from the data object, create an array with each new data point for each student
      const currentStudents = Object.keys(action.students).map(studentId => ({
        id: +studentId,
        firstName: action.students[studentId].firstName,
        lastName: action.students[studentId].lastName,
        time: action.time,
        ...action.students[studentId].data
      }))

      //this array will be returned as the new liveStudents on the store
      const liveStudents = []

      //loop over the current live student data, and if we don't have an update for it, add it to our new liveStudents array
      state.forEach(liveStudent => {
        if (!currentStudents.find(student => student.id === liveStudent.id))
          liveStudents.push(liveStudent)
      })

      //loop over the incoming student data objects, find its corresponding student in the store =>
      //if there isn't one yet, add it to the new liveStudents array; if there is, update it with the new data
      currentStudents.forEach(student => {
        let liveStudent = state.find(
          liveStudent => liveStudent.id === student.id
        )

        liveStudents.push(
          liveStudent
            ? {...student, times: [...liveStudent.times, {...student}]}
            : {...student, times: [{...student}]}
        )
      })

      //set the new students data array on the store
      return liveStudents

    case RESET_STUDENT_DATA:
      return initialState

    default:
      return state
  }
}
