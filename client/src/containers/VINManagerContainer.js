import { connect } from 'react-redux'
import {
  REDUCER_KEY as FORM_REDUCER_KEY
} from '../components/VINForm/services/reducer'
import {
  REDUCER_KEY as AVERY_REDUCER_KEY,
  LABEL_REDUCER_KEY, SHEET_REDUCER_KEY
} from '../Avery/reducers'
import {
  saveLabel
} from '../Avery/actions'
import VINManager from '../components/VINForm/components/VINManager'

const mapStateToProps = (state, ownProps) => {
  const form = state[FORM_REDUCER_KEY]
  const sheets = (form.sheets || []).map(sheetId => (
    state[AVERY_REDUCER_KEY][SHEET_REDUCER_KEY][sheetId]
  ))
  const labels = state[AVERY_REDUCER_KEY][LABEL_REDUCER_KEY]

  return {
    ...form, sheets, labels
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateVehicle: (sheetId, labelIndex, label) => {
      dispatch(saveLabel(sheetId, labelIndex, label))
    }
  }
}

const VINManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VINManager)

export default VINManagerContainer
