import { createActions } from 'reduxsauce'
import * as APIUtil from './api_util';

export const { Types, Creators } = createActions({
  receiveUsers: ['users'],
}, { prefix: '[USERS] ' })


export const Thunks = {};
Thunks.fetchUsers = () => dispatch => {
  APIUtil.getUsers()
    .then(({data: users}) => dispatch(Creators.receiveUsers(users)))
    .catch(err => console.log(err));
}