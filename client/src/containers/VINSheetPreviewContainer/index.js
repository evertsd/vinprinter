import { connect } from 'react-redux'
import VINSheetPreview from '../../components/VINForm/components/VINSheetPreview'

const mapStateToProps = (state, ownProps) => {
  let sheet = {}

  if (state.printVINForm) {
    sheet = state.printVINForm.sheets[state.printVINForm.currentSheetIndex || 0]
  }

  return {
    sheet: sheet
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const VINSheetPreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VINSheetPreview)

export default VINSheetPreviewContainer
