import React from 'react';
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

const withInputMode = WrappedComponent => {
    class InputMode extends React.Component {
        constructor(props) {
            super(props);

            this.state = { mode: getLabelInputMode(props.label) };
        }

        componentDidUpdate(prevProps) {
            const { label, labelLocation } = this.props;

            if (prevProps.labelLocation !== labelLocation) {
                this.setState({ mode: getLabelInputMode(label) });
            }
        }

        setMode = mode => this.setState({ mode });

        render = () => <WrappedComponent {...this.props} mode={this.state.mode} setMode={this.setMode} />;
    }

    return connectLabel(InputMode);
};

const StockTagForm = ({ mode, setMode }) => (
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

export default withInputMode(StockTagForm);
