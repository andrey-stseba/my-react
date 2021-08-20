import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import Calendar from './../../components/Calendar';
import Counter from './../../components/Counter';
import Greeting from './../../components/Greeting';
// import LogInForm from './../../components/forms/LogInForm';
// import SignUpForm from './../../components/forms/SignUpForm';
import Stopwatch from './../../components/Stopwatch';
import StopwatchWithTimeout from './../../components/StopwatchWithTimeout';
import NotFound from './../../components/NotFound';
import styles from './ComponentsPage.module.scss';
import UsersListHW from '../../components/UsersListHW';
import LoginFormPage from '../LoginFormPage';
import SignUpPage from '../SignUpFormPage';

function ComponentsPage () {
  const { path, url } = useRouteMatch();
  return (
    <>
      <ul className={styles.containerComponentsPage}>
        <li>
          <Link to={`${url}/calendar`}>Calendar</Link>
        </li>
        <li>
          <Link to={`${url}/counter`}>Counter</Link>
        </li>
        <li>
          <Link to={`${url}/greeting`}>Greeting</Link>
        </li>
        <li>
          <Link to={`${url}/login-form`}>Login Form</Link>
        </li>
        <li>
          <Link to={`${url}/sign-up`}>SignUp Form</Link>
        </li>
        <li>
          <Link to={`${url}/stopwatch`}>Stopwatch</Link>
        </li>
        <li>
          <Link to={`${url}/stopwatch-with-timeout`}>
            Stopwatch With Timeout
          </Link>
        </li>
        <li>
          <Link to={`${url}/user-list-hw`}>User List HW</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/calendar`}>
          <Calendar />
        </Route>
        <Route path={`${path}/counter`}>
          <Counter />
        </Route>
        <Route path={`${path}/greeting`}>
          <Greeting name={`Andrey`} />
        </Route>
        <Route path={`${path}/login-form`}>
          <LoginFormPage />
        </Route>
        <Route path={`${path}/sign-up`}>
          <SignUpPage />
        </Route>
        <Route path={`${path}/stopwatch`}>
          <Stopwatch />
        </Route>
        <Route path={`${path}/stopwatch-with-timeout`}>
          <StopwatchWithTimeout />
        </Route>
        <Route path={`${path}/user-list-hw`}>
          <UsersListHW />
        </Route>
        <Route exact path={path}>
          <h3>Please select a component.</h3>
        </Route>
        <Route path={`${path}/*`} component={NotFound} />
      </Switch>
    </>
  );
}

export default ComponentsPage;
