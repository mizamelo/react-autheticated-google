import React from 'react';

import { Switch } from 'react-router-dom';

import Private from './private';
import Guest from './guest';

import Main from '../pages/Main';
import Signup from '../pages/Auth/Signup';
import Signin from '../pages/Auth/Signin';

const Routes = () => (
  <Switch>
    <Private path="/" exact component={Main} />
    <Guest path="/signin" component={Signin} />
    <Guest path="/signup" component={Signup} />
  </Switch>
);

export default Routes;
