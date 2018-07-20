import React from 'react';
import { compose, withState } from 'recompose';
import { Colors } from 'vinprinter-ink';
import { DefaultLabelPicker, editAverySession } from 'Avery';
import { onLabelLocationChange } from 'Avery/hoc';
import BatchInput from './BatchInput';
import Fields from './Fields';

const INPUT_SETTINGS = {
    BATCH: 'BATCH',
    FORM: 'FORM',
};

const getLabelInputSetting = (label = {}) => (label.batchInput && label.batchInput.length ? INPUT_SETTINGS.FORM : INPUT_SETTINGS.BATCH);
const withInputSettings = withState('inputSetting', 'setInputSettings', ({ label }) => getLabelInputSetting(label));

const StockTagForm = ({ inputSetting, label, labelLocation, selectLabel, setInputSettings, submitLabel, updateLabel }) => (
    <div>
        <DefaultLabelPicker
            selection={labelLocation}
            selectLabel={selectLabel}
            styles={{
                container: { margin: '1rem 0 2rem' },
                selectedOption: { backgroundColor: Colors.Blue.Periwinkle },
            }}
        />
        <hr style={{ borderColor: Colors.Blue.Periwinkle }} />
        {inputSetting === INPUT_SETTINGS.BATCH && (
            <BatchInput label={label} labelLocation={labelLocation} onNext={() => setInputSettings(INPUT_SETTINGS.FORM)} updateLabel={updateLabel} />
        )}
        {inputSetting === INPUT_SETTINGS.FORM && (
            <Fields
                label={label}
                labelLocation={labelLocation}
                onBack={() => setInputSettings(INPUT_SETTINGS.BATCH)}
                submitLabel={submitLabel}
                updateLabel={updateLabel}
            />
        )}
    </div>
);

export default compose(
    editAverySession,
    withInputSettings,
    onLabelLocationChange(props => props.setInputSettings(getLabelInputSetting(props.label)))
)(StockTagForm);
