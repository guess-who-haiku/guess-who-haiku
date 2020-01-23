import { Types } from "./actions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Types.RECEIVE_USERS:
      const { users } = action;
      return Object.assign({}, state, users);
    default:
      return state;
  }
};

export default UsersReducer;
