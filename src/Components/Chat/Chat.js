import React, { Component } from 'react';
import './Chat.css';
import { Link } from 'react-router-dom';
class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	messageButton = () => {
		const msgBtn = document.getElementById('msgPanel');
		if (msgBtn.style.display === 'none') {
			msgBtn.style.display = 'block';
		} else {
			msgBtn.style.display = 'none';
		}
	};
	render() {
		const { messageActive } = this.setState;
		const { messageButton } = this;
		return (
			<div className="page">
				<body id="msgPanel" className="chatBody">
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
					<li id="messageBtn" className="messages" onClick={messageButton}>
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
