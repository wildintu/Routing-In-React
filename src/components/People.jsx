import React, { Component } from 'react';
import "isomorphic-fetch";
import "es6-promise";
import PeopleCard from './PeopleCard';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }
    
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then((response) => {
                return response.json();
            })
            .then((obj) => {
                //console.log(obj);
                this.displayPeople(obj);
            });

    }

    displayPeople(obj) {
        obj.forEach(People => {
            this.setState({
                people: [...this.state.people,<PeopleCard key={this.state.people.length} name={People.name} gender={People.gender} />]
            })     
        })
        }

    render() {
        return(
            <React.Fragment>
                <h1>This is People</h1>
                <div>{this.state.people}</div>
            </React.Fragment>
        )
    }
}

export default People;