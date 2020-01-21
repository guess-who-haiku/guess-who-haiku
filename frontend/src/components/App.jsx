import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from 'util/route_util';

import NavbarContainer from './nav/NavbarContainer';

import LandingPage from './landing/LandingPage';
import SignupFormContainer from './session/SignupFormContainer';
import LoginFormContainer from './session/LoginFormContainer';
import DashboardContainer from './dashboard/DashboardContainer';

const App = () => (
  <div>
    <NavbarContainer />
    <Switch>
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
      <AuthRoute exact path="/" component={LandingPage} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
    </Switch>
  </div>
);

export default App;