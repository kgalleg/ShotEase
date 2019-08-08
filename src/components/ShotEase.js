import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./shotEase.css";
// import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./nav/Footer";
// import Authentication from "./Authentication";


export default class ShotEase extends Component {
  // Have to set state in order to change it in the isUserLoggedIn function below to trigger a component re-render
  state = {
    username: "",
    isLoggedIn: sessionStorage.getItem("credentials")
  };

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  // This function's purpose is to re-render this component after a user is registered or logged in
  // which will re-run the isAuthenticated and show the navbar on the Home page
  isUserLoggedIn = () => {
    console.log("checking to see if user is logged in")
    if (this.isAuthenticated()) {
      this.setState({ isLoggedIn: true });
    } else {
      console.log("no user")
        this.setState({isLoggedIn: false})
    }
  };

  // In order to only show the NavBar to users that are registered or logged in I set isAuthenticated to determine
  // if session storage has a user logged in and to render the appropriate components.



  render() {

      console.log("render of the main page");
      if (this.state.isLoggedIn) {
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
} else {
  console.log("IT'S FALSE")
      return (
        <React.Fragment>
{/* Pass in the isUserLoggedFunction so it can be used by the child components of Authentication */}
          <ApplicationViews isUserLoggedIn={this.isUserLoggedIn} />
        </React.Fragment>
      );
}
}
}
