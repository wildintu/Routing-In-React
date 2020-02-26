import React, { Component, Fragment } from "react";
import "isomorphic-fetch";
import "es6-promise";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Films from "./Films";
import FilmsId from "./FilmsId"
import People from "./People";
// import Logo from '../assets/logo.png';

class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <Link to="/">Go Home</Link>
          <Link to="/films">View Films</Link>
          <Link to="/people">View People</Link>
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/films" component={Films} />
            <Route exact path="/films/:id" component={FilmsId} />
            <Route exact path="/people" component={People} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
