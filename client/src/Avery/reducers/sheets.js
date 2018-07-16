import { handleActions } from 'redux-actions';
import { createSheet, saveLabel } from '../actions';

export const initialState = {};

export default handleActions(
    {
        [createSheet]: (state, { payload: { id } }) => ({
            ...state,
            [id]: { id, labels: {} },
        }),
        [saveLabel]: (state, { payload: { sheetId, labelLocation, label } }) => ({
            ...state,
            [sheetId]: {
                ...state[sheetId],
                labels: { ...state[sheetId].labels, [labelLocation]: label.id },
            },
        }),
    },
    initialState
);
