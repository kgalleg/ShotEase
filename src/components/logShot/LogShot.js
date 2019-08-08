import React, { Component } from "react";
import WholeBody from "./WholeBody.jpg";
import "./logShot.css";
import LogShotModalCard from "./LogShotModalCard";
import Logo from "./Logo.png";

export default class LogShot extends Component {
  render() {
    return (
      <React.Fragment>
<div>
  <div className="outsideBody">
        <div className="WholeBody"></div>
          <img src={Logo} className="image--mainLogo" alt="main logo" />
          <p className="clickOnMe">
            Click on the area where you would like to log your shot below.
          </p>
          <div className="wrapper"><img src={WholeBody} className="image--body" alt="whole body" /></div>

          <div className="mydiviviviv ">where are ou</div>



</div>
          <section className="images">
            {this.props.shotAreas.map(shotArea => (
              <LogShotModalCard
                key={shotArea.id}
                shotArea={shotArea}
                {...this.props}
              />
            ))}

          </section>

        </div>

      </React.Fragment>
    );
  }
}
