import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import rootReducer from 'reducers'

export const history = createBrowserHistory()

const initialState = {}

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  applyMiddleware(thunk, routerMiddleware(history))
)

export default store
