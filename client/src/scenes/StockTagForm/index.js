import React from 'react';
import { StandardRectangle } from 'react-avery';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { requireSessionSheet, selectLocation, selectSession } from 'Avery';
import { Labels } from 'components';
import Form from './Form';

const connectLayoutState = state => {
    const session = selectSession(state);

    return {
        id: session.currentSheet,
        selectedLocation: session.currentLabel,
        session,
    };
};

const withLayoutProps = connect(
    connectLayoutState,
    { selectLocation }
);

const StockTagWrapper = ({ id, selectedLocation, selectLocation, session }) => {
    if (!(session || id)) return null;

    return (
        <StandardRectangle.Layout
            id={id}
            className="w-33"
            selectedLocation={selectedLocation}
            selectLocation={selectLocation}
            LabelInsertComponent={Labels.StockTagLabel}>
            <Form />
        </StandardRectangle.Layout>
    );
};

export default compose(
    requireSessionSheet,
    withLayoutProps
)(StockTagWrapper);
