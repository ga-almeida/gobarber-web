import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SigIn from '../pages/SigIn/index';
import SigUp from '../pages/SigUp/index';
import Dashboard from '../pages/Dashboard/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SigIn} />
    <Route path="/sigup" component={SigUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
