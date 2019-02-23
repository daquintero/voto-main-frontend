import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // redux-component
import store from './store'; // redux
import '../app.scss';
import Router from './Router';

// TODO Remove all images for frontend testing from public img

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      loaded: false,
    };
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState({ loading: false });
      setTimeout(() => this.setState({ loaded: true }), 500);
    });
  }

  render() {
    const { loaded, loading } = this.state;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            {!loaded &&
            <div className={`load${loading ? '' : ' loaded'}`}>
              <div className="load__icon-wrap">
                <svg className="load__icon">
                  <path fill="red" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                </svg>
              </div>
            </div>
              }
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
