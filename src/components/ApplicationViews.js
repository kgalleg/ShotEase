import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from 'react-router'
import Login from './authentication/Login'
import Register from './authentication/Register'
import APIManager from '../modules/APIManager'



class ApplicationViews extends Component {

    state = {
        user: [],
        oneShot: [],
        shotArea: [],
        shotSite: [],
        guide: []
    }


    componentDidMount() {
        const newState = {};

                 APIManager.all("user")
      .then(users => (newState.users = users))
      .then(() => APIManager.all("oneShot"))
      .then(oneShots => (newState.oneShots = oneShots))
      .then(() => APIManager.all("shotArea"))
      .then(shotAreas => (newState.shotAreas = shotAreas))
      .then(() => APIManager.all("shotSites"))
      .then(shotSites => (newState.shotSites = shotSites))
      .then(() => APIManager.all("guide"))
      .then(guides => (newState.guides = guides))
      .then(() => this.setState(newState))
  }


    render() {
        return (
            <div>
 <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Login {...props} />
                }} />
                <Route path="/login" render={(props) => {
                    // return <Login {...props} />
                }} />
                <Route path="/register" render={(props) => {
                    // return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
            </div>
        )
    }
}

export default withRouter(ApplicationViews)
