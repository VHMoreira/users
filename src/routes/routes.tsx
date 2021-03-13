import React from 'react';

import { Route, Switch } from "react-router-dom";
import UserDetails from '../pages/UserDetails';
import Users from '../pages/Users';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path='/' component={Users} />
        <Route path='/user/:username+' component={UserDetails} />
    </Switch>
);

export default Routes;