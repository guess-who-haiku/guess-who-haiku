import { Types } from "./actions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Types.RECEIVE_USERS:
      const { users } = action;
      return Object.assign({}, state, users);
    case Types.RECEIVE_USER:
      const { user } = action;
      return Object.assign({}, state, { [user._id]: user });
    default:
      return state;
  }
};

export default UsersReducer;
