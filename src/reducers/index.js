import { combineReducers } from 'redux';
import { CarReducer } from './CarReducer';
// import { carReducer } from './carReducer';

export default combineReducers({
  carState: CarReducer,
  // car: carReducer
});