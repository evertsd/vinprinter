import { createAction } from 'redux-actions';
import uuidv4 from 'uuid/v4';

const withId = object => ({ id: uuidv4(), ...object });

export const clearLabel = createAction('CLEAR_LABEL');
export const saveLabel = createAction('SAVE_LABEL', ({ label, ...payload }) => ({ label: withId(label), ...payload }));
export const selectLabel = createAction('SELECT_LABEL');
export const createSession = createAction('CREATE_SESSION', withId);
export const createSheet = createAction('CREATE_SHEET', withId);
