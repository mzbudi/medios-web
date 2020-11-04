import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import './mainStyles.css';
import Header from './Component/Header';
import Footer from './Component/Footer';

const Main = lazy(() => import('./Component/Main'));
const Contact = lazy(() => import('./Component/Contact'));
const Product = lazy(() => import('./Component/Product'));
const ServiceRouter = lazy(() => import('./Component/Service'));
const Project = lazy(() => import('./Component/Project'));
const About = lazy(() => import('./Component/About'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Loading = () => (
  <div className="loading">
    <BounceLoader size={150} loading color="#29AE6D" />
  </div>
);

function MainRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/product" component={Product} />
          <Route path="/service" component={ServiceRouter} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default MainRouter;
