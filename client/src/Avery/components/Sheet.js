import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import BlankLabel from './BlankLabel';
import LabelRow from './LabelRow';
import Label from './Label';
import { selectLabel } from '../actions';
import { SHEET_LABEL_LOCATIONS } from '../schema';
import { selectSheetLabels } from '../selectors';

const connectSheetLabels = (state, { session, sheetId }) => ({
    labels: selectSheetLabels(state, sheetId),
    isSelected: index => SHEET_LABEL_LOCATIONS[index] === session.currentLabel && session.currentSheet === sheetId,
});

const connectSelectLabel = (dispatch, { session, sheetId }) => ({
    selectLabel: index => {
        dispatch(selectLabel({ labelLocation: SHEET_LABEL_LOCATIONS[index], sessionId: session.id, sheetId }));
    },
});

const getEvenIndices = array =>
    Object.keys(array)
        .map(Number)
        .filter(i => i % 2 === 0);

const Sheet = ({ className, isSelected, style, labels, LabelInsertComponent = BlankLabel, selectLabel }) => (
    <div className={classNames('dib', className)} style={{ fontSize: '0.514in', padding: '0.8em 0 0.6em', ...style }}>
        {getEvenIndices(SHEET_LABEL_LOCATIONS).map(i => (
            <LabelRow key={`avery-row-${i}`}>
                <Label onClick={() => selectLabel(i)} isSelected={isSelected(i)}>
                    <LabelInsertComponent {...labels[SHEET_LABEL_LOCATIONS[i]]} />
                </Label>
                <Label onClick={() => selectLabel(i + 1)} isSelected={isSelected(i + 1)}>
                    <LabelInsertComponent {...labels[SHEET_LABEL_LOCATIONS[i + 1]]} />
                </Label>
            </LabelRow>
        ))}
    </div>
);

export default connect(
    connectSheetLabels,
    connectSelectLabel
)(Sheet);
