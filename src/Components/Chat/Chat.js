import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

const Chat = () => {
	const [ yourID, setYourID ] = useState();
	const [ messages, setMessages ] = useState([]);
	const [ message, setMessage ] = useState('');
	const socketRef = useRef();
	const backgroundColor = window.localStorage.getItem('backgroundColor');
	function receivedMessage(message) {
		setMessages((oldMsgs) => [ ...oldMsgs, message ]);
	}

	useEffect(() => {
		// 	socketRef.current = io.connect('http://localhost:8000');
		// 	socketRef.current.on('Your id', (id) => {
		// 		setYourID(id);
		// 	});
		// 	socketRef.current.on('backend message', (message) => {
		// 		console.log('here');
		// 		receivedMessage(message);
		// 	});
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
			<aside className="sidebar">
				<div className="chat-list">
					{[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].map((n) => (
						<div className="cell" key={n}>
							<div className="user-cell">
								<div>User {n}</div>
								<div className="preview">This is a fake long message tdmaowdmoawdoawd</div>
							</div>
							<div className="divider" />
						</div>
					))}
				</div>

				<div className="settings">
					<Link className="settings-link" to="/Settings">
						Settings
					</Link>
				</div>
			</aside>
			<div id="msgPanel" className="chatBody">
				<div id="chatBg" className="container" style={{ backgroundColor }}>
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
					<input className="input" value={message} onChange={handleChange} placeholder="send a message" />
					<button className="send">Send</button>
				</form>
			</div>
		</div>
	);
};

export default Chat;
