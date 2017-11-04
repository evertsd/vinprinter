import { REHYDRATE } from 'redux-persist/constants'
import {
  DEFAULT_SHEET_LABLES,
  DEFAULT_VEHICLES_FORM
} from './const'
import {
  FORM_ADD_VEHICLE,
  FORM_UPDATE_VEHICLE,
  FORM_SUBMISSION_REQUEST,
  FORM_SUBMISSION_SUCCESS,
} from './actions'
import immutableUpdate from '../../../lib/array'

export const initialState = {
  ...DEFAULT_VEHICLES_FORM,
}

const _updateLabels = function(sheetLabels, labelIndex, vehicle) {
  return {
    ...DEFAULT_SHEET_LABLES,
    ...sheetLabels,
    [labelIndex]: {
      ...sheetLabels[labelIndex],
      ...vehicle
    }
  }
}

const _updateSheet = function(vehiclesForm, sheetIndex, labelIndex, vehicle) {
  let newForm = vehiclesForm || DEFAULT_VEHICLES_FORM

  if (sheetIndex > newForm.sheets.length) {
    sheetIndex = 0
  }

  let sheet = newForm.sheets[sheetIndex]

  return {
    ...newForm,
    sheets: immutableUpdate(newForm.sheets, sheetIndex, {
      ...sheet,
      labels: _updateLabels(sheet.labels, labelIndex, vehicle)
    })
  }
}

export default function printVINForm(state = initialState, action) {
  switch (action.type) {
    case FORM_UPDATE_VEHICLE:
      return _updateSheet(state, action.sheetIndex, action.labelIndex, {
        updatedAt: +new Date(),
        vin: action.vin
      })
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
