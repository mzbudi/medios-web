import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Component/Main';
import Contact from './Component/Contact';
import Product from './Component/Product';
import Web from './Component/Services/Web';
import Desktop from './Component/Services/Desktop';
import IOT from './Component/Services/IOT';
import AI from './Component/Services/AI';
import Analysis from './Component/Services/Analysis';

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/service/web">
          <Web />
        </Route>
        <Route exact path="/service/desktop">
          <Desktop />
        </Route>
        <Route exact path="/service/iot">
          <IOT />
        </Route>
        <Route exact path="/service/ai">
          <AI />
        </Route>
        <Route exact path="/service/analysis">
          <Analysis />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainRouter;
