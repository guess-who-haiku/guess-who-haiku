import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/index';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './store/session/api_util';
import { Thunks } from './store/session/actions';
import Styled from './styled/Styled';

let store;

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decodedUser = jwt_decode(localStorage.jwtToken);

  const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
  store = configureStore(preloadedState);

  const currentTime = Date.now() / 1000;
  if (decodedUser.exp < currentTime) {
    store.dispatch(Thunks.logout());
    window.location.href = '/login';
  }
} else {
  store = configureStore({});
}

ReactDOM.render(<Styled><Root store={store} /></Styled>, document.getElementById('root'));

serviceWorker.register();
