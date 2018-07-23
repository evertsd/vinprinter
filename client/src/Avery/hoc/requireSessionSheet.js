import React from 'react';
import { connect } from 'react-redux';
import { createSession, createSheet } from '../actions';
import { selectSession } from '../selectors';

export const requireSessionSheet = WrappedComponent => {
    return props => <RequireSessionSheet {...props} WrappedComponent={WrappedComponent} />;
};

export const connectSession = connect(
    (state, { sessionId }) => ({ session: selectSession(state, sessionId) }),
    { createSession, createSheet }
);

class CreateSessionAndSheet extends React.Component {
    startSessionOrCreateSheet() {
        const { session, createSession, createSheet } = this.props;

        if (!session) {
            createSession();
        } else if (!(session.sheets && session.sheets.length > 0)) {
            createSheet({ sessionId: session.id });
        }
    }

    componentDidMount() {
        this.startSessionOrCreateSheet();
    }

    componentDidUpdate() {
        this.startSessionOrCreateSheet();
    }

    shouldComponentUpdate({ session = { sheets: [] } }) {
        const oldSession = this.props.session || { sheets: [] };

        return (
            oldSession.id !== session.id ||
            (oldSession.sheets && oldSession.sheets.length) !== (session.sheets && session.sheets.length) ||
            oldSession.currentLabel !== session.currentLabel ||
            oldSession.currentSheet !== session.currentSheet
        );
    }

    render() {
        const { session, startSession, createSheet, WrappedComponent, ...props } = this.props;
        const avery = { session, startSession, createSheet };

        return <WrappedComponent {...props} avery={avery} />;
    }
}

const RequireSessionSheet = connectSession(CreateSessionAndSheet);
