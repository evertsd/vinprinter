import React from 'react';
import { Sheet } from 'Avery';

const SheetPreview = ({ sheetId, LabelInsertComponent }) => (
    <div className="fr" style={{ marginLeft: '40px' }}>
        <Sheet
            LabelInsertComponent={LabelInsertComponent}
            preview={true}
            sheetId={sheetId}
            className="ba"
            style={{
                margin: '20px',
                marginRight: 0,
                fontSize: '0.3125in',
                borderColor: '#CDCDCD',
            }}
        />
    </div>
);

export default SheetPreview;