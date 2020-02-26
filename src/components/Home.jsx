import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";
import Logo from "../assets/logo.png";

class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <h1>This is Home</h1>
        <img src={Logo} alt="Home" />
      </React.Fragment>
    );
  }
}

export default Home;
