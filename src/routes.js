import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '~/pages/Home';
import Work from '~/pages/Work';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/mywork" exact component={Work} />
      <Redirect path="*" to="/" />
    </Switch>
  );
}
