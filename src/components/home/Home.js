import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Logoorange from "./Logoorange.png";
import Syringe from "./Syringe.png";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <img src={Logoorange} className="icon--orange" alt="orangelogo" />
          </div>
          <div className="button-area">
            <Link to="/shot">
              <button className="home-button" size="lg">
                Log a Shot!
              </button>
            </Link>

            <div>
              <img src={Syringe} className="icon--syringe" alt="syringe" />
            </div>

            <Link to="/history">
              <button className="home-button" size="lg">
                History Log!
              </button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
