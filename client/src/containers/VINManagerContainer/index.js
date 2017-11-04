import { connect } from 'react-redux'
import {
  updateVehicleInForm
} from '../../components/VINForm/services/actions'
import VINManager from '../../components/VINForm/components/VINManager'

const mapStateToProps = (state, ownProps) => {
  console.info('mapStateToProps.vehiclesForm', state)
  return {
    vehiclesForm: state.printVINForm
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateVehicle: (sheetIndex, labelIndex, vin) => {
      dispatch(updateVehicleInForm(sheetIndex, labelIndex, vin))
    }
  }
}

const VINManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VINManager)

export default VINManagerContainer
