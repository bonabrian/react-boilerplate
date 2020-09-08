/**
 * index.js
 *
 * This is entry file for the application.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { HelmetProvider } from 'react-helmet-async';

const MOUNT_NODE = document.getElementById('root');

/* Root component */
const RootApp = ({ Component }) => (
  <HelmetProvider>
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  </HelmetProvider>
);

const render = (Component) => {
  ReactDOM.render(<RootApp Component={Component} />, MOUNT_NODE);
};

if (module.hot) {
  module.hot.accept(['./App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    const App = require('./App').default;
    render(App);
  });
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
