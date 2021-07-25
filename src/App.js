import React, { Component } from 'react';
import './App.css';
import Navbar from "./Navbar"
import Routes from "./Routes"

class App extends Component {
	static defaultProps = {
		dogs: [
			{
				name: 'Whiskey',
				age: 5,
				src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
				facts: [
					'Whiskey loves eating popcorn.',
					'Whiskey is a terrible guard dog.',
					'Whiskey wants to cuddle with you!',
				],
			},
			{
				name: 'Hazel',
				age: 3,
				src: 'https://images.unsplash.com/photo-1518378188025-22bd89516ee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
				facts: [
					'Hazel has soooo much energy!',
					'Hazel is highly intelligent.',
					'Hazel loves people more than dogs.',
				],
			},
			{
				name: 'Tubby',
				age: 4,
				src: 'https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
				facts: [
					'Tubby is not the brightest dog',
					'Tubby does not like walks or exercise.',
					'Tubby loves eating food.',
				],
			},
		],
	};

	render() {
    return <div className='App'>
      <Navbar dogs={this.props.dogs} />
      
		<div className="container">
			<Routes dogs={this.props.dogs}/>
		</div>
    </div>;
	}
}

export default App;
