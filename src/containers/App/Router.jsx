import React from 'react';
import { Route, Switch } from 'react-router-dom';
// INDEX
// Base Imports
// Reusable Imports
// Assembly Imports


// ---------------- BASE IMPORTS ----------------------
// Home Page
import Home from '../Assembly/Home/components/index';
// Scratch File
import Scratch from './Scratch';
import Layout from '../Layout/TopBar/components/index';

// --------------- REUSABLE IMPORTS -------------------
// TODO FIX FOR PATH
// import CorruptionCaseDetailedPage from '../Reusable/CorruptionCase/components/Page';

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
    <Route path="/a" component={Scratch} />
  </div>
);

const Router = () => (
  <Switch>
    <Route path="/" component={wrappedRoutes} />
  </Switch>
);

export default Router;
