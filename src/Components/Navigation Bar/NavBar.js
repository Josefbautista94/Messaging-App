import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
	render() {
		return (
			<div>
				<ul className="Nav-Ul">
					<Link to="/About">
						<li className="about">
							<a>About</a>
						</li>
					</Link>

					<Link to="/Chatting">
						<li className="home">
							{' '}
							<a> Home </a>{' '}
						</li>
					</Link>

					<Link to="/">
						<li className="LogOut">
							<a>LogOut</a>
						</li>
					</Link>
				</ul>
			</div>
		);
	}
}

export default NavBar;
