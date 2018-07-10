import uuidv4 from 'uuid/v4'

export const SAVE_LABEL = 'SAVE_LABEL'
export const CREATE_SHEET = 'CREATE_SHEET'

const withId = (object) => ({
  id: uuidv4(), ...object
})

export const saveLabel = (sheetId, labelLocation, label) => ({
  type: SAVE_LABEL, sheetId, labelLocation, label: withId(label)
})

export const createSheet = () => ({
  type: CREATE_SHEET, id: uuidv4()
})
