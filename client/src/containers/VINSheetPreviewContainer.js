import { connect } from 'react-redux'
import {
  REDUCER_KEY as FORM_REDUCER_KEY
} from '../components/VINForm/services/reducer'

import VINSheetPreview from '../components/VINForm/components/VINSheetPreview'

const mapStateToProps = (state, ownProps) => {
  const {
    sheets, currentSheet
  } = state[FORM_REDUCER_KEY]

  return {
    sheetId: sheets[currentSheet]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const VINSheetPreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VINSheetPreview)

export default VINSheetPreviewContainer
