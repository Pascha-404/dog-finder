import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import DogsList from './DogsList';
import DogDetails from './DogDetails';

class Routes extends Component{
    render() {
		const getDog = props => {
			const name = props.match.params.name
			const currentDog = this.props.dogs.find(d => d.name.toLowerCase() === name.toLowerCase())
			return <DogDetails dog={currentDog} />
		}
        return (
					<Switch>
						<Route
							exact
							path='/'
							render={(routeProps) => <DogsList dogs={this.props.dogs} {...routeProps} />}></Route>
						<Route
					exact
					path='/dogs/:name'
					render={getDog}></Route>
						<Route render={() => <h1>Something went wrong!</h1>}></Route>
					</Switch>
				);
    }
}

export default Routes;