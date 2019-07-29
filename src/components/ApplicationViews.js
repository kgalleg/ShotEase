import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from 'react-router'
import Login from './authentication/Login'
import Register from './authentication/Register'
class ApplicationViews extends Component {

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: [],
    }


//     componentDidMount() {
//         const newState = {};

//                  APIManager.all("animalsFromAPI")
//       .then(animals => (newState.animals = animals))
//       .then(() => APIManager.all("employeesFromAPI"))
//       .then(employees => (newState.employees = employees))
//       .then(() => APIManager.all("locationsFromAPI"))
//       .then(locations => (newState.locations = locations))
//       .then(() => APIManager.all("ownersFromAPI"))
//       .then(owners => (newState.owners = owners))
//       .then(() => this.setState(newState))
//   }


    render() {
        return (
            <div>
 <React.Fragment>
                <Route exact path="/" render={(props) => {
                    // return <Login {...props} />
                }} />
                <Route path="/login" render={(props) => {
                    return <Login {...props} />
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
