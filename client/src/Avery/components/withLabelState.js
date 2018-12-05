import { connect } from 'react-redux';
import { selectSheetLabel } from '../selectors';

const withLabelState = connect((state, { sheetId, location }) => {
    const label = selectSheetLabel(state, sheetId, location) || {};

    return { ...label };
});

export default withLabelState;
