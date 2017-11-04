import API from './api'

export const FORM_UPDATE_VEHICLE = 'FORM_UPDATE_VEHICLE'
export const FORM_SUBMISSION_REQUEST = 'FORM_SUBMISSION_REQUEST'
export const FORM_SUBMISSION_SUCCESS = 'FORM_SUBMISSION_SUCCESS'

export function updateVehicleInForm(sheetIndex, labelIndex, vin) {
  return { type: FORM_UPDATE_VEHICLE, sheetIndex, labelIndex, vin }
}

export function formSubmissionRequest() {
  return { type: FORM_SUBMISSION_REQUEST }
}

export function formSubmissionSuccess(form) {
  return { type: FORM_SUBMISSION_SUCCESS, form }
}

export function submitForm(form) {
  return function (dispatch) {
    dispatch(formSubmissionRequest())
    API.savePrintJob(form).then(data => {
      dispatch(formSubmissionSuccess(data))
      window.print()
    })
  }
}
