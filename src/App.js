import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './Components/Navigation Bar/NavBar.js';
import FrontPage from './Components/Front Page/FrontPage.js';
import About from './Components/About/About.js';
import Chat from './Components/Chat/Chat.js';
import Settings from './Components/Settings/Settings.js';
import Socket from 'socket.io-client';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.socket = Socket('http://localhost:8000');

	/**
     * Listening to "backend message" event for messages
     * sent from the backend. Event could've been named
     * anything else.
     */

		this.socket.on('backend message', () => {
			console.log('Connection succesfully established');
		});
	}

	componentDidMount() {
	/**
     * Testing that socket is listening by emiting
     * "frontend message" event that the backend
     * is listening to. Event could've been named
     * anything else.
     */
		this.socket.emit('frontend message');
	}

	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<Switch>
						<Route path="/" exact component={FrontPage} />
						<Route path="/About" component={About} />
						<Route path="/Chatting" component={Chat} />
						<Route path="/Settings" component={Settings} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
