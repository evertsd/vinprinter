import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import App, { initialState } from 'reducers';

export default createStore(App, initialState, applyMiddleware(logger));
