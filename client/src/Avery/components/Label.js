import React from 'react';

const Label = ({ children }) => (
    <div className="dib overflow-hidden" style={{ margin: '0 0.125em', height: '4em', width: '8em' }}>
        <div className="ba h-100" style={{ borderRadius: '0.4em', borderColor: '#CDCDCD' }}>
            {children}
        </div>
    </div>
);

export default Label;
