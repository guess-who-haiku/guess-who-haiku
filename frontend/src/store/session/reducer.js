import { Types } from './actions';

const _initialState = { userId: undefined };

const SessionReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Types.RECEIVE_CURRENT_USER:
      const { userId } = action;
      return { userId };
    case Types.LOGOUT_USER:
      return _initialState;
    default:
      return state;
  }
}

export default SessionReducer;