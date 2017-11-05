import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import printVINForm, { initialFromState } from '../../components/VINForm/services/reducer'

export const initialState = {
  printVINForm: initialFromState
}

export default combineReducers({
  routing: routerReducer,
  printVINForm
})
