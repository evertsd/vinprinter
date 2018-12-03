import React from 'react';
import { EditLabel } from 'Avery';
import { Button, BTN_KINDS, Input, InputLabel } from 'components';

class FormHelpers extends React.Component {
    onClear = () => {
        this.props.clearLabel();
        this.props.onResetTab();
    };

    render = () => <Form {...this.props} onClear={this.onClear} />;
}

const Form = ({ form, onClear, onNext, onUpdate }) => (
    <div className="mv2">
        <h3 className="mt3 mb0">Edit Label</h3>
        <div className="pb2">
            <div className="flex">
                <div className="w-100">
                    <InputLabel>Stock number</InputLabel>
                    <Input autoFocus={true} type="text" value={form.stockNumber} onChange={e => onUpdate({ stockNumber: e.target.value })} />
                </div>
            </div>
            <div className="flex">
                <div className="w-33 mr2">
                    <InputLabel>Make</InputLabel>
                    <Input type="text" value={form.make} onChange={e => onUpdate({ make: e.target.value })} />
                </div>
                <div className="w-40 mr2">
                    <InputLabel>Model</InputLabel>
                    <Input type="text" value={form.model} onChange={e => onUpdate({ model: e.target.value })} />
                </div>
                <div className="w-25">
                    <InputLabel>Year</InputLabel>
                    <Input type="text" value={form.year} onChange={e => onUpdate({ year: e.target.value })} />
                </div>
            </div>
            <div className="flex">
                <div className="w-100">
                    <InputLabel>VIN</InputLabel>
                    <Input type="text" value={form.vin} onChange={e => onUpdate({ vin: e.target.value })} />
                </div>
            </div>
            <div className="flex">
                <div className="w-50 mr2">
                    <InputLabel>Color</InputLabel>
                    <Input type="text" value={form.color} onChange={e => onUpdate({ color: e.target.value })} />
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
            <Button onClick={onClear} className="w-50 mr2" kind={BTN_KINDS.DANGER}>
                Clear
            </Button>
            <Button onClick={onNext} className="w-50 ml2" kind={BTN_KINDS.PRIMARY}>
                Save
            </Button>
        </div>
    </div>
);

export default EditLabel(FormHelpers);
