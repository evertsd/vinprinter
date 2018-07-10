import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const LabelPickerOption = ({ option, isSelected, onClick }) => (
    <a onClick={() => onClick(option)} className={`${isSelected ? 'selected' : ''}`}>
      {option}
    </a>
)
const LabelPicker = ({ labelOptions, selection, onSelect }) => (
    <div className="row no-print label-picker">
        {labelOptions.map(option => (
            <LabelPickerOption key={option} option={option} isSelected={selection === option} onClick={onSelect} />
        ))}
    </div>
);

export default LabelPicker
