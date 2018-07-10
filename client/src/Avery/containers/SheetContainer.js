import { connect } from 'react-redux'
import {
  REDUCER_KEY as AVERY_REDUCER_KEY,
  LABEL_REDUCER_KEY, SHEET_REDUCER_KEY
} from '../reducers'
import Sheet from '../components/Sheet'

const getSheet = (state, sheetId) => (
  state[AVERY_REDUCER_KEY][SHEET_REDUCER_KEY][sheetId]
)

const mapStateToProps = (state, ownProps) => {
  const sheet = getSheet(state, ownProps.sheetId)
  const labels = state[AVERY_REDUCER_KEY][LABEL_REDUCER_KEY]

  return {
    sheet, labels,
    preview: ownProps.preview,
    labelTypeToComponent: ownProps.labelTypeToComponent
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const SheetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sheet)

export default SheetContainer
