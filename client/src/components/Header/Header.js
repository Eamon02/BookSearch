import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<nav className='navbar navbar-dark bg-dark'>
				<div className='container'>
					<NavLink exact to='/' className='navbar-brand'>
						<i className='fas fa-book'></i> Google Book Search
					</NavLink>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<NavLink to='/Search' className='nav-link'>
									<i className='fas fa-search'></i> Search
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink to='/Favorites' className='nav-link'>
									{' '}
									<i className='fas fa-bookmark'></i>{' '}
									Favorites{' '}
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
