import React from 'react';
import debounce from 'debounce';
import { compose, withStateHandlers } from 'recompose';
import { Colors } from 'vinprinter-ink';

const initializeValues = label => ({
    color: label.color || '',
    miles: label.miles || '',
    receivedFrom: label.receivedFrom || '',
    receivedOn: label.receivedOn || '',
    keyCode: label.keyCode || '',
    keylessCode: label.keylessCode || '',
    stockNumber: label.stockNumber || '',
    make: label.make || '',
    model: label.model || '',
    year: label.year || '',
});

const DebouncedUpdates = WrappedComponent => {
    return ({ updateLabel, ...props }) => <WrappedComponent {...props} updateLabel={debounce(updateLabel, 200)} />;
};

const labelFormHandlers = withStateHandlers(
    ({ label = {} }) => ({
        values: initializeValues(label),
    }),
    {
        onUpdate: (state, { updateLabel }) => (key, value) => {
            const values = {
                ...state.values,
                [key]: value,
            };

            updateLabel(values);

            return { values };
        },
    }
);

const Label = ({ children }) => <label className="db mt3 mb1">{children}</label>;
const Input = ({ type = 'text', ...props }) => (
    <input {...props} type={type} className="ba pa2 w-100" style={{ borderColor: Colors.Gray.Default, borderRadius: '2px' }} />
);

const Form = ({ values, onUpdate }) => {
    const onUpdateField = field => e => onUpdate(field, e.target.value);

    return (
        <div className="pb2">
            <div className="flex">
                <div className="w-50 mr2">
                    <Label>Color</Label>
                    <Input type="text" value={values.color} onChange={onUpdateField('color')} />
                </div>
                <div className="w-50">
                    <Label>Mileage</Label>
                    <Input type="text" value={values.miles} onChange={onUpdateField('miles')} />
                </div>
            </div>
            <div className="flex">
                <div className="w-50 mr2">
                    <Label>Received from</Label>
                    <Input type="text" value={values.receivedFrom} onChange={onUpdateField('receivedFrom')} />
                </div>
                <div className="w-50">
                    <Label>Received on</Label>
                    <Input type="text" value={values.receivedOn} onChange={onUpdateField('receivedOn')} />
                </div>
            </div>
            <div className="flex">
                <div className="w-50 mr2">
                    <Label>Key code</Label>
                    <Input type="text" value={values.keyCode} onChange={onUpdateField('keyCode')} />
                </div>
                <div className="w-50">
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
        </div>
    );
};

export default compose(
    DebouncedUpdates,
    labelFormHandlers
)(Form);
