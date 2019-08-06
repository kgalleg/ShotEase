import React, { Component } from 'react'
import "./login.css"
import Register from "./Register"
import ShotEaseIcon from "../nav/ShotEaseIcon.png"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router'
import APIManager from '../../modules/APIManager';

class Login extends Component {

    state = {
        username: "",
        password: "",
        id: ""
        // activeUser: +(sessionStorage.getItem("userId"))
      }

      handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    // this function will do all the verification and checking for the users information matching
    // and alerts the user if they entered the wrong information
    handleLogin = event => {
        event.preventDefault()
        APIManager.all("user").then(user => {
          const singleUser = user.find(
              el => el.username.toLowerCase() === this.state.username.toLowerCase() && el.password.toLowerCase() === this.state.password.toLowerCase()
          )
          if (singleUser) {
              sessionStorage.setItem("credentials", singleUser.id);
              this.props.history.push('/home')
          }else {
            window.alert("Invalid login information. Please try again or register a new account.")
        }

    })
  }


    handleSignUp = () => {
        this.props.history.push('/register') // if the user presses the sign up button, then they should be redirected to the register page
    }

    render() {
        // clear the session from the previous user
        sessionStorage.clear()

      return (
        <React.Fragment>
          <div><img src ={ShotEaseIcon} className="icon--shot2" alt="task"/></div>
        <Form className="loginForm" onSubmit={this.handleLogin}>

          <h2 className="header">Sign in</h2>
          <br/>
          <FormGroup>
            <Label for="inputUserName">Username</Label>
            <Input
            onChange={this.handleFieldChange}
            type="userName"
            name="userName"
            id="username"
            placeholder={` username`}
            required=""
            autoFocus=""
            />

          </FormGroup>
          <FormGroup>
            <Label for="inputPassword">Password</Label>
            <Input
            onChange={this.handleFieldChange}
            type="password"
            name="password"
            id="password" placeholder={` password `}
            required=""
             />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Remember Me
            </Label>
          </FormGroup>
          <button className="sign-in-button" type ="submit" onClick={this.handleLogin}>Sign in</button>
          <br/>

          <Register setAuth={this.props.setAuth}/>
        </Form>
        </React.Fragment>
      );
    }
  }

  export default withRouter(Login)


