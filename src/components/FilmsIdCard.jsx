import React, { Component } from 'react';
import "isomorphic-fetch";
import "es6-promise";

class FilmsIdCard extends Component {
    render() {
        return(
            <div className="card">
                <h2>{this.props.title}</h2>
                <p>{this.props.id}</p>
                <p>{this.props.desc}</p>
                <p>{this.props.dir}</p>
                <p>{this.props.prod}</p>
                <p>{this.props.back}</p>
            </div>
        )
    }
}

export default FilmsIdCard;