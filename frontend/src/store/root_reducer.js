import { combineReducers } from 'redux';
import session from './session/reducer';
import haiku from './haiku/reducer';

const RootReducer = combineReducers({
  session,
  haiku
});

export default RootReducer;