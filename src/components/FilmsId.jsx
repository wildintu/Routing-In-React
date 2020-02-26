import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";
import FilmsIdCard from "./FilmsIdCard";
import { Link } from "react-router-dom";

class FilmsId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmsid: []
    };
  }
  componentDidMount() {
    //console.log(this.props.match)
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(obj => {
        this.displayDetails(obj);
        //console.log(obj);
      });
  }

  displayDetails(FilmsId) {
    this.setState({
      filmsid: (
        <FilmsIdCard
          title={FilmsId.title}
          id={FilmsId.id}
          desc={FilmsId.description}
          dir={FilmsId.director}
          prod={FilmsId.producer}
          back={<Link to={`/films`}>Go Back To Films</Link>}
        />
      )
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Film Details</h1>
        <div>{this.state.filmsid}</div>
      </React.Fragment>
    );
  }
}

export default FilmsId;
