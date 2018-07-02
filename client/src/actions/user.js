import * as apiClient from 'utils/apiClient'

export const Types = {
  FETCH_USERS_BEGIN: 'FETCH_USERS_BEGIN',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAIL: 'FETCH_USERS_FAIL'
}

const fetchUsersBegin = () => ({
  type: Types.FETCH_USERS_BEGIN
})

const fetchUsersSuccess = data => ({
  type: Types.FETCH_USERS_SUCCESS,
  payload: { data }
})

const fetchUsersFail = error => ({
  type: Types.FETCH_USERS_FAIL,
  payload: { error }
})

export const fetchUsers = dispatch => async () => {
  dispatch(fetchUsersBegin())
  try {
    const data = await apiClient.get('/users')
    dispatch(fetchUsersSuccess(data))
  } catch (err) {
    dispatch(fetchUsersFail(err))
  }
}
