import React from 'react';

class ResetRedux extends React.Component {
    componentDidMount() {
        const { history, persistor } = this.props;

        if (!persistor) {
            return;
        }

        persistor
            .purge()
            .then(persistor.flush)
            .then(() => history.push('/'));
    }

    render() {
        return null;
    }
}

export default ResetRedux;
