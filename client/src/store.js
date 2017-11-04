import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'

import reducer from './services/VIN/reducer'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunkMiddleware),
    autoRehydrate()
  )
)

persistStore(store)

export default store
