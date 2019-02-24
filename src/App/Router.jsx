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
import CorruptionCase from '../Assembly/DetailedPage/components/CorruptionCase/Page';
import Individual from '../Assembly/DetailedPage/components/Individual/Page';
import InformativeSnippet from '../Assembly/DetailedPage/components/InformativeSnippet/Page';

// About Page
import About from '../Assembly/AboutUsPage/components/Page';

// Testing Files
import Scratch from './Scratch';
import APITestPage from './ApiTestPage';
import Map from '../Reusable/Map';

// WrappedRoutes appends the layout navigation with the route components.
const wrappedRoutes = () => (
  <div>
    <Layout />
    <Route exact path="/" component={Home} />
    <Route path="/acerca" component={About} />


    {/* Detailed Pages */}
    <Route path="/caso-corrupcion/:id" component={CorruptionCase} />
    <Route path="/individuo/:id" component={Individual} />
    <Route path="/noticia/:id" component={InformativeSnippet} />

    {/* Test Files */}
    <Route path="/a" component={Scratch} />
    <Route path="/api-test" component={APITestPage} />
    <Route path="/map-test" component={Map} />
  </div>
);

const Router = () => (
  <Switch>
    <Route path="/" component={wrappedRoutes} />
  </Switch>
);

export default Router;
