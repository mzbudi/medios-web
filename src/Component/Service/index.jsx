import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, AI, Web, Analysis, Desktop, IOT } from './views';

function ServiceRouter({ match }) {
  const { path } = match;
  return (
    <>
      <Switch>
        <Route exact path={`${path}`} component={Main} />
        <Route path={`${path}/ai`} component={AI} />
        <Route path={`${path}/web`} component={Web} />
        <Route path={`${path}/analysis`} component={Analysis} />
        <Route path={`${path}/desktop`} component={Desktop} />
        <Route path={`${path}/iot`} component={IOT} />
      </Switch>
    </>
  );
}

export default ServiceRouter;
