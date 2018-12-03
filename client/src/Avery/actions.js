import { createAction } from 'redux-actions';
import uuidv4 from 'uuid/v4';
import { selectSession } from './selectors';

const withId = object => ({ id: uuidv4(), ...object });

export const clearLabel = createAction('CLEAR_LABEL');
export const saveLabel = createAction('SAVE_LABEL', ({ label, ...payload }) => ({ label: withId(label), ...payload }));
export const selectLabel = createAction('SELECT_LABEL');
export const createSession = createAction('CREATE_SESSION', withId);
export const createSheet = createAction('CREATE_SHEET', withId);

export const selectLocation = labelLocation => {
    return (dispatch, getState) => {
        const session = selectSession(getState());

        if (!session) {
            return;
        }

        dispatch(selectLabel({ sessionId: session.id, sheetId: session.currentSheet, labelLocation }));
    };
};

export const updateLabel = (sheetId, { id } = {}, labelLocation, updates) => {
    const label = id ? { id, ...updates } : updates;

    return saveLabel({ sheetId, labelLocation, label });
};

/*
interface SelectLabelPayload {
    labelLocation: number;
    sheetId: string;
    sessionId: string;
}
*/
