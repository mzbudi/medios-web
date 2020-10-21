import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation, useParams } from 'react-router-dom';
import Main from './Component/Main';
import Contact from './Component/Contact';
import Product from './Component/Product';
import Service from './Component/Service';
import Web from './Component/Services/Web';
import Desktop from './Component/Services/Desktop';
import IOT from './Component/Services/IOT';
import AI from './Component/Services/AI';
import Analysis from './Component/Services/Analysis';
import Project from './Component/Project';
import About from './Component/About';

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
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/service/:id">
          <ServiceRouter />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

function ServiceRouter() {
  const { id } = useParams();

  const idSelector = () => {
    switch (id) {
      case 'web':
        return <Web />;
      case 'desktop':
        return <Desktop />;
      case 'ai':
        return <AI />;
      case 'iot':
        return <IOT />;
      case 'analysis':
        return <Analysis />;
      default:
        return <Service />;
    }
  };

  return idSelector();
}

export default MainRouter;
