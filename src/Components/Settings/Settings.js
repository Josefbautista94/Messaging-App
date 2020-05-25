import React, { Component } from 'react';
import './Settings.css';

<<<<<<< HEAD
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
=======
const green = '#39D1B4';
const yellow = '#FFD712';

class Settings extends Component{

    constructor(props){
        super(props);
        this.state = { color: green };
        this.changeColor = this.changeColor.bind(this);
      }
      changeColor(){
        const newColor = this.state.color == green ? yellow : green;
        this.setState({ color: newColor })
      }
      render(){
        return(
          <div style={{background: this.state.color}}>
          <h1>Change my color</h1>
          <button onClick={this.changeColor}>Click</button>
          </div>
        )
      }
>>>>>>> 9bc0b7bfd88d4c629c7d6f94cd111e06e09fbfc6
}

export default Settings;
