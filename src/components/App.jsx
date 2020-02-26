import React, { Component, Fragment } from "react";
import "isomorphic-fetch";
import "es6-promise";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Films from "./Films";
import FilmsId from "./FilmsId";
import People from "./People";
import PeopleId from "./PeopleId";


class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="navbar navbar-expand-lg navbar-light sticky-top bg-dark">
          <Link to="/" className="btn btn-success">Go Home</Link> 
          <Link to="/films" className="btn btn-danger">View Films</Link>
          <Link to="/people" className="btn btn-primary">View People</Link>
          </div>
          <Switch>
            <Route exact path="/films" component={Films} />
            <Route exact path="/films/:id" component={FilmsId} />
            <Route exact path="/people" component={People} />
            <Route exact path="/people/:id" component={PeopleId} />
            <Route path="/" component={Home} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
