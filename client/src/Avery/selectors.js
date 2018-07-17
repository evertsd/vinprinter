import { createSelector } from 'reselect';
import { REDUCER_KEY, SHEET_LABEL_LOCATIONS } from './schema';

export const selectSheets = state => state[REDUCER_KEY].sheets;
export const selectSheet = createSelector(selectSheets, (_, id) => id, (sheets, id) => sheets[id]);
export const selectLabels = state => state[REDUCER_KEY].labels;

export const selectSession = (state, id) => {
    const { sessions, currentSession } = state[REDUCER_KEY];
    return sessions[id] || sessions[currentSession];
};

export const selectSheetLabels = createSelector(selectSheet, selectLabels, (sheet, labels) => {
    return SHEET_LABEL_LOCATIONS.reduce((sheetLabels, location) => {
        if (sheet && sheet.labels && sheet.labels[location]) {
            sheetLabels[location] = labels[sheet.labels[location]];
        } else {
            sheetLabels[location] = {};
        }

        return sheetLabels;
    }, {});
});

export const selectSheetLabel = createSelector(
    selectSheet,
    selectLabels,
    (_, __, labelLocation) => labelLocation,
    (sheet, labels, location) => (sheet ? labels[sheet.labels[location]] : undefined)
);
