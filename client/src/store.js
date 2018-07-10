import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger';

import AppReducer, { initialState } from './reducer'

export default createStore(
    AppReducer,
    initialState,
    applyMiddleware(logger),
);
