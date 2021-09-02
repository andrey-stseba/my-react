import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ComponentsPage from './../ComponentsPage';
import HomePage from './../HomePage';
import AboutPage from './../AboutPage';
import NotFound from './../../components/NotFound';
import styles from './PageHeader.module.scss';
import logo from './../../logo.svg';

function PageHeader () {
  return (
    <>
      <Router>
        <ul className={styles.containerPageHeader}>
          <li>
            <Link to={'/'}>
              <img
                title={'Home page'}
                src={logo}
                className={styles.logoHome}
                alt='logo'
              />
            </Link>
          </li>
          <li>
            <Link to={'/components'}>My Components</Link>
          </li>
          <li>
            <Link to={'/about-page'}>About page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={'/'}>
            <HomePage />
          </Route>
          <Route path={'/components'}>
            <ComponentsPage />
          </Route>
          <Route path={'/about-page'}>
            <AboutPage />
          </Route>
          <Route path={'*'} component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default PageHeader;
