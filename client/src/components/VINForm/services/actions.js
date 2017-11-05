import API from './api'

export const FORM_UPDATE_LABEL = 'FORM_UPDATE_LABEL'
export const FORM_SUBMISSION_REQUEST = 'FORM_SUBMISSION_REQUEST'
export const FORM_SUBMISSION_SUCCESS = 'FORM_SUBMISSION_SUCCESS'
export const FORM_ADD_SHEET = 'FORM_ADD_SHEET'
export const FORM_REMOVE_SHEET = 'FORM_REMOVE_SHEET'

export function addSheet(sheetIndex, sheetId) {
  return { type: FORM_ADD_SHEET, sheetIndex, sheetId }
}

export function updateSheetLabel(sheetId, labelIndex, label) {
  return { type: FORM_UPDATE_LABEL, sheetId, labelIndex, label }
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
