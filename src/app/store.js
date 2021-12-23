import { createStore, applyMiddleware, combineReducers } from 'redux'
import loginSlice from './Slices/loginSlice'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  login: loginSlice,
})

// applyMiddleware(thunk) for async calls
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
