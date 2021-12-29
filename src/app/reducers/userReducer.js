import { USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from './types'

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_SUCCESS:
      return { userInfo: action.payload, success: true }
    case USER_UPDATE_FAIL:
      return { error: action.payload, success: false }
    default:
      return state
  }
}
