import React, { Component } from 'react';
import './Settings.css';

class Settings extends Component {
	setLocalStorage = (color) => {
		const storage = window.localStorage;

		if (storage.getItem('backgroundColor')) {
			localStorage.removeItem('backgroundColor');
		}

		localStorage.setItem('backgroundColor', color);
	};

	render() {
		const { setLocalStorage } = this;

		return (
			<div>
				<header>
					<h1>Settings Page</h1>
				</header>

				<div>
					<button
						className="color-btn"
						style={{ backgroundColor: 'black' }}
						onClick={() => setLocalStorage('black')}
					/>
					<button
						className="color-btn"
						style={{ backgroundColor: 'red' }}
						onClick={() => setLocalStorage('red')}
					/>
					<button
						className="color-btn"
						style={{ backgroundColor: 'blue' }}
						onClick={() => setLocalStorage('blue')}
					/>
					<button
						className="color-btn"
						style={{ backgroundColor: 'green' }}
						onClick={() => setLocalStorage('green')}
					/>
				</div>
			</div>
		);
	}
}

export default Settings;
