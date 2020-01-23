import { combineReducers } from 'redux';
import session from './session/reducer';
import haikus from './haikus/reducer';
import newHaiku from './new_haiku/reducer';
import users from './users/reducer';
import authors from './authors/reducer';

const RootReducer = combineReducers({
  session,
  haikus,
  newHaiku,
  users,
  authors
});

export default RootReducer;