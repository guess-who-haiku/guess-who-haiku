import { combineReducers } from 'redux';
import session from './session/reducer';
import haikus from './haikus/reducer';
import users from './users/reducer';
import authors from './authors/reducer';

const RootReducer = combineReducers({
  session,
  haikus,
  users,
  authors
});

export default RootReducer;