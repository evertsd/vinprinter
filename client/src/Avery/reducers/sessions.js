import { handleActions } from 'redux-actions';
import { createSession, createSheet, selectLabel } from '../actions';
import { SHEET_LABEL_LOCATIONS } from '../schema';

export const initialState = {};

export default handleActions(
    {
        [createSheet]: (state, { payload: { id, sessionId } }) => {
            const session = state[sessionId];

            return {
                ...state,
                [sessionId]: {
                    ...session,
                    currentLabel: SHEET_LABEL_LOCATIONS[0],
                    currentSheet: id,
                    currentSheetIndex: session.sheets.length,
                    sheets: [...session.sheets, id],
                },
            };
        },
        [createSession]: (state, { payload: { id } }) => ({
            ...state,
            [id]: { id, sheets: [] },
        }),
        [selectLabel]: (state, { payload: { labelLocation, sessionId } }) => ({
            ...state,
            [sessionId]: {
                ...state[sessionId],
                currentLabel: labelLocation,
            },
        }),
    },
    initialState
);
