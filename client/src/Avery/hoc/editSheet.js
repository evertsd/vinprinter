import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';
import { saveLabel } from '../actions';
import { SHEET_LABEL_LOCATIONS } from '../schema';
import { selectSheet, selectSheetLabels } from '../selectors';

const connectSheet = connect(
    (state, { sheetId }) => ({
        sheet: selectSheet(state, sheetId),
        labels: selectSheetLabels(state, sheetId),
    }),
    (dispatch, { sheetId }) => ({
        saveLabel: (labelLocation, label) => {
            const action = saveLabel({ sheetId, labelLocation, label });
            dispatch(action);
            return action.payload.label;
        },
    })
);

const findNextLabelLocation = labelLocation => {
    const currentIndex = SHEET_LABEL_LOCATIONS.indexOf(labelLocation);

    if (currentIndex < 0 || currentIndex + 1 >= SHEET_LABEL_LOCATIONS.length) {
        return SHEET_LABEL_LOCATIONS[0];
    }

    return SHEET_LABEL_LOCATIONS[currentIndex + 1];
};

const withLabelHandlers = withStateHandlers(
    ({ labels }) => {
        const labelLocation = findNextLabelLocation();

        return { labelLocation, label: labels[labelLocation] };
    },
    {
        selectLabel: (_, { labels }) => labelLocation => ({ labelLocation, label: labels[labelLocation] }),
        submitLabel: ({ labelLocation, label: { id } }, { labels, saveLabel }) => values => {
            const updates = id ? { id, ...values } : values;
            saveLabel(labelLocation, updates);
            const nextLabelLocation = findNextLabelLocation(labelLocation);

            return { labelLocation: nextLabelLocation, label: labels[nextLabelLocation] };
        },
        updateLabel: ({ labelLocation, label: { id } }, { saveLabel }) => values => {
            const updates = id ? { id, ...values } : values;
            const label = saveLabel(labelLocation, updates);

            return { labelLocation, label };
        },
    }
);

export const editSheet = compose(
    connectSheet,
    withLabelHandlers
);
