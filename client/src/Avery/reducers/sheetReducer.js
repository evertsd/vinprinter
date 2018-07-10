import { REHYDRATE } from 'redux-persist'
import { CREATE_SHEET, SAVE_LABEL } from '../actions'
import { hydrate } from './helpers'

export const REDUCER_KEY = 'sheets'
export const initialState = {}

const saveLabel = (sheet, labelLocation, label) => ({
  ...sheet,
  labels: {
    ...sheet.labels,
    [labelLocation]: label.id
  }
})

export default function sheets(state = initialState, action) {
  let nextState

  switch (action.type) {
    case CREATE_SHEET:
      nextState = {
        ...state,
        [action.id]: {
          id: action.id
        }
      }

      break;
    case SAVE_LABEL:
      nextState = {
        ...state,
        [action.sheetId]: saveLabel(
          state[action.sheetId],
          action.labelLocation,
          action.label
        )
      }

      break;
    case REHYDRATE:
      nextState = {
        ...state,
        ...(hydrate(action.payload, REDUCER_KEY) || {})
      }

      break;
    default:
      nextState = state
  }

  return nextState
}
