import axios from 'axios'
import { USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from '../reducers/types'
import { USER_LOGIN_SUCCESS } from '../reducers/types'

export const updateProfile = (user) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.body.token}`,
      },
    }

    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      user,
      config
    )

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data })

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
