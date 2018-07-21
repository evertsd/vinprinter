import React from 'react';
import withDebounce from '@hocs/debounce-handler';
import { updateAveryLabel } from 'Avery';
import { compose } from 'recompose';
import { Button, BTN_KINDS, Input, InputLabel } from 'components';

const Fields = ({ values, clearLabel, onBack, onReset, onUpdate, onSubmit }) => {
    const onClear = () => {
        clearLabel();
        onReset();
        onBack();
    };

    const onUpdateField = field => e => onUpdate(field, (e.target.value || '').toUpperCase());

    return (
        <div className="mv2">
            <h3 className="mt3 mb0">Enter Additional Information</h3>
            <div className="pb2">
                <div className="flex">
                    <div className="w-50 mr2">
                        <InputLabel>Model</InputLabel>
                        <Input autoFocus={true} type="text" value={values.model} onChange={onUpdateField('model')} />
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
)(Fields);
