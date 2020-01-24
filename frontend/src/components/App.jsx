import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from 'util/route_util';

import ModalContainer from './modal/ModalContainer';
import NavbarContainer from './nav/NavbarContainer';
import LandingPage from './landing/LandingPageContainer';
import LoginFormContainer from './session/LoginFormContainer';
const App = () => (
  <>
    <ModalContainer />
    <header>
      <NavbarContainer />
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
      </Switch>
    </main>
  </>
);

export default App;