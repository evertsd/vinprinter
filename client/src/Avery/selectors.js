import { createSelector } from 'reselect';
import { REDUCER_KEY, LABEL_REDUCER_KEY, SHEET_REDUCER_KEY } from './reducers';

export const sheetsSelector = state => state[REDUCER_KEY][SHEET_REDUCER_KEY];
export const labelsSelector = state => state[REDUCER_KEY][LABEL_REDUCER_KEY];
export const sheetsSelectorFactory = () =>
    createSelector((_, { sheetIds }) => sheetIds, sheetsSelector, (sheetIds, sheets) => sheetIds.map(id => sheets[id]));
