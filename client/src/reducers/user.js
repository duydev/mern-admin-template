import { Types } from 'actions/user'

export const initialState = {
  data: {},
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case Types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      }
    case Types.FETCH_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default reducer
