import React from 'react';
import withDebounce from '@hocs/debounce-handler';
import { updateAveryLabel } from 'Avery';
import { Button, BTN_KINDS, Input, InputLabel } from 'components';
import { compose } from 'recompose';

const Form = ({ clearLabel, onBack, onReset, onSubmit, onUpdate, values }) => {
    const onClear = () => {
        clearLabel();
        onReset();
        onBack();
    };

    const onUpdateField = field => e => onUpdate(field, e.target.value || '');

    return (
        <div className="mv2">
            <h3 className="mt3 mb0">Edit Label</h3>
            <div className="pb2">
                <div className="flex">
                    <div className="w-100">
                        <InputLabel>Stock number</InputLabel>
                        <Input autoFocus={true} type="text" value={values.stockNumber} onChange={onUpdateField('stockNumber')} />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-33 mr2">
                        <InputLabel>Make</InputLabel>
                        <Input type="text" value={values.make} onChange={onUpdateField('make')} />
                    </div>
                    <div className="w-40 mr2">
                        <InputLabel>Model</InputLabel>
                        <Input type="text" value={values.model} onChange={onUpdateField('model')} />
                    </div>
                    <div className="w-25">
                        <InputLabel>Year</InputLabel>
                        <Input type="text" value={values.year} onChange={onUpdateField('year')} />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-100">
                        <InputLabel>VIN</InputLabel>
                        <Input type="text" value={values.vin} onChange={onUpdateField('vin')} />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-50 mr2">
                        <InputLabel>Color</InputLabel>
                        <Input type="text" value={values.color} onChange={onUpdateField('color')} />
                    </div>
                    <div className="w-50 ml2">
                        <InputLabel>Mileage</InputLabel>
                        <Input type="text" value={values.miles} onChange={onUpdateField('miles')} />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-50 mr2">
                        <InputLabel>Received from</InputLabel>
                        <Input type="text" value={values.receivedFrom} onChange={onUpdateField('receivedFrom')} />
                    </div>
                    <div className="w-50 ml2">
                        <InputLabel>Received on</InputLabel>
                        <Input type="text" value={values.receivedOn} onChange={onUpdateField('receivedOn')} />
                    </div>
                </div>
            </div>
            <div className="flex mv3">
                <Button onClick={onClear} className="w-50 mr2" kind={BTN_KINDS.DANGER}>
                    Clear
                </Button>
                <Button onClick={onSubmit} className="w-50 ml2" kind={BTN_KINDS.PRIMARY}>
                    Save
                </Button>
            </div>
        </div>
    );
};

export default compose(
    withDebounce('updateLabel', 400),
    updateAveryLabel
)(Form);
