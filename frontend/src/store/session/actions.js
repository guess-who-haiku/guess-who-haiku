import { createActions } from 'reduxsauce'
import * as APIUtil from './api_util';
import jwt_decode from 'jwt-decode';
import { Creators as Users } from 'store/users/actions';

export const { Types, Creators } = createActions({
  receiveCurrentUser: ['userId'],
  logoutUser: null,
}, { prefix: '[SESSION] ' })

export const Thunks = {}

Thunks.signup = user => dispatch => APIUtil.signup(user).then(res => {
  const { token } = res.data;
  localStorage.setItem('jwtToken', token);
  APIUtil.setAuthToken(token);
  const decoded = jwt_decode(token);
  const { _id: userId } = decoded;
  delete decoded.iat;
  delete decoded.exp;
  dispatch(Users.receiveUser(decoded))
  return dispatch(Creators.receiveCurrentUser(userId))
});

Thunks.login = user => dispatch => APIUtil.login(user).then(res => {
  const { token } = res.data;
  localStorage.setItem('jwtToken', token);
  APIUtil.setAuthToken(token);
  const decoded = jwt_decode(token);
  return dispatch(Creators.receiveCurrentUser(decoded._id))
});

Thunks.logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  APIUtil.setAuthToken(false)
  return dispatch(Creators.logoutUser())
};