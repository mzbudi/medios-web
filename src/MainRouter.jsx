import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Main from './Component/Main';
import Contact from './Component/Contact';
import Product from './Component/Product';
import Service from './Component/Service';
import Web from './Component/Services/Web';
import Desktop from './Component/Services/Desktop';
import IOT from './Component/Services/IOT';
import AI from './Component/Services/AI';
import Analysis from './Component/Services/Analysis';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainRouter() {
  return (
    <Router>
      <ScrollToTop />
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
