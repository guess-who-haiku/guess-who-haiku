import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/index';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './store/session/api_util';
import { Thunks as Session } from './store/session/actions';
import { Thunks as Users } from './store/users/actions';
import { Thunks as Authors } from './store/authors/actions';
import Styled from './styled/Styled';
import axios from 'axios';

window.axios = axios;
let store;

if (localStorage.jwtToken) {

  setAuthToken(localStorage.jwtToken);
  const decodedUser = jwt_decode(localStorage.jwtToken);

  const preloadedState = { session: { userId: decodedUser._id } };
  store = configureStore(preloadedState);

  const currentTime = Date.now() / 1000;
  if (decodedUser.exp < currentTime) {
    store.dispatch(Session.logout());
    window.location.href = '/';
  }
} else {
  store = configureStore({});
}

store.dispatch(Users.fetchUsers())
store.dispatch(Authors.fetchAuthors())

ReactDOM.render(<Styled><Root store={store} /></Styled>, document.getElementById('root'));

serviceWorker.register();
