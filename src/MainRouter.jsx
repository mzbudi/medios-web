import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Component/Main';
import Contact from './Component/Contact';
import Product from './Component/Product';
import Service from './Component/Service';

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
        <Route exact path="/service">
          <Service />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainRouter;
