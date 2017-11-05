import { connect } from 'react-redux'
import {
  updateSheetLabel
} from '../../components/VINForm/services/actions'
import VINManager from '../../components/VINForm/components/VINManager'

const mapStateToProps = (state, ownProps) => {
  console.info('VINManagerContainer.mapStateToProps', state)
  const {
    sheets,
    labels,
    sheetPositions,
    metadata
  } = state.printVINForm

  return {
    sheets,
    labels,
    sheetPositions,
    ...metadata,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateVehicle: (sheetId, labelIndex, label) => {
      dispatch(updateSheetLabel(sheetId, labelIndex, label))
    }
  }
}

const VINManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VINManager)

export default VINManagerContainer
