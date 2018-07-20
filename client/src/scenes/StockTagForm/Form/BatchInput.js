import React from 'react';
import { Colors } from 'vinprinter-ink';
import { updateAveryLabel } from 'Avery';
import { Button, BTN_KINDS } from 'components';

const SUBMIT_KEYCODE = 13;

const parseInput = currentState => {
    const data = currentState.batchInput.split(/\s/).filter(str => !!str);

    return {
        batchInput: currentState.batchInput,
        stockNumber: data[1] || currentState.stockNumber,
        year: data[3] || currentState.year,
        make: data[5] || currentState.make,
        model: data[7] || currentState.model,
        vin: data[9] || currentState.vin,
        color: data[11] || currentState.color,
        miles: data[13] || currentState.miles,
    };
};

const BatchInput = ({ onChangeValue, onNext, updateLabel, values }) => {
    const submitValues = () => {
        updateLabel(parseInput(values));
        onNext();
    };

    const onKeyDown = event => {
        if (event.keyCode !== SUBMIT_KEYCODE) {
            return;
        }

        event.stopPropagation();
        submitValues();
    };

    return (
        <div className="mv2">
            <h3 className="mt4 mb0">Paste stock tag information</h3>
            <div className="flex">
                <textarea
                    type="text"
                    className="w-100 pa2 mv2"
                    style={{ borderRadius: '2px', borderColor: Colors.Gray.Default, minHeight: '7rem' }}
                    placeholder="Paste stock tag information"
                    value={values.batchInput || ''}
                    onChange={e => onChangeValue('batchInput', e.target.value)}
                    onKeyDown={onKeyDown}
                />
            </div>
            <div className="flex mv3">
                <Button onClick={onNext} className="w-50 mr2">
                    Skip
                </Button>
                <Button onClick={submitValues} className="w-50 ml2" kind={BTN_KINDS.PRIMARY}>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default updateAveryLabel(BatchInput);
