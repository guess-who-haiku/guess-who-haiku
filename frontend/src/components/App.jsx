import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {ProtectedRoute } from 'util/route_util';

import ModalContainer from './modal/ModalContainer';
import NavbarContainer from './nav/NavbarContainer';
import LandingPage from './landing/LandingPageContainer';
import Scoreboard from './scoreboard/ScoreboardContainer';
import SolveHaiku from './solve_haiku/SolveHaikuContainer';

import MyHaikus from './haiku_views/MyHaikus';
import MyChallenges from './haiku_views/MyChallenges';
import About from './about/About';
<<<<<<< HEAD
import Footer from './footer/Footer';
=======
>>>>>>> edf21087d2f9c7db4ac87db06dea7d1822f69277

const App = () => (
  <>
    <ModalContainer />
    <header>
      <NavbarContainer />
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/scoreboard" component={Scoreboard} />
        <ProtectedRoute exact path="/challenges" component={MyChallenges} />
        <ProtectedRoute exact path="/haikus" component={MyHaikus} />
        <Route exact path="/haikus/:haikuId" component={SolveHaiku} />
      </Switch>
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default App;