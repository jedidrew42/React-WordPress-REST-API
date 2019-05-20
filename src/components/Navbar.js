import React from 'react';
import { Link } from "@reach/router";
import NavLink from './NavLink';
import { isLoggedIn, getUserName } from "./functions";

class Navbar extends React.Component {

	constructor( props ) {
		super( props );
	}

	handleLogout = () => {
		localStorage.removeItem( 'token' );
		window.location.href = '/login';
	};

	render() {
		const userName = ( getUserName() ) ? getUserName() : '';

		return (
			<nav className="navbar my-navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">Home</Link>
				<div >
					<ul className="navbar-nav my-navbar-nav mr-auto">
						{ isLoggedIn() ? (
							<React.Fragment>
								<li className="nav-item">
									<NavLink to={ `/dashboard/${ userName }` }>Dashboard</NavLink>
								</li>
								<li className="nav-item">
									<button className="btn btn-secondary" onClick={ this.handleLogout }>Logout</button>
								</li>
							</React.Fragment>
						) : (
							<li className="nav-item">
								<NavLink to="/login">Login</NavLink>
							</li>
						) }
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
