import React from 'react';

import { Route, Switch } from "react-router-dom";
import Users from '../views/Users';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' component={Users} />
    </Switch>
);

export default Routes;