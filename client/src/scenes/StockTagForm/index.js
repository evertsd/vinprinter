import React from 'react';
import { StandardRectangle } from 'react-avery';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { requireAverySessionSheet, selectLocation } from 'Avery';
import { Labels } from 'components';
import Form from './Form';

const connectLayoutState = (state, { avery: { session = {} } }) => ({
    id: session.currentSheet,
    selectedLocation: session.currentLabel,
});

const withLayoutProps = connect(
    connectLayoutState,
    { selectLocation }
);

const StockTagWrapper = ({ id, selectedLocation, selectLocation, avery }) => {
    if (!avery.session) return null;

    return (
        <StandardRectangle.Layout
            id={id}
            className="w-33"
            selectedLocation={selectedLocation}
            selectLocation={selectLocation}
            LabelInsertComponent={Labels.StockTagLabel}>
            <Form session={avery.session} />
        </StandardRectangle.Layout>
    );
};

export default compose(
    requireAverySessionSheet,
    withLayoutProps
)(StockTagWrapper);
