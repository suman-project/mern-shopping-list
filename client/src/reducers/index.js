import { combineReducers } from 'redux';
import itremReducer from './itemReducer';

export default combineReducers({
  item: itremReducer
});