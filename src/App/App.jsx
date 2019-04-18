// Absolute Imports
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // redux-component
import Breakpoints from 'react-breakpoints';

// Styles
import 'mapbox-gl/dist/mapbox-gl.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../app.scss';

// Redux
import store from './store';

// Components
import Router from './Router';
import ScrollToTop from './ScrollToTop';


const breakpoints = {
  mobile: 576,
  desktop: 762,
};


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <Breakpoints breakpoints={breakpoints}>
          <Router />
        </Breakpoints>
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
);

export default hot(module)(App);
