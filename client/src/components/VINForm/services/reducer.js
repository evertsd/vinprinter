import { combineReducers } from 'redux'
import {
  FORM_SUBMISSION_REQUEST,
  FORM_SUBMISSION_SUCCESS,
} from './actions'

import formLabelReducer from './labelReducer'
import formSheetReducer from './sheetReducer'
import formSheetPositionReducer from './sheetPositionReducer'

const initialState = {
  currentSheet: 0,
  submitting: false,
  printRequest: {},
}

const formStateReducer = function(state = initialState, action) {
  switch (action.type) {
    case FORM_SUBMISSION_REQUEST:
      return {
        ...state,
        submitting: true
      }
    case FORM_SUBMISSION_SUCCESS:
      return {
        ...initialState,
        printRequest: state
      }
    default:
      return state
  }
}

export const initialFromState = {
  labels: {},
  sheets: {},
  sheetPositions: [],
  metadata: initialState
}

export default combineReducers({
  labels: formLabelReducer,
  sheets: formSheetReducer,
  sheetPositions: formSheetPositionReducer,
  metadata: formStateReducer
});
