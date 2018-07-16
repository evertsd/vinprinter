import { handleActions } from 'redux-actions';
import { saveLabel } from '../actions';

export const initialState = {};

export default handleActions(
    {
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
