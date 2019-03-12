import React from 'react';
import { Route, Switch } from 'react-router-dom';
// INDEX
// Base Imports
// Reusable Imports
// Assembly Imports


// ---------------- BASE IMPORTS ----------------------
// Social
import Home from '../Assembly/Home';
// import Social from '../Assembly/Social';
import TopBar from '../Layout/TopBar';
import Footer from '../Layout/Footer';
import TermsAndConditions from '../Assembly/Legal';
import NotFound404 from '../shared/components/404/Page';

// --------------- DETAIL PAGE IMPORTS -------------------
import CORPage from '../Assembly/DetailedPage/components/NewsLike/CCPage';
import INFPage from '../Assembly/DetailedPage/components/NewsLike/INFPage';
import Individual from '../Assembly/DetailedPage/components/Individual/Page';
import Organization from '../Assembly/DetailedPage/components/Organization/Page';

// About Page
import About from '../Assembly/AboutUsPage';

// KnowledgeBase
import KnowledgeBase from '../Assembly/KnowledgeBase';
import KnowledgeBaseFeed from '../Assembly/KnowledgeBase/components/Feed';

// Testing Files
import Scratch from './Scratch';
import Map from '../Reusable/Map';


// WrappedRoutes appends the layout navigation with the route components.
const wrappedRoutes = () => (
  <div>
    <TopBar />
    <div className="bg-layout">
      <Switch>
        <Route path="/acerca" component={About} />
        <Route path="/legal" component={TermsAndConditions} />
        <Route path="/mapa" component={Map} />


        {/* Detailed Pages */}
        <Route path="/caso-corrupcion/:id" component={CORPage} />
        <Route path="/individuo/:id" component={Individual} />
        <Route path="/organizacion/:id" component={Organization} />
        <Route path="/noticia/:id" component={INFPage} />

        {/* Knowledge Base */}
        <Route exact path="/conocimiento" component={KnowledgeBase} />
        <Route exact path="/conocimiento/feed" component={KnowledgeBaseFeed} />

        {/* Test Files */}
        <Route path="/a" component={Scratch} />
        <Route path="/map-test" component={Map} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound404} />
      </Switch>
    </div>
    <Footer />
  </div>
);

const Router = () => (
  <Switch>
    <Route path="/" component={wrappedRoutes} />
  </Switch>
);

export default Router;
