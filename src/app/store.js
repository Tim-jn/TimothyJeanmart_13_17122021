import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { loginReducer } from './reducers/loginReducer'

const reducer = combineReducers({
  userLogin: loginReducer,
})

const initialState = {}

// applyMiddleware(thunk) for async calls
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
