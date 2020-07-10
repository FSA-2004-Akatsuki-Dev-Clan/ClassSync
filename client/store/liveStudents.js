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
export const addStudentData = (time, students) => ({
  type: ADD_STUDENT_DATA,
  time,
  students
})

/**
 * REDUCER
 */
//this reducer function deals with the maintenance of the liveStudents array; each element in the array is a student object that provides its id, it's most current data values, and an array of times that hold the data values collected at every interval during the session
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT_DATA:
      //if this student is not in the array yet, add this student to the array with its first time point
      const currentStudents = Object.keys(action.students).map(studentId => ({
        id: +studentId,
        firstName: action.students[studentId].firstName,
        lastName: action.students[studentId].lastName,
        time: action.time,
        faceScore: Math.ceil(
          action.students[studentId].data.faceCount /
            action.students[studentId].data.faceDetects *
            100
        ),
        ...action.students[studentId].data
      }))

      const liveStudents = []

      state.forEach(liveStudent => {
        if (!currentStudents.find(student => student.id === liveStudent.id))
          liveStudents.push(liveStudent)
      })

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

      return liveStudents
    //otherwise, copy the array with the new time point added to that student

    default:
      return state
  }
}
