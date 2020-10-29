import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
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

function MainRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<BounceLoader />}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/contact" component={Contact} />
          <Route path="/product" component={Product} />
          <Route path="/service" component={ServiceRouter} />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

// function ServiceRouter() {
//   const { id } = useParams();
//
//   const idSelector = () => {
//     switch (id) {
//       case 'web':
//         return <Web />;
//       case 'desktop':
//         return <Desktop />;
//       case 'ai':
//         return <AI />;
//       case 'iot':
//         return <IOT />;
//       case 'analysis':
//         return <Analysis />;
//       default:
//         return <Service />;
//     }
//   };
//
//   return idSelector();
// }

export default MainRouter;
