import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/index';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './store/session/api_util';
import { Thunks as SessionThunks } from './store/session/actions';
import { Thunks as UsersThunks } from './store/users/actions';
import Styled from './styled/Styled';
import axios from 'axios';

window.axios = axios;
let store;

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decodedUser = jwt_decode(localStorage.jwtToken);

  const preloadedState = { session: { userId: decodedUser.userId } };
  store = configureStore(preloadedState);

  const currentTime = Date.now() / 1000;
  if (decodedUser.exp < currentTime) {
    store.dispatch(SessionThunks.logout());
    window.location.href = '/login';
  }
} else {
  store = configureStore({});
}

store.dispatch(UsersThunks.fetchUsers())

ReactDOM.render(<Styled><Root store={store} /></Styled>, document.getElementById('root'));

serviceWorker.register();
