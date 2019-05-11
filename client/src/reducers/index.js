import { combineReducers } from 'redux';
import itremReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  item: itremReducer,
  error: errorReducer,
  auth: authReducer
});