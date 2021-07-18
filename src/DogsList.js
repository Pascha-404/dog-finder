import React, { Component } from 'react'
import "./DogsList.css"

class DogsList extends Component {
    render() {
        const dogs = this.props.dogs.map((d, idx) => (
					<div key={idx} className='DogsList-dog col m-md-3 mb-4 mb-md-2 ms-lg-5 d-flex flex-column justify-content-center align-items-center p-0'>
						<img className='DogList-img' src={d.src} alt={d.name} />
						<h2>{d.name}</h2>
					</div>
				));
        return (
            <div className="DogsList w-100 h-100 container d-flex align-items-center justify-content-center mt-5 mt-lg-0 pt-5 pt-lg-0">
                <div className="flex-column flex-md-row row">
                    {dogs}
                </div>
            </div>
        )
    }
}

export default DogsList;