import React from 'react';
import { StandardRectangle } from 'react-avery';

const { SHEET_LABEL_LOCATIONS } = StandardRectangle;

const LabelPickerOption = ({ option, onClick, style }) => (
    <a onClick={() => onClick(option)} className="bl bt bb pv2 tc w-10" style={style}>
        {option}
    </a>
);

const DefaultLabelPicker = ({ selection, selectLabel, styles = {} }) => (
    <div className="flex br" style={styles.container}>
        {SHEET_LABEL_LOCATIONS.map(location => (
            <LabelPickerOption key={location} option={location} style={selection === location ? styles.selectedOption : styles.option} onClick={selectLabel} />
        ))}
    </div>
);

export default DefaultLabelPicker;
