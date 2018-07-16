import React from 'react';

const LabelRow = ({ children }) => (
    <div className="cf:after overflow-hidden" style={{ height: '4em' }}>
        {children}
    </div>
);

export default LabelRow;
