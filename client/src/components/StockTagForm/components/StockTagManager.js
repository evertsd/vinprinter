import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import { labelLocations, nextLabel } from 'Avery/components/Sheet';
import LabelPicker from 'components/LabelPicker';
import StockTagInput from './StockTagInput';
import FormFields from './FormFields';
import { initialStockTagState } from '../model';

const findOrCreateLabel = (labels, labelMap, index) => {
  return labels[labelMap[index]] || initialStockTagState
}

const buildLabelState = (labels, labelMap) => (
  labelLocations.reduce((hash, labelLocation) => {
    hash[labelLocation] = findOrCreateLabel(labels, labelMap, labelLocation);
    return hash;
  }, {})
);

const mapPropsToState = ({ currentSheet, labels, sheets }) => {
    const sheet = sheets[currentSheet];
    const sheetLabels = buildLabelState(labels, labelLocations || {});
    const selectedLabel = labelLocations[0];

    return {
        sheet,
        labels: sheetLabels,
        selectedLabel,
        label: labels[selectedLabel],
    };
};

const stateHandlers = {
    onUpdateLabel: (state, { saveLabel }) => updates => {
        console.info('onUpdateLabel, updates', updates);
        const label = { type: 'StockTagLabel', ...state.label, ...updates };
        saveLabel(state.sheet.id, state.selectedLabel, label);

        return { ...state, label };
    },
    onSelectLabel: state => index => ({
        ...state,
        selectedLabel: index,
        label: state.labels[index],
    }),
    onSubmit: (state, { saveLabel }) => () => {
        const label = { type: 'StockTagLabel', ...state.label };
        saveLabel(state.sheet.id, state.selectedLabel, label);

        return state;
    },
};

const StockTagManager = ({ label, onSelectLabel, onSubmit, onUpdateLabel, selectedLabel }) => (
    <div className="vin-manager">
        <LabelPicker
            key="vin-input"
            selection={selectedLabel}
            labelOptions={labelLocations}
            onSelect={onSelectLabel}
        />
        <StockTagInput
            index={selectedLabel}
            label={label}
            onChange={onUpdateLabel}
            onSubmit={onSubmit}
        />
        <FormFields
            index={selectedLabel}
            label={label}
            onChange={onUpdateLabel}
        />
    </div>
);

export default withStateHandlers(mapPropsToState, stateHandlers)(StockTagManager);
