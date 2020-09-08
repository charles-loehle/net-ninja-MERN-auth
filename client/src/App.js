import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './components/layout/NavbarComponent';
import Landing from './components/layout/Landing.js';
import Routes from './components/routing/Routes';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Routes component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
