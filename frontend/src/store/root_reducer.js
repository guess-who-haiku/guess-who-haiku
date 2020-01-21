import { combineReducers } from 'redux';
import session from './session/reducer';

const RootReducer = combineReducers({
  session
});

export default RootReducer;