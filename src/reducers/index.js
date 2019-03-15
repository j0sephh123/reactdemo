import { combineReducers } from 'redux';
import heroes from './heroes';
import modal from './modal';

export default combineReducers({
  heroes,
  modal,
});