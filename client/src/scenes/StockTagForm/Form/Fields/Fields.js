import React from 'react';
import debounce from 'debounce';
import { updateAveryLabel } from 'Avery';
import { compose } from 'recompose';
import { Colors } from 'vinprinter-ink';

const DebouncedUpdates = WrappedComponent => {
    return ({ updateLabel, ...props }) => <WrappedComponent {...props} updateLabel={debounce(updateLabel, 200)} />;
};

const Label = ({ children }) => <label className="db mt3 mb1">{children}</label>;
const Input = ({ type = 'text', value = '', ...props }) => (
    <input {...props} className="ba pa2 w-100" type={type} value={value} style={{ borderColor: Colors.Gray.Default, borderRadius: '2px' }} />
);

const Form = ({ values, onUpdate }) => {
    const onUpdateField = field => e => onUpdate(field, e.target.value || '');

    return (
        <div className="pb2">
            <div className="flex">
                <div className="w-50 mr2">
                    <Label>Color</Label>
                    <Input autoFocus={true} type="text" value={values.color} onChange={onUpdateField('color')} />
                </div>
                <div className="w-50 ml2">
                    <Label>Mileage</Label>
                    <Input type="text" value={values.miles} onChange={onUpdateField('miles')} />
                </div>
            </div>
            <div className="flex">
                <div className="w-50 mr2">
                    <Label>Received from</Label>
                    <Input type="text" value={values.receivedFrom} onChange={onUpdateField('receivedFrom')} />
                </div>
                <div className="w-50 ml2">
                    <Label>Received on</Label>
                    <Input type="text" value={values.receivedOn} onChange={onUpdateField('receivedOn')} />
                </div>
            </div>
            <div className="flex">
                <div className="w-50 mr2">
                    <Label>Key code</Label>
                    <Input type="text" value={values.keyCode} onChange={onUpdateField('keyCode')} />
                </div>
                <div className="w-50 ml2">
                    <Label>Keyless code</Label>
                    <Input type="text" value={values.keylessCode} onChange={onUpdateField('keylessCode')} />
                </div>
            </div>
            <div className="flex">
                <div className="w-100">
                    <Label>Stock number</Label>
                    <Input type="text" value={values.stockNumber} onChange={onUpdateField('stockNumber')} />
                </div>
            </div>
            <div className="flex">
                <div className="w-33 mr2">
                    <Label>Make</Label>
                    <Input type="text" value={values.make} onChange={onUpdateField('make')} />
                </div>
                <div className="w-40 mr2">
                    <Label>Model</Label>
                    <Input type="text" value={values.model} onChange={onUpdateField('model')} />
                </div>
                <div className="w-25">
                    <Label>Year</Label>
                    <Input type="text" value={values.year} onChange={onUpdateField('year')} />
                </div>
            </div>
            <div className="flex">
                <div className="w-100">
                    <Label>VIN</Label>
                    <Input type="text" value={values.vin} onChange={onUpdateField('vin')} />
                </div>
            </div>
        </div>
    );
};

export default compose(
    DebouncedUpdates,
    updateAveryLabel
)(Form);
