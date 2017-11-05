import { connect } from 'react-redux'
import VINSheetPreview from '../../components/VINForm/components/VINSheetPreview'

const mapStateToProps = (state, ownProps) => {
  const {
    sheets, labels, sheetPositions
  } = state.printVINForm

  const sheet = sheets[sheetPositions[state.printVINForm.metadata.currentSheet]]

  return {
    sheet,
    labels
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
