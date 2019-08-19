import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./shotEase.css";
// import "bootstrap/dist/css/bootstrap.min.css"

export default class ShotEase extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <ApplicationViews />
      </React.Fragment>
    );
  }
}
