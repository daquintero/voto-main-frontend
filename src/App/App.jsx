import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // redux-component
import 'mapbox-gl/dist/mapbox-gl.css';
import 'bootstrap/dist/css/bootstrap.css';

// ---- LOCAL ------
import store from './store'; // redux
import '../app.scss';
import Router from './Router';
import ScrollToTop from './ScrollToTop';

// TODO Remove all images for frontend testing from public img


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <div>
          <div>
            <Router />
          </div>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
);

export default hot(module)(App);
