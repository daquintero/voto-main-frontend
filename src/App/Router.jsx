import React from 'react';
import { Route, Switch } from 'react-router-dom';
// INDEX
// Base Imports
// Reusable Imports
// Assembly Imports


// ---------------- BASE IMPORTS ----------------------
// Home

import Home from '../Assembly/Home';
import Layout from '../Layout/TopBar';

// --------------- DETAIL PAGE IMPORTS -------------------
import CORPage from '../Assembly/DetailedPage/components/NewsLike/CCPage';
import INFPage from '../Assembly/DetailedPage/components/NewsLike/INFPage';
import Individual from '../Assembly/DetailedPage/components/Individual/Page';
import Organization from '../Assembly/DetailedPage/components/Organization/Page';

// About Page
import About from '../Assembly/AboutUsPage/components/Page';

// Testing Files
import Scratch from './Scratch';
import Map from '../Reusable/Map';

// WrappedRoutes appends the layout navigation with the route components.
const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="bg-layout">
      <Route exact path="/" component={Home} />
      <Route path="/acerca" component={About} />


      {/* Detailed Pages */}
      <Route path="/caso-corrupcion/:id" component={CORPage} />
      <Route path="/individuo/:id" component={Individual} />
      <Route path="/organizacion/:id" component={Organization} />
      <Route path="/noticia/:id" component={INFPage} />

      {/* Test Files */}
      <Route path="/a" component={Scratch} />
      <Route path="/map-test" component={Map} />
    </div>
  </div>
);

const Router = () => (
  <Switch>
    <Route path="/" component={wrappedRoutes} />
  </Switch>
);

export default Router;
