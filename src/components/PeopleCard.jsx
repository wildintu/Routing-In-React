import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";

class PeopleCard extends Component {
  render() {
    return (
      <div className="card">
        <h4>{this.props.name}</h4>
        <p>{this.props.gender}</p>
        <p>{this.props.details}</p>
      </div>
    );
  }
}

export default PeopleCard;
