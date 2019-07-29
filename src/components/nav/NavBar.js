import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./navBar.css"
import ShotEaseIcon from "./ShotEaseIcon.png"

export default class NavBar extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
        <nav className="navbar shadow">
            <img src ={ShotEaseIcon} className="icon--shot" alt="task"/>
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/messages">Messages</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/tasks">Tasks</Link>
            </li>
            <li>
        <Link className="nav-link nav_link_colors" to="/welcome" onClick={() => this.logoutUser()}>Logout</Link>
      </li>
            <li className="nav-item">
                <Link className="nav-link" to="/events">Events</Link>
            </li>
        </ul>
    </nav>
    )
  }
}
