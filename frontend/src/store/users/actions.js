import { getUsers } from "./api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const fetchUsers = () => dispatch =>
  getUsers()
    .then(users => dispatch(receiveUsers(users)))
    .catch(err => console.log(err));