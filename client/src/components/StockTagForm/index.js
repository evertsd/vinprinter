import { connect } from 'react-redux'
import { sheetsSelectorFactory, labelsSelector } from 'Avery/selectors';
import { REDUCER_KEY as FORM_REDUCER_KEY } from './reducer';

import { saveLabel } from 'Avery/actions'
import StockTagManager from './components/StockTagManager'

const mapStateToPropsFactory = () => {
    const sheetsSelector = sheetsSelectorFactory();

    return (state, ownProps) => {
        const form = state[FORM_REDUCER_KEY];
        const sheets = sheetsSelector(state, { sheetIds: form.sheets || [] });
        const labels = labelsSelector(state);

        return {
            ...form, sheets, labels
        }
    };
}

export default connect(mapStateToPropsFactory, { saveLabel })(StockTagManager);
