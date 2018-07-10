import { connect } from 'react-redux'
import {
  submitForm
} from '../services/actions'
import VINFormHeader from '../../FormHeader'

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Enter VINs'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPrint: () => {
      dispatch(submitForm())
    }
  }
}

const VINFormHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VINFormHeader)

export default VINFormHeaderContainer
