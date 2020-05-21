import React, { Component } from "react";
import "./FrontPage.css";
import { Link } from "react-router-dom";
class FrontPage extends Component {
  render() {
    return (
      <div className="intro">
        <header>
          <h1 className="slogan">An Easy Way To Communicate With Friends</h1>
        </header>

        <div>
          <div className="containerForm">
            <ul className="list">
              <li> Memeber Login</li>
              <li>
                {" "}
                <input
                  type="text"
                  className="userName"
                  placeholder="User Name"
                />{" "}
              </li>
              <li>
                {" "}
                <input
                  type="password"
                  className="password"
                  placeholder="Password"
                />{" "}
              </li>
              <li>
                <Link to="/Chatting">
                  {" "}
                  <input type="button" className="submit" value="Submit" />{" "}
                </Link>
              </li>
              <li> Forgot Password?</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
