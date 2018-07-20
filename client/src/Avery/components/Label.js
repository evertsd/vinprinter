import React from 'react';
import { PrintMediaQuery } from '../hoc';

const LabelInsert = PrintMediaQuery(
    ({ children }) => (
        <div className="ba h-100" style={{ borderRadius: '0.4em', borderColor: '#CDCDCD' }}>
            {children}
        </div>
    ),
    ({ children }) => <div className="h-100">{children}</div>
);

const Label = ({ children }) => (
    <div className="dib overflow-hidden" style={{ margin: '0 0.125em', height: '4em', width: '8em' }}>
        <LabelInsert>{children}</LabelInsert>
    </div>
);

export default Label;
