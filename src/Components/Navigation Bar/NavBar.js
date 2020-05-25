import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(){
    localStorage.removeItem('accessToken');
  }

  render() {
    return (
      <div>
        <ul className="Nav-Ul">
          <li className="about">
            <Link to="/About">About</Link>
          </li>
          <li className="home">
            <Link to="/Chatting">Home</Link>
          </li>
          <li className="LogOut" onClick={this.logout}>
            <Link to="/">LogOut</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
