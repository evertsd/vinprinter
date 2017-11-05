import {
  FORM_ADD_SHEET,
  FORM_REMOVE_SHEET,
} from './actions'

export const initialState = []

export default function formSheetPositionReducer(state = initialState, action) {
  let stateCopy = [...state];

  switch (action.type) {
    case FORM_ADD_SHEET:
      stateCopy.splice(action.sheetIndex, 0, action.sheetId);
      break;
    case FORM_REMOVE_SHEET:
      stateCopy.splice(action.sheetIndex, 1);
      break;
    default:
      break;
  }

  return stateCopy;
}
