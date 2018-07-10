import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import vinFormReducer, {
  REDUCER_KEY as VIN_FORM_REDUCER_KEY,
  initialState as initialVINFormState
} from './components/VINForm/services/reducer'
import stFormReducer, {
  REDUCER_KEY as ST_FORM_REDUCER_KEY,
  initialState as initialSTFormState
} from './components/StockTagForm/reducer'
import averyReducer, {
  REDUCER_KEY as AVERY_REDUCER_KEY,
  initialState as initialAveryState
} from './Avery/reducers'

export const initialState = {
  [AVERY_REDUCER_KEY]: initialAveryState,
  [VIN_FORM_REDUCER_KEY]: initialVINFormState,
  [ST_FORM_REDUCER_KEY]: initialSTFormState
}

export default combineReducers({
  routing: routerReducer,
  [AVERY_REDUCER_KEY]: averyReducer,
  [VIN_FORM_REDUCER_KEY]: vinFormReducer,
  [ST_FORM_REDUCER_KEY]: stFormReducer
})
