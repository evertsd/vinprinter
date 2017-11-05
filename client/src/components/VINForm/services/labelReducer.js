import uuidv4 from 'uuid/v4'
import {
  FORM_UPDATE_LABEL,
} from './actions'

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

export const findOrCreateLabel = (labels, labelPositions, labelIndex, attributes) => {
  const label = find(labels, labelPositions, labelIndex);
  console.info('labelReducer.findOrCreateLabel', label)
  if (label) return label

  return create(attributes)
}

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
    default:
      return state
  }
}
