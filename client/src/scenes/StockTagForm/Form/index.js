import React from 'react';
import { Colors } from 'vinprinter-ink';
import { DefaultLabelPicker, editAverySession } from 'Avery';
import Fields from './Fields';

const StockTagForm = ({ label, labelLocation, selectLabel, updateLabel }) => (
    <div className="mh4">
        <DefaultLabelPicker
            selection={labelLocation}
            selectLabel={selectLabel}
            styles={{
                container: { margin: '1rem 0 2rem' },
                selectedOption: { backgroundColor: Colors.Blue.Periwinkle },
            }}
        />
        <hr style={{ borderColor: Colors.Blue.Periwinkle }} />
        <Fields label={label} labelLocation={labelLocation} updateLabel={updateLabel} />
    </div>
);

export default editAverySession(StockTagForm);
