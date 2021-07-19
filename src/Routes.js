import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import DogsList from './DogsList';
import DogDetails from './DogDetails';

class Routes extends Component{
    render() {
        return (
					<Switch>
						<Route
							exact
							path='/'
							render={() => <DogsList dogs={this.props.dogs} />}></Route>
						<Route
							exact
							path='/dogs/:name'
							render={routeProps => (
								<DogDetails {...routeProps} dogs={this.props.dogs} />
							)}></Route>
						<Route render={() => <h1>Something went wrong!</h1>}></Route>
					</Switch>
				);
    }
}

export default Routes;