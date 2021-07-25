import React, { Component } from 'react';
import "./DogDetails.css"

class DogDetails extends Component {
    render() {
		return (
			<div className='DogDetails'>
				<div className="row justify-content-center">
					<div className="col-11  col-sm-9 col-md-7 col-lg-5 mt-5">
						<div className="card">
							<img src={this.props.dog.src} className='DogDetails-img card-img-top' alt={this.props.dog.name} />
							<div className='card-body'>
								<h5 className='card-title'>{this.props.dog.name}</h5>
								<p className='card-text'>is {this.props.dog.age} years old</p>
								<ul className='list-group list-group-flush'>
									{this.props.dog.facts.map((f,idx) => (
										<li key={idx} className='list-group-item'>{f}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DogDetails;
