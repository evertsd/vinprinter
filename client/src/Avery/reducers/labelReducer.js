import { REHYDRATE } from 'redux-persist/constants'
import { SAVE_LABEL } from '../actions'
import { hydrate } from './helpers'

export const REDUCER_KEY = 'labels'
export const initialState = {}

export default function labels(state = initialState, action) {
  let nextState

  switch (action.type) {
    case SAVE_LABEL:
      nextState = {
        ...state,
        [action.label.id]: {
          sheetId: action.sheetId,
          ...action.label
        }
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
