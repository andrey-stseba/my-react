import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ComponentsPage from "./../ComponentsPage";
import HomePage from "./../HomePage";
import AboutPage from "./../AboutPage";

function PageHeader() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/components"}>My Components</Link>
          </li>
          <li>
            <Link to={"/about-page"}>AboutPage</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={"/"}>
            <HomePage />
          </Route>
          <Route path={"/components"}>
            <ComponentsPage />
          </Route>
          <Route path={"/about-page"}>
            <AboutPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default PageHeader;
