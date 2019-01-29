import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/TopBar/components/index';
import Scratch from './Scratch';

// Home Page
import Home from '../Assembly/Home/components/index';

// WrappedRoutes appends the layout navigation with the route components.
const wrappedRoutes = () => (
  <div>
    <Layout />
    <Route exact path="/" component={Home} />
    <Route path="/a" component={Scratch} />
  </div>
);

const Router = () => (
  <Switch>
    <Route path="/" component={wrappedRoutes} />
  </Switch>
);

export default Router;
