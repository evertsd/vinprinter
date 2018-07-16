import { combineReducers } from 'redux';

import { averyReducer, initialAveryState, REDUCER_KEY as AVERY_KEY } from 'Avery';

export const initialState = {
    [AVERY_KEY]: initialAveryState,
};

export default combineReducers({
    [AVERY_KEY]: averyReducer,
});
