import { combineReducers } from 'redux';
import session from './session/reducer';
import haikus from './haikus/reducer';
import newHaiku from './new_haiku/reducer';
import users from './users/reducer';
import authors from './authors/reducer';
import modal from './modal/reducer';

const RootReducer = combineReducers({
  session,
  haikus,
  newHaiku,
  users,
  authors,
  ui: combineReducers({
    modal
  })
});

export default RootReducer;