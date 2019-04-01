import React from 'react';
import { Route, Switch } from 'react-router-dom';

// ---------------- BASE IMPORTS ----------------------
import Home from '../Assembly/Home';
import TopBar from '../Layout/TopBar';
import Footer from '../Layout/Footer';
import TermsAndConditions from '../Assembly/Legal';
import NotFound404 from '../shared/components/404/Page';

// --------------- DETAIL PAGE IMPORTS -------------------
import CorruptionPage from '../Assembly/DetailedPage/components/NewsLike/CCPage';
import InformativeSnippetPage from '../Assembly/DetailedPage/components/NewsLike/INFPage';
import IndividualPage from '../Assembly/DetailedPage/components/Individual/Page';
import OrganizationPage from '../Assembly/DetailedPage/components/Organization/Page';

// About Page
import About from '../Assembly/AboutUsPage';

// KnowledgeBase
import KnowledgeBase from '../Assembly/KnowledgeBase';
import KnowledgeBaseTutorial from '../Assembly/KnowledgeBase/components/Tutorial';


// WrappedRoutes appends the layout navigation with the route components.
const wrappedRoutes = () => (
  <div>
    <TopBar />
    <div className="bg-layout">
      <Switch>
        <Route path="/acerca" component={About} />
        <Route path="/legal" component={TermsAndConditions} />


        {/* Detailed Pages */}
        <Route path="/caso-corrupcion/:id" component={CorruptionPage} />
        <Route path="/individuo/:id" component={IndividualPage} />
        <Route path="/organizacion/:id" component={OrganizationPage} />
        <Route path="/noticia/:id" component={InformativeSnippetPage} />

        {/* Knowledge Base */}
        <Route exact path="/conocimiento" component={KnowledgeBase} />
        <Route exact path="/conocimiento/tutorial/:id" component={KnowledgeBaseTutorial} />

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
