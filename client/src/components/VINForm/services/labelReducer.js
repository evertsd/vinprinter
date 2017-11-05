import uuidv4 from 'uuid/v4'
import { REHYDRATE } from 'redux-persist/constants'
import {
  FORM_UPDATE_LABEL,
} from './actions'
import hydrateState from './const'

export const REDUCER_KEY = 'labels'
export const initialState = {}

export default function formLabelReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_UPDATE_LABEL:
      return {
        ...state,
        [action.label.id]: {
          ...action.label,
          updatedAt: +new Date()
        }
      }
    case REHYDRATE:
      var labels = hydrateState(action.payload, REDUCER_KEY)
      if (labels) return { ...state, ...labels }
      return state
    default:
      return state
  }
}

export const find = (labels, labelPositions, labelIndex) => {
  return labels[labelPositions[labelIndex]];
}

export const create = (attributes = {}) => {
  return {
    id: uuidv4(),
    vin: '',
    ...attributes,
  };
}
