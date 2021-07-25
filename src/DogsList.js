import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogsList.css';

class DogsList extends Component {
	render() {
		const dogs = this.props.dogs.map((d, idx) => (
			<div
				key={idx}
				className='DogsList-dog col m-md-3 mb-4 mb-md-2 ms-lg-5 justify-content-center  p-0'>
				<Link to={`/dogs/${d.name}`}>
					<img className='DogList-img' src={d.src} alt={d.name} />
				
					<div>
						<h2 className="DogsList-name mt-3 sliding-middle-out">{d.name}</h2>
					</div>
				</Link>
			</div>
		));
		return (
			<div className='DogsList w-100 h-100 align-items-center mt-5 mt-lg-0 pt-5 pt-lg-0'>
				<div className='flex-column flex-md-row row'>{dogs}</div>
			</div>
		);
	}
}

export default DogsList;
