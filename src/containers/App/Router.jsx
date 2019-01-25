import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout';

const wrappedRoutes = () => (
  <div>
    <Route exact path="/" component={Layout} />
  </div>
);

const Router = () => (
  <Switch>
    <Route path="/" component={wrappedRoutes} />
  </Switch>
);

export default Router;
