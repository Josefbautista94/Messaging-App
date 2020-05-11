import React, { Component } from 'react';
import './Chat.css';
import { Link } from 'react-router-dom';
class Chat extends Component {
	render() {
		return (
			<div className="page">
				<body className="chatBody">
					<div className="container">
						<div className="mySide">
							<div className="myMessage" />
						</div>

						<div className="TheirSide">
							<div className="theirMessage" />
						</div>
					</div>
					<form className="Form">
						<textarea className="textArea" placeholder="send a message" />
						<button className="send">Send</button>
					</form>
				</body>

				<ul className="chatBarUl">
					<li className="messages">
						<a>Messages</a>
					</li>
					<Link to="/Settings">
						<li className="settings">
							<a>Settings</a>
						</li>
					</Link>
				</ul>
			</div>
		);
	}
}

export default Chat;
