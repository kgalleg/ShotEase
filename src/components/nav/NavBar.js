import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navBar.css";
// import ShotEaseIcon from "./ShotEaseIcon.png"
import whiteshot from "./whiteshot.png";
import Login from "../authentication/Login"


//how to logout? is this right?
export default class NavBar extends Component {
  render() {
    return (
      <div>
   
      <nav className="navbar shadow">
        <img src={whiteshot} className="icon--shot" alt="injection" />
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/history">
              History Log
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shot">
              Log Shot
            </Link>
          </li>
          <li>
            <Link
              className="nav-link nav_link_colors"
              to="/login"
              onClick={() => sessionStorage.clear()}
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    );
  }
}
