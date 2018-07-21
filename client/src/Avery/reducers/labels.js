import { handleActions } from 'redux-actions';
import { clearLabel, saveLabel } from '../actions';

export const initialState = {};

export default handleActions(
    {
        [clearLabel]: (state, { payload: { id } }) => {
            if (!id) {
                return state;
            }

            return {
                ...state,
                [id]: { id },
            };
        },
        [saveLabel]: (state, { payload: { label } }) => ({
            ...state,
            [label.id]: {
                ...state[label.id],
                ...label,
            },
        }),
    },
    initialState
);
