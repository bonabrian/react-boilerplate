import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GlobalStyle } from 'styles/global-styles';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';

function App() {
  return (
    <Router>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="React Boilerplate" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
