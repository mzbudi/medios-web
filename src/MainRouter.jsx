import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Component/Main';
import Contact from './Component/Contact';
import Product from './Component/Product';
import Project from './Component/Project';

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
        <Route exact path="/project">
          <Project />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainRouter;
