import {
  CREATE_SHEET,
} from 'Avery/actions'

export const REDUCER_KEY = 'stockTagForm'

export const initialState = {
  currentSheet: 0,
  sheets: [],
}

const formReducer = function(state = initialState, action) {
  let nextState

  switch (action.type) {
  case CREATE_SHEET:
    nextState = {
      ...state,
      sheets: [...state.sheets, action.id],
      currentSheet: state.sheets.length || 0
    }
    break;
  default:
    nextState = state
  }

  return nextState
}

export default formReducer
