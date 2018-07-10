import {
  FORM_SUBMISSION_REQUEST,
  FORM_SUBMISSION_SUCCESS,
} from './actions'
import {
  CREATE_SHEET,
} from 'Avery/actions'

export const REDUCER_KEY = 'printForm'

export const initialState = {
  currentSheet: 0,
  submitting: false,
  sheets: []
}

const formReducer = function(state = initialState, action) {
  switch (action.type) {
    case CREATE_SHEET:
      return {
        ...state,
        sheets: [...state.sheets, action.id],
        currentSheet: state.sheets.length || 0
      }
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

export default formReducer
