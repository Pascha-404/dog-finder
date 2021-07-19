import React, { Component } from 'react';

class DogDetails extends Component {
    render() {
		return (
			<div className='DogDetails card w-25'>
				<img src={this.props.dog.src} className='card-img-top' alt={this.props.dog.name} />
				<div className='card-body'>
					<h5 className='card-title'>{this.props.dog.name}</h5>
					<p className='card-text'>is {this.props.dog.age} years old</p>
					<ul className='list-group list-group-flush'>
						{this.props.dog.facts.map((f,idx) => (
							<li key={idx} className='list-group-item'>{f}</li>
						))}
					</ul>
					{/* <a href='#' className='btn btn-primary'>
						Go somewhere
					</a> */}
				</div>
			</div>
		);
	}
}

export default DogDetails;
