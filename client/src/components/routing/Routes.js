import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
//import Alert from '../layout/Alert';
import PrivateRoute from './PrivateRoute';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <section className="container mt-4">
      {/* <Alert /> */}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
