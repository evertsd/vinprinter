import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import BlankLabel from './BlankLabel';
import LabelRow from './LabelRow';
import Label from './Label';
import { SHEET_LABEL_LOCATIONS } from '../schema';
import { selectSheetLabels } from '../selectors';

const connectSheetLabels = (state, { sheetId }) => ({
    labels: selectSheetLabels(state, sheetId),
});

const getEvenIndices = array => Object.keys(array).filter(i => i % 2 === 0);

const Sheet = ({ className, style, labels, LabelInsertComponent = BlankLabel }) => (
    <div className={classNames('dib', className)} style={{ fontSize: '0.514in', padding: '0.7em 0', ...style }}>
        {getEvenIndices(SHEET_LABEL_LOCATIONS).map(i => (
            <LabelRow key={`avery-row-${i}`}>
                <Label>
                    <LabelInsertComponent {...labels[SHEET_LABEL_LOCATIONS[i]]} />
                </Label>
                <Label>
                    <LabelInsertComponent {...labels[SHEET_LABEL_LOCATIONS[i + 1]]} />
                </Label>
            </LabelRow>
        ))}
    </div>
);

export default connect(connectSheetLabels)(Sheet);
