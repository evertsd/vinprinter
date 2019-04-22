import React from 'react';
import { EditLabel } from 'Avery';
import { Button, BTN_KINDS, Input, InputLabel } from 'components';

const Fields = ({ clearLabel, form, onResetTab, onNext, onUpdate }) => (
    <div className="mv2">
        <h3 className="mt3 mb0">Enter Additional Information</h3>
        <div className="pb2">
            <div className="flex">
                <div className="w-50 mr2">
                    <InputLabel>Model</InputLabel>
                    <Input autoFocus={true} type="text" value={form.model} onChange={e => onUpdate({ model: e.target.value })} />
                </div>
                <div className="w-50 ml2">
                    <InputLabel>Mileage</InputLabel>
                    <Input type="text" value={form.miles} onChange={e => onUpdate({ miles: e.target.value })} />
                </div>
            </div>
            <div className="flex">
                <div className="w-50 mr2">
                    <InputLabel>Received from</InputLabel>
                    <Input type="text" value={form.receivedFrom} onChange={e => onUpdate({ receivedFrom: e.target.value })} />
                </div>
                <div className="w-50 ml2">
                    <InputLabel>Received on</InputLabel>
                    <Input type="text" value={form.receivedOn} onChange={e => onUpdate({ receivedOn: e.target.value })} />
                </div>
            </div>
        </div>
        <div className="flex mv3">
            <Button
                className="w-50 mr2"
                kind={BTN_KINDS.DANGER}
                onClick={() => {
                    clearLabel();
                    onResetTab();
                }}>
                Clear
            </Button>
            <Button onClick={onNext} className="w-50 ml2" kind={BTN_KINDS.PRIMARY}>
                Save
            </Button>
        </div>
    </div>
);

export default EditLabel(Fields);
