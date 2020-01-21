import { Types } from './actions';

const _initialState = { isAuthenticated: false, user: {} };

const SessionReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Types.RECEIVE_USER_SIGN_IN:
      return { ...state, isSignedIn: true }
    case Types.RECEIVE_CURRENT_USER:
      const { currentUser: user } = action;
      return { ...state, isAuthenticated: Boolean(user), user };
    case Types.LOGOUT_USER:
      debugger;
      return { isAuthenticated: false, user: undefined };
    default:
      return state;
  }
}

export default SessionReducer;