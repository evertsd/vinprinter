import { connect } from 'react-redux'
import StockTagHeader from 'components/FormHeader'
import {
  submitForm
} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Paste Stock Tags'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPrint: () => {
      dispatch(submitForm())
    }
  }
}

const StockTagHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StockTagHeader)

export default StockTagHeaderContainer
