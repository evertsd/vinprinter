import React, { useEffect, useState } from 'react';
import { connectLabel } from 'Avery';
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

export const StockTagForm = ({ label, labelLocation }) => {
    const [mode, setMode] = useState(getLabelInputMode(label));
    useEffect(() => setMode(getLabelInputMode(label)), [labelLocation]);

    return (
        <Tabs stretch={true} classNames={{ bar: 'w-100 ba br1 mt3' }} activeTab={mode} onSelect={setMode}>
            <Tab tabKey={INPUT_MODE.CDK_TEXT_AREA} title={INPUT_MODE.CDK_TEXT_AREA}>
                <CDKTextArea onNextTab={() => setMode(INPUT_MODE.FROM)} />
            </Tab>
            <Tab tabKey={INPUT_MODE.FROM} title={INPUT_MODE.FROM}>
                <ReceptionForm onResetTab={() => setMode(INPUT_MODE.CDK_TEXT_AREA)} />
            </Tab>
            <Tab tabKey={INPUT_MODE.EDIT} title={INPUT_MODE.EDIT}>
                <EditForm onResetTab={() => setMode(INPUT_MODE.CDK_TEXT_AREA)} />
            </Tab>
        </Tabs>
    );
};

export default connectLabel(StockTagForm);
