import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import reducer, { initialState } from 'reducers';

export default () => {
    const persistedReducer = persistReducer({ key: 'root', storage }, reducer);
    let middleware = applyMiddleware(logger, thunk);

    let store = createStore(persistedReducer, initialState, middleware);
    let persistor = persistStore(store);

    return { store, persistor };
};
