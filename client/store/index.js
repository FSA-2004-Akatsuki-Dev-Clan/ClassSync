import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import liveStudents from './liveStudents'
import liveSession from './liveSession'
import studentReducer from './students'
import historicalSessReducer from '../store/historical-session'
import singleStudentReducer from './single-student'
import status from './status'

export const reducer = combineReducers({
  user,
  students: studentReducer,
  student: singleStudentReducer,
  liveStudents,
  liveSession,
  status,
  studentSession: historicalSessReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './liveStudents'
export * from './liveSession'
export * from './students'
export * from './status'
