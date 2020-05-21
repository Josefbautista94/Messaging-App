import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
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
          <li className="LogOut">
            <Link to="/">LogOut</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
