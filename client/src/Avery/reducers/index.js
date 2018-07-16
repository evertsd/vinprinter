import { combineReducers } from 'redux';

import currentSession from './currentSession';
import labels, { initialState as initialLabelState } from './labels';
import sessions, { initialState as initialSessionState } from './sessions';
import sheets, { initialState as initialSheetState } from './sheets';

export const initialState = {
    labels: initialLabelState,
    sessions: initialSessionState,
    sheets: initialSheetState,
};

export default combineReducers({ currentSession, labels, sessions, sheets });
