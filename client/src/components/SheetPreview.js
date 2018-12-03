import React from 'react';
import { Sheet } from 'Avery';

const SheetPreview = ({ session, sheetId, LabelInsertComponent }) => (
    <div className="fr" style={{ marginLeft: '40px' }}>
        <Sheet
            LabelInsertComponent={LabelInsertComponent}
            preview={true}
            sheetId={sheetId}
            session={session}
            className="ba mv3"
            style={{
                marginRight: 0,
                fontSize: '0.3125in',
                borderColor: '#CDCDCD',
            }}
        />
    </div>
);

export default SheetPreview;