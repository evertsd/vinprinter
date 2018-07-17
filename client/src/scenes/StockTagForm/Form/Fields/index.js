import React from 'react';
import { Button, BTN_KINDS } from 'components';
import Fields from './Fields';

const StockTagFormFields = ({ label, onBack, updateLabel, submitLabel }) => (
    <div className="mv2">
        <h3 className="mt4 mb0">Enter Additional Information</h3>
        <Fields label={label} updateLabel={updateLabel} />
        <div className="flex mv3">
            <Button onClick={onBack} className="w-50 mr2">
                Back
            </Button>
            <Button onClick={submitLabel} className="w-50 ml2" kind={BTN_KINDS.PRIMARY}>
                Next
            </Button>
        </div>
    </div>
);

export default StockTagFormFields;
