import withDebounce from '@hocs/debounce-handler';
import React from 'react';
import { StandardRectangle } from 'react-avery';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { clearLabel, saveLabel, selectLabel } from '../actions';
import { selectSession, selectSheetLabel } from '../selectors';

const mapStateToLabel = state => {
    const session = selectSession(state);
    const id = session.currentSheet;
    const labelLocation = session.currentLabel;

    return { id, labelLocation, label: selectSheetLabel(state, id, labelLocation), session: session.id };
};

export const connectLabel = connect(mapStateToLabel);

export const connectEditLabel = connect(
    mapStateToLabel,
    dispatch => ({
        clearLabel: payload => dispatch(clearLabel(payload)),
        saveLabel: payload => dispatch(saveLabel(payload)),
        selectNext: (sessionId, sheetId, location) => {
            const labelLocation = StandardRectangle.findNextLabelLocation(location);

            dispatch(selectLabel({ labelLocation, sheetId, sessionId }));
        },
    })
);

const debounceLabelUpdate = withDebounce('saveLabel', 400);

const EditLabel = WrappedComponent => {
    class EditFormState extends React.Component {
        constructor(props) {
            super(props);

            this.state = { form: { ...(props.label || {}) } };
        }

        componentDidUpdate(prevProps) {
            const { label = {}, labelLocation } = this.props;

            if (labelLocation !== prevProps.labelLocation) {
                this.setState({ form: { ...label } });
            }
        }

        onUpdate = updates => {
            const form = { ...this.state.form, ...updates };
            const { id, labelLocation } = this.props;

            this.setState({ form });
            this.props.saveLabel({ sheetId: id, labelLocation, label: form });
        };

        onNext = () => {
            const { session, id, labelLocation } = this.props;

            this.props.selectNext(session, id, labelLocation);
        };

        render = () => <WrappedComponent {...this.props} form={this.state.form} onNext={this.onNext} onUpdate={this.onUpdate} />;
    }

    return debounceLabelUpdate(EditFormState);
};

export default compose(
    connectEditLabel,
    EditLabel
);
