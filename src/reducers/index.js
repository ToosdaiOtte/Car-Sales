import { combineReducers } from 'redux';
import { featuresReducer } from './featuresReducer';
import { carReducer } from './carReducer';

export default combineReducers({
  feature: featuresReducer,
  car: carReducer
});