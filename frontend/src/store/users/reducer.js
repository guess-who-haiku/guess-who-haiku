import { RECEIVE_USERS } from "./actions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return Object.assign({}, action.users);
    default:
      return state;
  }
};

export default UsersReducer;
