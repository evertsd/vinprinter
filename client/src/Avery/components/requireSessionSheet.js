import React from 'react';
import { connect } from 'react-redux';
import { createSession, createSheet } from '../actions';
import { selectSession } from '../selectors';

export const connectSession = connect(
    (state, { sessionId }) => ({ session: selectSession(state, sessionId) }),
    { createSession, createSheet }
);

const requireSessionSheet = WrappedComponent => {
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

        render = () => <WrappedComponent {...this.props} />;
    }

    return connectSession(CreateSessionAndSheet);
};

export default requireSessionSheet;
