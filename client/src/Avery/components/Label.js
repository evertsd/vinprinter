import React from 'react';
import { PrintMediaQuery } from '../hoc';

const styles = {
    insert: {
        borderRadius: '0.4em',
        borderColor: '#CDCDCD',
    },
    selectedInsert: {
        borderColor: 'rgb(179, 179, 223)',
        boxShadow: '0 0 2px 2px rgb(204, 204, 255) inset',
    },
};

const LabelInsert = PrintMediaQuery(
    ({ children, isSelected, onClick }) => (
        <div className="ba h-100" style={{ ...styles.insert, ...(isSelected ? styles.selectedInsert : {}) }} onClick={onClick}>
            {children}
        </div>
    ),
    ({ children }) => <div className="h-100">{children}</div>
);

const Label = ({ children, isSelected, onClick }) => (
    <div className="dib overflow-hidden" style={{ margin: '0 0.125em', height: '4em', width: '8em' }}>
        <LabelInsert isSelected={isSelected} onClick={onClick}>{children}</LabelInsert>
    </div>
);

export default Label;
