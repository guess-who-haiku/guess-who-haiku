import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import {ProtectedRoute } from 'util/route_util';

import ModalContainer from './modal/ModalContainer';
import Navbar from './nav/Navbar';
import Footer from './footer/Footer';
import LoadingSpinner from './haiku_views/LoadingSpinner';

import LandingPage from './landing/LandingPageContainer';
const Scoreboard = lazy(() => import('./scoreboard/ScoreboardContainer'));
const SolveHaiku = lazy(() => import('./solve_haiku/SolveHaikuContainer'));
const MyHaikus = lazy(() => import('./haiku_views/MyHaikus'));
const MyChallenges = lazy(() => import('./haiku_views/MyChallenges'));
const About = lazy(() => import('./about/About'));


const App = () => (
  <>
    <ModalContainer />
    <Navbar />
    <main>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/scoreboard" component={Scoreboard} />
          <ProtectedRoute exact path="/challenges" component={MyChallenges} />
          <ProtectedRoute exact path="/haikus" component={MyHaikus} />
          <Route exact path="/haikus/:haikuId" component={SolveHaiku} />
        </Switch>
      </Suspense>
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default App;