import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./navBar.css"
// import ShotEaseIcon from "./ShotEaseIcon.png"
import whiteshot from "./whiteshot.png"


//how to logout? is this right?
export default class NavBar extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
        <nav className="navbar shadow">
            <img src ={whiteshot} className="icon--shot" alt="injection"/>
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/history">History Log</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/shot">Log Shot</Link>
            </li>
            <li>
        <Link className="nav-link nav_link_colors" to="/login" onClick={this.logout}>Logout</Link>
      </li>
        </ul>
    </nav>
    )
  }
}
