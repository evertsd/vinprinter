import { connect } from 'react-redux';
import { StandardRectangle } from 'react-avery';

import { clearLabel, saveLabel, selectLabel } from '../actions';
import { selectSheetLabel } from '../selectors';

const connectSession = connect(
    (state, { session: { id, currentLabel, currentSheet } }) => ({
        sessionId: id,
        sheetId: currentSheet,
        label: selectSheetLabel(state, currentSheet, currentLabel),
        labelLocation: currentLabel,
    }),
    { clearLabel, saveLabel, selectLabel },
    ({ label, labelLocation, sessionId, sheetId }, { clearLabel, selectLabel, saveLabel }, props) => ({
        ...props,
        label,
        labelLocation,
        clearLabel: () => clearLabel({ id: label && label.id }),
        selectLabel: labelLocation => selectLabel({ labelLocation, sheetId, sessionId }),
        submitLabel: () => {
            const nextLabelLocation = StandardRectangle.findNextLabelLocation(labelLocation);

            saveLabel({ sheetId, labelLocation, label });
            selectLabel({ labelLocation: nextLabelLocation, sheetId, sessionId });
        },
        updateLabel: values => {
            const updates = label && label.id ? { id: label.id, ...values } : values;

            saveLabel({ sheetId, labelLocation, label: updates });
        },
    }),
    {
        areOwnPropsEqual: (nextProps, { session }) => {
            const nextSession = nextProps.session;

            return session.currentLabel === nextSession.currentLabel && session.currentSheet === nextSession.currentSheet;
        },
    }
);

export const editSession = connectSession;
