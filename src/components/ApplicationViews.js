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
import HistoryList from './history/HistoryList'
import EditShot from './editShot/EditShot'

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
      .then(users => (newState.user = users))
      .then(() => APIManager.all("oneShot"))
      .then(oneShots => (newState.oneShot = oneShots))
      .then(() => APIManager.all("shotArea"))
      .then(shotAreas => (newState.shotArea = shotAreas))
      .then(() => APIManager.all("shotSite"))
      .then(shotSites => (newState.shotSite = shotSites))
      .then(() => APIManager.all("guide"))
      .then(guides => (newState.guide = guides))
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

addShot = (shot) =>
      APIManager.post("oneShot", shot)
      .then(() => APIManager.all("oneShot"))
      .then(oneShot =>
        this.setState({
            oneShot: oneShot
        })
      );

      updatedShot = (editedTaskObject) => {
        return APIManager.put("oneShot", editedTaskObject)
          .then(() => APIManager.all("oneShot"))
          .then(oneShot => {
            // console.log(oneShot)
            this.setState({
                oneShot: oneShot
            });
          });
      };

      deleteShot = (id) => {
        return APIManager.delete("oneShot", id)
          .then(() => APIManager.all("oneShot"))
          .then(oneShot => {
            // this.props.history.push("/history");
            this.setState({ oneShot: oneShot });
          });
      };



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
                <Route path="/history" render={(props) => {
                    //if (this.isAuthenticated()) {
                    return <HistoryList oneShot={this.state.oneShot} deleteShot={this.deleteShot} {...props}/>
                    //}
                }} />
                <Route path="/shot" render={(props) => {
                    console.log(this.state.shotArea)
                    //if (this.isAuthenticated()) {
                    return <LogShot users={this.state.user} addShot={this.addShot} shotAreas={this.state.shotArea}{...props}/>
                    //}
                }} />
                <Route path="/shot/new" render={(props) => {
                    //if (this.isAuthenticated()) {
                    return <LogShot addShot={this.addShot} {...props}/>
                    //}
                }} />
                <Route
          exact path="/history/:shotId(\d+)/edit"

          render={props => {
            return (
              <EditShot
                {...props}
                updatedShot={this.updatedShot}
                oneShot={this.state.oneShot}
                singleShot={this.state.singleShot}
              />
            );
          }}
        />

                    <Route path="/login" component={Login} />
            </React.Fragment>

        )
    }
}

export default withRouter(ApplicationViews)
