import React, { Component } from 'react';
// import './Register.css';
import { Redirect } from 'react-router-dom';

const api_endpoint = 'http://localhost:5000/api';

export default class FrontPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: ''
		};
		//this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit(event) {
		this.setState({ submitted: true });

		const data = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			confPass: this.state.confPass
		};
	}
}
