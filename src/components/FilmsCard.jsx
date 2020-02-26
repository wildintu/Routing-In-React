import React, { Component } from 'react';
import "isomorphic-fetch";
import "es6-promise";

class FilmsCard extends Component {
    render() {
        return(
            <div className="card">
                <h4>{this.props.title}</h4>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default FilmsCard;