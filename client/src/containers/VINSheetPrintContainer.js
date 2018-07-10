import { connect } from 'react-redux'
import {
  REDUCER_KEY as FORM_REDUCER_KEY
} from '../components/VINForm/services/reducer'
import VINSheetPrinter from '../components/VINForm/components/VINSheetPrinter'

const mapStateToProps = (state, ownProps) => {
  const sheets = state[FORM_REDUCER_KEY].sheets

  return {
    sheets
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const VINSheetPrintContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VINSheetPrinter)

export default VINSheetPrintContainer
