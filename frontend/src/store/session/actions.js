import { createActions } from 'reduxsauce'
import * as APIUtil from './api_util';
import jwt_decode from 'jwt-decode';

export const { Types, Creators } = createActions({
  receiveCurrentUser: ['currentUser', 'id'],
  logoutUser: null,
}, { prefix: '[SESSION] ' })

export const Thunks = {}

Thunks.signup = user => dispatch => APIUtil.signup(user).then(res => {
  const { token } = res.data;
  localStorage.setItem('jwtToken', token);
  APIUtil.setAuthToken(token);
  const decoded = jwt_decode(token);
  return dispatch(Creators.receiveCurrentUser(decoded))
});

Thunks.login = user => dispatch => APIUtil.login(user).then(res => {
  const { token } = res.data;
  localStorage.setItem('jwtToken', token);
  APIUtil.setAuthToken(token);
  const decoded = jwt_decode(token);
  return dispatch(Creators.receiveCurrentUser(decoded))
});

Thunks.logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  APIUtil.setAuthToken(false)
  return dispatch(Creators.logoutUser())
};