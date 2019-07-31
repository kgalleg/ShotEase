import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from 'react-router'
import Login from './authentication/Login'
import Register from './authentication/Register'
import APIManager from '../modules/APIManager'
// import Login from '../components/authentication/Login'
// import Register from '../components/authentication/Register'
import Home from './home/Home'
import LogShot from  './logShot/LogShot'
class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        user: [],
        oneShot: [],
        shotArea: [],
        shotSite: [],
        guide: [],
        activeUser: +(sessionStorage.getItem("userId"))
    }

    componentDidMount() {
        const newState = {};

                 APIManager.all("user")
      .then(users => (newState.users = users))
      .then(() => APIManager.all("oneShot"))
      .then(oneShots => (newState.oneShots = oneShots))
      .then(() => APIManager.all("shotArea"))
      .then(shotAreas => (newState.shotAreas = shotAreas))
      .then(() => APIManager.all("shotSite"))
      .then(shotSites => (newState.shotSites = shotSites))
      .then(() => APIManager.all("guide"))
      .then(guides => (newState.guides = guides))
      .then(() => this.setState(newState))
  }

  componentWillUpdate() {
    if (this.state.activeUser === "") {
        let user = sessionStorage.getItem("userId");
        this.setState({ activeUser: parseInt(user) })
    }
}

//this function test for authentication and user has entered the correct information
isAuthenticated = () => {
    if (sessionStorage.getItem("userId") !== null) {
        return true;
    } else {
        return false;
    }
}




    render() {
        return (

 <React.Fragment>
                <Route exact path="/" render={(props) => {
                    // if (this.isAuthenticated()) {

                        // return <Login users={this.state.user} {...props} />
                    //}
                    //else {
                       // return <Redirect to="/register" />

                    //}
                }} />
                <Route  path="/register" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <Register users={this.state.user} addRegisteredUser={this.addRegisteredUser} setAuth={this.state.setAuth} {...props} />
                    }

                }} />
                <Route path="/home" render={(props) => {
                    //if (this.isAuthenticated()) {
                    return <Home users={this.state.user} {...props}/>
                    //}
                }} />
                <Route path="/shot" render={(props) => {
                    //if (this.isAuthenticated()) {
                    return <LogShot users={this.state.user} {...props}/>
                    //}
                }} />

                    <Route path="/login" component={Login} />
            </React.Fragment>

        )
    }
}

export default withRouter(ApplicationViews)
