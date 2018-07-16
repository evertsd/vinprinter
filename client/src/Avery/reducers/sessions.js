import { handleActions } from 'redux-actions';
import { createSession, createSheet } from '../actions';

export const initialState = {};

export default handleActions(
    {
        [createSheet]: (state, { payload: { id, sessionId } }) => {
            const session = state[sessionId];

            return {
                ...state,
                [sessionId]: {
                    ...session,
                    sheets: [...session.sheets, id],
                },
            };
        },
        [createSession]: (state, { payload: { id } }) => ({
            ...state,
            [id]: { id, sheets: [] },
        }),
    },
    initialState
);
