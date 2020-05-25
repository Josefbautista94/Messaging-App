import React, { Component } from "react";
import "./FrontPage.css";
import { Link, Redirect } from "react-router-dom";
import { Card } from 'react-bootstrap';
const api_endpoint = 'http://localhost:5000/api';

class FrontPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = 
                {
                  email: '', 
                  password: '', 
                  submitted: false, 
                  msg: '', 
                  logged: false
                };
    
    if(localStorage.getItem('accessToken')) {
      console.log(localStorage.getItem('accessToken'));
      
      this.state.logged = true;
    }

    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    this.setState({submitted: true});

    const data = 
                {
                  email: this.state.email, 
                  password: this.state.password
                };
    
    fetch(`${api_endpoint}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(res => {
      if(res.status === 'ok'){
        localStorage.setItem('accessToken', res.token);
        this.setState({logged: true});
      }

      this.setState({msg: res.msg});
      setTimeout(() => {
        this.setState({msg: ''});
      }, 5000);

    }).catch(err => {
      console.log('err',err);
      this.setState({msg: err.msg});
      setTimeout(() => {
        this.setState({msg: ''});
      }, 5000);
    })
    this.setState({submitted: false});
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  render() {

    if (this.state.logged === true) {
      return <Redirect to='/Chatting' />
    }

    const msg = this.state.msg;

    return (
      <div className="intro">
        <header>
          <h1 className="slogan">An Easy Way To Communicate With Friends</h1>
        </header>

        <div>
          <div className="containerForm">
            <ul className="list">
              <li> Memeber Login</li>
              {
                msg ? (<p className="error">{msg}</p>) : (<p></p>)
              }
              <li>
                {" "}
                <input
                  type="text"
                  name="email"
                  className="userName"
                  placeholder="User Name"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />{" "}
              </li>
              <li>
                {" "}
                <input
                  type="password"
                  name="password"
                  className="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />{" "}
              </li>
              <li>
                  {" "}
                  <input type="button" className="submit" value="Submit"  onClick={this.handleSubmit}/>{" "}
              </li>
              <li>
              <Link to="/Register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
