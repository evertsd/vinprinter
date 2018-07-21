import React from 'react';
import { compose, withState } from 'recompose';
import { Colors } from 'vinprinter-ink';
import { DefaultLabelPicker, editAverySession } from 'Avery';
import { onLabelLocationChange } from 'Avery/hoc';
import { Tab, Tabs } from 'components';
import CDKTextArea from './CDKTextArea';
import ReceptionForm from './ReceptionForm';
import EditForm from './EditForm';

const INPUT_MODE = {
    CDK_TEXT_AREA: 'CDK',
    FROM: 'FROM',
    EDIT: 'EDIT',
};

const getLabelInputMode = (label = {}) => (label.batchInput && label.batchInput.length ? INPUT_MODE.EDIT : INPUT_MODE.CDK_TEXT_AREA);
const withInputMode = withState('inputMode', 'selectInputMode', ({ label }) => getLabelInputMode(label));

const StockTagForm = ({ inputMode, label, labelLocation, selectLabel, selectInputMode, clearLabel, submitLabel, updateLabel }) => (
    <div>
        <DefaultLabelPicker
            selection={labelLocation}
            selectLabel={selectLabel}
            styles={{
                container: { margin: '1rem 0 1.25rem' },
                selectedOption: { backgroundColor: Colors.Blue.Periwinkle },
            }}
        />
        <Tabs stretch={true} classNames={{ bar: 'w-100 ba br1' }} activeTab={inputMode} onSelect={selectInputMode}>
            <Tab tabKey={INPUT_MODE.CDK_TEXT_AREA} title={INPUT_MODE.CDK_TEXT_AREA}>
                <CDKTextArea
                    clearLabel={clearLabel}
                    label={label}
                    labelLocation={labelLocation}
                    updateLabel={updateLabel}
                    onNext={() => selectInputMode(INPUT_MODE.FROM)}
                />
            </Tab>
            <Tab tabKey={INPUT_MODE.FROM} title={INPUT_MODE.FROM}>
                <ReceptionForm
                    clearLabel={clearLabel}
                    label={label}
                    labelLocation={labelLocation}
                    updateLabel={updateLabel}
                    onBack={() => selectInputMode(INPUT_MODE.CDK_TEXT_AREA)}
                    onSubmit={submitLabel}
                />
            </Tab>
            <Tab tabKey={INPUT_MODE.EDIT} title={INPUT_MODE.EDIT}>
                <EditForm
                    clearLabel={clearLabel}
                    label={label}
                    labelLocation={labelLocation}
                    updateLabel={updateLabel}
                    onBack={() => selectInputMode(INPUT_MODE.CDK_TEXT_AREA)}
                    onSubmit={submitLabel}
                />
            </Tab>
        </Tabs>
    </div>
);

export default compose(
    editAverySession,
    withInputMode,
    onLabelLocationChange(props => props.selectInputMode(getLabelInputMode(props.label)))
)(StockTagForm);
