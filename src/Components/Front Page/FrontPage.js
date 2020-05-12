import React, { Component } from 'react';
import './FrontPage.css';
import { Link } from 'react-router-dom';
class FrontPage extends Component {
	render() {
		return (
			<div className="intro">
				<header>
					<h1 className="slogan">An Easy Way To Communicate With Friends</h1>
				</header>

				<body>
					<div className="containerForm">
						<ul className="list">
							<li> Memeber Login</li>
							<li>
								{' '}
								<input type="text" className="userName" placeholder="User Name" />{' '}
							</li>
							<li>
								{' '}
								<input type="password" className="password" placeholder="Password" />{' '}
							</li>
							<Link to="/Chatting">
								<li>
									{' '}
									<a>
										<input type="button" className="submit" value="Submit" />{' '}
									</a>
								</li>
							</Link>
							<li> Forgot Password?</li>
						</ul>
					</div>
				</body>
			</div>
		);
	}
}

export default FrontPage;
