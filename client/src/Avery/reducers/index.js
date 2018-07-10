import { combineReducers } from 'redux'

import labelReducer, {
  REDUCER_KEY as LABEL_REDUCER_KEY,
  initialState as initialLabelState
} from './labelReducer'
import sheetReducer, {
  REDUCER_KEY as SHEET_REDUCER_KEY,
  initialState as initialSheetState
} from './sheetReducer'

export { REDUCER_KEY } from './helpers'
export { LABEL_REDUCER_KEY, SHEET_REDUCER_KEY }

export const initialState = {
  [LABEL_REDUCER_KEY]: initialLabelState,
  [SHEET_REDUCER_KEY]: initialSheetState
}

export default combineReducers({
  [LABEL_REDUCER_KEY]: labelReducer,
  [SHEET_REDUCER_KEY]: sheetReducer
});
