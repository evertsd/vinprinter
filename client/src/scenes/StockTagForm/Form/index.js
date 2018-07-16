import React from 'react';
import { editAverySheet } from 'Avery';
import Fields from './Fields';

const StockTagForm = ({ label, labelLocation, selectLabel, submitLabel, updateLabel }) => (
    <div className="vin-manager">
        <Fields label={label} updateLabel={updateLabel} />
    </div>
);

export default editAverySheet(StockTagForm);
