import { PURGE } from 'redux-persist';
import { handleActions } from 'redux-actions';
import { createSession, createSheet, selectLabel } from '../actions';
import { SHEET_LABEL_LOCATIONS } from '../schema';

export const initialState = {};

export default handleActions(
    {
        [createSheet]: (state, { payload: { id, sessionId } }) => {
            const session = state[sessionId];
            const sheets = session.sheets || [];

            return {
                ...state,
                [sessionId]: {
                    ...session,
                    currentLabel: SHEET_LABEL_LOCATIONS[0],
                    currentSheet: id,
                    currentSheetIndex: sheets.length,
                    sheets: [...sheets, id],
                },
            };
        },
        [createSession]: (state, { payload: { id } }) => ({
            ...state,
            [id]: { id, sheets: [] },
        }),
        [selectLabel]: (state, { payload: { labelLocation, sheetId, sessionId } }) => ({
            ...state,
            [sessionId]: {
                ...state[sessionId],
                currentSheet: sheetId,
                currentLabel: labelLocation,
            },
        }),
        [PURGE]: () => initialState,
    },
    initialState
);
