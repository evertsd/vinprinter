import React from 'react';
import { Colors } from 'vinprinter-ink';
import { updateAveryLabel } from 'Avery';
import { Button, BTN_KINDS } from 'components';
import parseInput from './parseCDKText';

const SUBMIT_KEYCODE = 13;

const BatchInput = ({ onClear, onChangeValue, onNext, updateLabel, values }) => {
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
            <h3 className="mt3 mb1">Paste stock tag information</h3>
            <div className="flex">
                <textarea
                    type="text"
                    className="w-100 pa2 mv2"
                    style={{ borderRadius: '2px', borderColor: Colors.Gray.Default, minHeight: '10rem' }}
                    placeholder="Paste stock tag information"
                    value={values.batchInput || ''}
                    onChange={e => onChangeValue('batchInput', e.target.value)}
                    onKeyDown={onKeyDown}
                />
            </div>
            <div className="flex mv3">
                <Button onClick={onClear} className="w-50 mr2" kind={BTN_KINDS.DANGER}>
                    Clear
                </Button>
                <Button onClick={submitValues} className="w-50 ml2" kind={BTN_KINDS.PRIMARY}>
                    Save
                </Button>
            </div>
        </div>
    );
};

export default updateAveryLabel(BatchInput);
