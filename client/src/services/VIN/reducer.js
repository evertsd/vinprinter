import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import printVINForm from '../../components/VINForm/services/reducer'

export default combineReducers({
  routing: routerReducer,
  printVINForm
})
