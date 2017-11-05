import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'

import reducer, { initialState } from './services/VIN/reducer'

console.info('store.initialState', initialState)

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunkMiddleware),
    autoRehydrate()
  )
)

persistStore(store)

export default store
