import { Types } from './actions';

const _initialState = { currentUser: undefined };

const SessionReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Types.RECEIVE_CURRENT_USER:
      const { currentUser } = action;
      return { ...state, currentUser };
    case Types.LOGOUT_USER:
      return _initialState;
    default:
      return state;
  }
}

export default SessionReducer;