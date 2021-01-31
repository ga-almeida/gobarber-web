import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SigIn from '../pages/SigIn/index';
import SigUp from '../pages/SigUp/index';
import Dashboard from '../pages/Dashboard/index';
import ForgotPassword from '../pages/ForgotPassword/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SigIn} />
    <Route path="/sigup" component={SigUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/forgot-password" component={ForgotPassword} />
  </Switch>
);

export default Routes;
