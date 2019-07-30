import React, { Component } from "react"
import NavBar from "../components/nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import APIManager from '../modules/APIManager'
import { withRouter }from "react-router-dom"


class UserAccessLayer extends Component {
  state = {
    activeUser: {}
  }

  componentDidMount() {
    APIManager.get(this.activeUserId()).then(activeUser =>
      this.setState({ activeUser: activeUser })
    )
  }
  activeUserId = () => parseInt(sessionStorage.getItem("credentials"))

  render() {
    return (
      <React.Fragment>
        <NavBar setAuth={this.props.setAuth} activeUser={this.state.activeUser} />
        <div className="appContainer">
        <ApplicationViews
          activeUserId={this.activeUserId}
          activeUser={this.state.activeUser}
        />
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(UserAccessLayer)
