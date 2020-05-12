import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

const Chat = () => {
	const [ yourID, setYourID ] = useState();
	const [ messages, setMessages ] = useState([]);
	const [ message, setMessage ] = useState('');
	const socketRef = useRef();

	function messageButton() {
		const msgBtn = document.getElementById('msgPanel');
		if (msgBtn.style.display === 'none') {
			msgBtn.style.display = 'block';
		} else {
			msgBtn.style.display = 'none';
		}
	}

	function receivedMessage(message) {
		setMessages((oldMsgs) => [ ...oldMsgs, message ]);
	}

	useEffect(() => {
		socketRef.current = io.connect('http//localhost:5000');

		socketRef.current.on('Your id', (id) => {
			setYourID(id);
		});

		socketRef.current.on('backend message', (message) => {
			console.log('here');
			receivedMessage(message);
		});
	}, []);

	function sendMessage(e) {
		e.preventDefault();
		const messageObject = {
			body: message,
			id: yourID
		};
		setMessage('');
		socketRef.current.emit('frontend message', messageObject);
	}

	function handleChange(e) {
		setMessage(e.target.value);
	}

	return (
		<div className="page">
			<body id="msgPanel" className="chatBody">
				<div className="container">
					{messages.map((message, index) => {
						if (message.id === yourID) {
							return (
								<div className="mySide" key={index}>
									<div className="myMessage">{message.body}</div>
								</div>
							);
						}
						return (
							<div className="TheirSide" key={index}>
								<div className="theirMessage">{message.body}</div>
							</div>
						);
					})}
				</div>

				<form className="Form" onSubmit={sendMessage}>
					<textarea
						className="textArea"
						value={message}
						onChange={handleChange}
						placeholder="send a message"
					/>
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
};

export default Chat;
