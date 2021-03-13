import React from 'react';

import { Route, Switch } from "react-router-dom";
import UserDetails from '../views/UserDetails';
import Users from '../views/Users';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path='/' component={Users} />
        <Route path='/user/:username+' component={UserDetails} />
    </Switch>
);

export default Routes;