import { connect } from 'react-redux'
import {
  addSheet
} from '../../components/VINForm/services/actions'
import App from '../../App'

const mapStateToProps = state => ({
  sheets: state.printVINForm.sheets
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addSheet: (sheetIndex, sheetId) => (
    dispatch(addSheet(sheetIndex, sheetId))
  )
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
