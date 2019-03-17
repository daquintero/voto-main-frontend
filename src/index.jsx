// Absolute Imports
import React from 'react';
import { render } from 'react-dom';
import * as Sentry from '@sentry/browser';

// Components
import App from './App/App';


const {
  REACT_APP_USE_SENTRY: sentry,
  REACT_APP_SENTRY_DSN: dsn,
  REACT_APP_SENTRY_ENVIRONMENT: environment,
} = process.env;

if (sentry !== 'false') {
  Sentry.init({
    dsn,
    environment,
  });
}

render(
  <App />,
  document.getElementById('root'),
);
