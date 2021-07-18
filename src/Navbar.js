import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
	render() {
		const dogs = this.props.dogs;
		const dogLinks = dogs.map((d, idx) => {
			const to = `/dogs/${d.name}`;
			return (
                <NavLink key={idx} exact activeClassName='active' className='nav-link' to={to}>
					{d.name}
				</NavLink>
			);
		});
		return (
			<nav className='navbar navbar-expand-md navbar-dark bg-dark position-fixed w-100 top-0 start-0'>
				<div className='container-fluid'>
					<NavLink exact activeClassName='active' className='navbar-brand' to='/'>
						Dog Shelter
					</NavLink>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
						<div className='navbar-nav'>
                            <NavLink
                                exact
								activeClassName='active'
								className='nav-link'
								to='/'>
								Home
							</NavLink>

							{dogLinks}
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
