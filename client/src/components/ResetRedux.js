import React from 'react';

const BASE_ROUTE = '/vinprinter';

class ResetRedux extends React.Component {
    componentDidMount() {
        const { history, persistor } = this.props;

        if (!persistor) {
            return;
        }

        persistor
            .purge()
            .then(persistor.flush)
            .then(() => history.push(BASE_ROUTE));
    }

    render() {
        return null;
    }
}

export default ResetRedux;
