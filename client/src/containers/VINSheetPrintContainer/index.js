import { connect } from 'react-redux'
import VINSheetPrinter from '../../components/VINForm/components/VINSheetPrinter'

const mapStateToProps = (state, ownProps) => {
  const {
    sheets, sheetPositions, labels
  } = state.printVINForm;

  const orderedSheets = sheetPositions.map(sheetId => sheets[sheetId])

  return {
    sheets: orderedSheets,
    labels,
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
