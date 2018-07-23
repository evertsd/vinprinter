import { PURGE } from 'redux-persist';
import { handleActions } from 'redux-actions';
import { createSession } from '../actions';

export const initialState = null;

export default handleActions(
    {
        [createSession]: (state, { payload: { id } }) => id,
        [PURGE]: () => initialState,
    },
    initialState
);
