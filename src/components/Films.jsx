import React, { Component } from 'react';
import "isomorphic-fetch";
import "es6-promise";
import FilmsCard from './FilmsCard';

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((response) => {
                return response.json();
            })
            .then((obj) => {
                //console.log(obj);
                this.displayFilms(obj);

            });
        
                         

    }

    displayFilms(obj) {
        obj.forEach(Films => {
            this.setState({
                films: [...this.state.films,<FilmsCard key={this.state.films.length} title={Films.title} desc={Films.description} />]
            })     
        })
        }

    render() {
        return(
            <React.Fragment>

                <h1>This is Films</h1>
                <div>{this.state.films}</div>

            </React.Fragment>
        )
    }
}

export default Films;