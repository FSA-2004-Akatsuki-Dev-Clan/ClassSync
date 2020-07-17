import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import user from './user'
import liveStudents from './liveStudents'
import liveSession from './liveSession'
import studentReducer from './students'
import historicalSessReducer from '../store/historical-session'
import singleStudentReducer from './single-student'
import status from './status'
import sessionReducer from './session'
import singleStudentSessionReducer from './single-student-session'

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
}

export const reducer = combineReducers({
  user,
  students: studentReducer,
  student: singleStudentReducer,
  liveStudents,
  liveSession,
  status,
  studentSession: historicalSessReducer,
  sessions: sessionReducer,
  singleStudentSession: singleStudentSessionReducer
})

const pReducer = persistReducer(persistConfig, reducer)

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(pReducer, middleware)
export const persistor = persistStore(store)

export default store
export * from './user'
export * from './liveStudents'
export * from './liveSession'
export * from './students'
export * from './status'
