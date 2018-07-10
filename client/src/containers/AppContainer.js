import { connect } from 'react-redux'
import {
  REDUCER_KEY as AVERY_REDUCER_KEY,
  SHEET_REDUCER_KEY
} from '../Avery/reducers'
import {
  createSheet
} from '../Avery/actions'
import App from '../App'

const mapStateToProps = state => ({
  sheets: state[AVERY_REDUCER_KEY][SHEET_REDUCER_KEY]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addSheet: (sheetIndex, sheetId) => {
    //dispatch(addSheet(sheetIndex, sheetId))
    dispatch(createSheet())
  }
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
