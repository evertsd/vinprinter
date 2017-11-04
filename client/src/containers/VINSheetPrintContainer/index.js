import { connect } from 'react-redux'
import { DEFAULT_VEHICLES_FORM } from '../../components/VINForm/services/const'
import VINSheetPrinter from '../../components/VINForm/components/VINSheetPrinter'

const mapStateToProps = (state, ownProps) => {
  let sheets = []

  if (state.printVINForm && state.printVINForm.printRequest) {
    sheets = state.printVINForm.printRequest.sheets
  } else {
    sheets = DEFAULT_VEHICLES_FORM.sheets
  }

  return {
    sheets: sheets
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const VINSheetPrintContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VINSheetPrinter)

export default VINSheetPrintContainer
