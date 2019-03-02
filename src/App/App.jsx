import React, { Component } from 'react';
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

// TODO Remove all images for frontend testing from public img

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <div>
              <Router />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);
