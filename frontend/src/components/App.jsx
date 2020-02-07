import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {ProtectedRoute } from 'util/route_util';

import ModalContainer from './modal/ModalContainer';
import NavbarContainer from './nav/NavbarContainer';
import LandingPage from './landing/LandingPageContainer';
import Scoreboard from './scoreboard/ScoreboardContainer';
import SolveHaiku from './solve_haiku/SolveHaikuContainer';
import HaikusView from './haiku_views/HaikusContainer';
import MyHaikus from './haiku_views/MyHaikus';
const App = () => (
  <>
    <ModalContainer />
    <header>
      <NavbarContainer />
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/scoreboard" component={Scoreboard} />
        <ProtectedRoute exact path="/challenges" component={HaikusView} />
        <ProtectedRoute exact path="/haikus" component={MyHaikus} />
        <Route exact path="/haikus/:haikuId" component={SolveHaiku} />
      </Switch>
    </main>
  </>
);

export default App;