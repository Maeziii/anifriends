import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
import { robots } from "./robots";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    /*
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
                   
    }*/

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if(this.state.robots.length === 0) {
            return <h1 className="tc">Loading</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f-headline">AniFriends</h1>
                    <SearchBox searchChange={ this.onSearchChange }/>
                    <CardList robots={ filteredRobots }/>
                </div>
            ); 
        }  
    }
}

export default App;