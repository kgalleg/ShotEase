import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./navBar.css";
// import ShotEaseIcon from "./ShotEaseIcon.png"
import whiteshot from "./whiteshot.png";
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
  import "./footer.css";


//how to logout? is this right?
export default class Footer extends Component {
  render() {
    return (



          <div className="content-wrap">
      <div className="footer">
      <p>Disclaimer
The purpose of this website is to inform and educate.
The app and athe information contained therein is made available by the developer for educational purposes only and is not intended to provide medical advice.  By using this app, you understand and acknowledge that there is no physician-patient relationship between you and the developer.  You further acknowledge your understanding that the app should not be used as a substitute for competent medical advice from licensed physician in your state.
</p>
</div>
      </div>


    );
  }
}
