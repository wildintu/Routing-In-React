import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";
import PeopleIdCard from "./PeopleIdCard";
import { Link } from "react-router-dom";

class PeopleId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleid: []
    };
  }
  componentDidMount() {
    //console.log(this.props.match)
    fetch(
      `https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`
    )
      .then(response => {
        return response.json();
      })
      .then(obj => {
        this.displayDetails(obj);
        console.log(obj);
      });
  }

  displayDetails(PeopleId) {
    this.setState({
      peopleid: (
        <PeopleIdCard
          name={PeopleId.name}
          id={PeopleId.id}
          gender={PeopleId.gender}
          age={PeopleId.age}
          eye={PeopleId.eye_color}
          hair={PeopleId.hair_color}
          back={<Link to={`/people`}>Go Back To People</Link>}
        />
      )
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>People Details</h1>
        <div>{this.state.peopleid}</div>
      </React.Fragment>
    );
  }
}

export default PeopleId;
