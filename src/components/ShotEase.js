import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./shotEase.css";
// import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./nav/Footer";


export default class ShotEase extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App Site">
                <div className="Site-content">
                    <div className="App-header">
                        <NavBar/>
                    </div>
                    <div className="main">
                        <ApplicationViews />
                    </div>
                </div>
                <Footer />
            </div>
      </React.Fragment>
    );
  }
}

