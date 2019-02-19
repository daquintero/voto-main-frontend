import React from 'react';
import { Route, Switch } from 'react-router-dom';
// INDEX
// Base Imports
// Reusable Imports
// Assembly Imports


// ---------------- BASE IMPORTS ----------------------
// Home CorruptionCase
import Home from '../Assembly/Home/components/index';
import Layout from '../Layout/TopBar/components/index';

// Testing Files
import Scratch from './Scratch';
import APITestPage from './ApiTestPage';

// --------------- REUSABLE IMPORTS -------------------
// TODO FIX FOR PATH
// import CorruptionCaseDetailedPage from '../Reusable/CorruptionCase/components/CorruptionCase';

// ------------------------- REUSABLE COMPONENTS ----------------------
// TODO FIX THIS so that paths work.
// const Reusable = () => (
//   <>
//     <Route path="/noticias/:id" component={CorruptionCaseDetailedPage}/>
//   </>
// );

// WrappedRoutes appends the layout navigation with the route components.
const wrappedRoutes = () => (
  <div>
    <Layout />
    <Route exact path="/" component={Home} />

    {/* Test Files */}
    <Route path="/a" component={Scratch} />
    <Route path="/api-test" component={APITestPage} />
  </div>
);

const Router = () => (
  <Switch>
    <Route path="/" component={wrappedRoutes} />
  </Switch>
);

export default Router;
