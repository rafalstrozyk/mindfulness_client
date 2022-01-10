import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const Routes = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>
  </Switch>
);

export default Routes;
