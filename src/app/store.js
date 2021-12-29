import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { userReducer } from './reducers/userReducer'
import { loginReducer } from './reducers/loginReducer'

const reducer = combineReducers({
  userLogin: loginReducer,
  userProfile: userReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
