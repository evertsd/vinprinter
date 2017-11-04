import { connect } from 'react-redux'
import {
  submitForm
} from '../../services/actions'
import VINFormHeader from '../../components/VINFormHeader'

const mapStateToProps = (state, ownProps) => {
  return {
    form: state.printVINForm
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitForm: (form) => {
      dispatch(submitForm(form))
    }
  }
}

const VINFormHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VINFormHeader)

export default VINFormHeaderContainer
