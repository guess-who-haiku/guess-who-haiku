import { combineReducers } from 'redux';
import session from './session/reducer';
import haikus from './haikus/reducer';
import users from './users/reducer';

const RootReducer = combineReducers({
  session,
  haikus,
  users
});

export default RootReducer;