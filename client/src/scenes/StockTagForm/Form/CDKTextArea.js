import React from 'react';
import { Colors } from 'vinprinter-ink';
import { EditLabel } from 'Avery';
import { Button, BTN_KINDS } from 'components';
import parseInput from './parseCDKText';

const SUBMIT_KEYCODE = 13;

class BatchInputHelpers extends React.Component {
    onKeyDown = event => {
        if (event.keyCode !== SUBMIT_KEYCODE) {
            return;
        }

        event.stopPropagation();
        this.props.onNextTab();
    };

    updateLabelWrapper = e => {
        this.props.onUpdate(parseInput(e.target.value));
    };

    render = () => <BatchInput {...this.props} onKeyDown={this.onKeyDown} updateLabel={this.updateLabelWrapper} />;
}

const BatchInput = ({ clearLabel, onKeyDown, onNextTab, updateLabel, form }) => (
    <div className="mv2">
        <h3 className="mt3 mb1">Paste stock tag information</h3>
        <div className="flex">
            <textarea
                type="text"
                className="w-100 pa2 mv2"
                style={{ borderRadius: '2px', borderColor: Colors.Gray.Default, minHeight: '10rem' }}
                placeholder="Paste stock tag information"
                value={form.batchInput || ''}
                onChange={updateLabel}
                onKeyDown={onKeyDown}
            />
        </div>
        <div className="flex mv3">
            <Button onClick={clearLabel} className="w-50 mr2" kind={BTN_KINDS.DANGER}>
                Clear
            </Button>
            <Button onClick={onNextTab} className="w-50 ml2" kind={BTN_KINDS.PRIMARY}>
                Save
            </Button>
        </div>
    </div>
);

export default EditLabel(BatchInputHelpers);
