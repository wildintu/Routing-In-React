import React, { Component, Fragment } from "react";
import "isomorphic-fetch";
import "es6-promise";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Films from "./Films";
import People from "./People";
// import Logo from '../assets/logo.png';

class App extends Component {
//   constructor(props) {
//     super(props);
//   }

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
            <Route exact path="/people" component={People} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
