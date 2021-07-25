import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DogsList from './DogsList';
import DogDetails from './DogDetails';

class Routes extends Component {
	render() {
		const getDog = props => {
			const name = props.match.params.name;
			const currentDog = this.props.dogs.find(
				d => d.name.toLowerCase() === name.toLowerCase()
			);
			return <DogDetails dog={currentDog} />;
		};
		return (
			<Switch>
				<Route
					exact
					path='/'
					render={routeProps => (
						<DogsList dogs={this.props.dogs} {...routeProps} />
					)}></Route>
				<Route exact path='/dogs/:name' render={getDog}></Route>
				<Redirect to="/"></Redirect>
			</Switch>
		);
	}
}

export default Routes;
