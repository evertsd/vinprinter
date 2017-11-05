import omit from 'object.omit'
import {
  FORM_ADD_SHEET,
  FORM_REMOVE_SHEET,
  FORM_UPDATE_LABEL
} from './actions'

export const defaultSheetState = {
  labelPositions: {},
}
export const initialState = {}

export default function formSheetReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_ADD_SHEET:
      return {
        ...state,
        [action.sheetId]: {
          ...defaultSheetState,
          id: action.sheetId
        }
      }
    case FORM_UPDATE_LABEL:
      return {
        ...state,
        [action.sheetId]: {
          ...state[action.sheetId],
          labelPositions: {
            ...state[action.sheetId].labelPositions,
            [action.labelIndex]: action.label.id
          }
        }
      };
    case FORM_REMOVE_SHEET:
      return omit(state, action.sheetId)
    default:
      return state
  }
}
