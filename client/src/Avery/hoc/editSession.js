import { connect } from 'react-redux';
import { saveLabel, selectLabel } from '../actions';
import { SHEET_LABEL_LOCATIONS } from '../schema';
import { selectSheetLabel } from '../selectors';

const connectSession = connect(
    (state, { session: { id, currentLabel, currentSheet } }) => ({
        sessionId: id,
        sheetId: currentSheet,
        label: selectSheetLabel(state, currentSheet, currentLabel),
        labelLocation: currentLabel,
    }),
    { saveLabel, selectLabel },
    ({ label, labelLocation, sessionId, sheetId }, { selectLabel, saveLabel }, props) => ({
        ...props,
        label,
        labelLocation,
        selectLabel: labelLocation => selectLabel({ labelLocation, sessionId }),
        submitLabel: values => {
            const updates = label && label.id ? { id: label.id, ...values } : values;
            const nextLabelLocation = findNextLabelLocation(labelLocation);

            saveLabel({ sheetId, labelLocation, label: updates });
            selectLabel({ labelLocation: nextLabelLocation, sessionId });
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

const findNextLabelLocation = labelLocation => {
    const currentIndex = SHEET_LABEL_LOCATIONS.indexOf(labelLocation);

    if (currentIndex < 0 || currentIndex + 1 >= SHEET_LABEL_LOCATIONS.length) {
        return SHEET_LABEL_LOCATIONS[0];
    }

    return SHEET_LABEL_LOCATIONS[currentIndex + 1];
};

export const editSession = connectSession;
