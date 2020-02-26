import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";

class PeopleIdCard extends Component {
  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <p>{this.props.id}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.age}</p>
        <p>{this.props.eye}</p>
        <p>{this.props.hair}</p>
        <p>{this.props.back}</p>
      </div>
    );
  }
}

export default PeopleIdCard;
