import React, { Component } from 'react'
import "./login.css"
//modules/resourceManager/utilities/APIManager"
import APIManager from '../../modules/APIManager';
import Register from "./Register"
import ShotEaseIcon from "../nav/ShotEaseIcon.png"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom"

export default class Login extends Component {

    state = {
        password: "",
        userName: "",
      }

      // Update state whenever an input field is edited
      handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
      }

      handleRegister = e => {
        e.preventDefault()
        const newUser = {
          userName: this.state.userName,
          password: this.state.password
        }
        if (this.state.userName && this.state.password) {
          APIManager.searchUsername(this.state.userName).then(users => {
            if (users.length) {
              alert(`Username ${this.state.userName} already exits!`)
            } else {
              APIManager.addUser(newUser).then(user => {
                sessionStorage.setItem("credentials", parseInt(user.id))
                this.props.setAuth()
              })
            }
          })
        } else {
          alert("Please Fill Out Form!")
        }
      }

      handleLogin = e => {
        e.preventDefault()
        if (this.state.userName && this.state.password) {
          APIManager.searchUP(this.state.userName, this.state.password).then(
            user => {
              if (!user.length) {
                alert("Wrong username or password!")
              } else {
                sessionStorage.setItem("credentials", parseInt(user[0].id))
                this.props.setAuth()
              }
            }
          )
        } else {
          alert("Please Fill Out Form!")
        }
      }


    render() {
      return (
        <React.Fragment>
          <div><img src ={ShotEaseIcon} className="icon--shot2" alt="task"/></div>
        <Form className="loginForm">

          <h2 className="header">Sign in</h2>
          <br/>
          <FormGroup>
            <Label for="inputUserName">Username</Label>
            <Input
            onChange={this.handleFieldChange}
            type="userName"
            name="userName"
            id="userName"
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
            id="inputPassword" placeholder={` password `}
            required=""
             />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Remember Me
            </Label>
          </FormGroup>
          <Button className="sign-in-button" id="button" type ="submit" onClick={this.handleLogin}>Sign in</Button>
          <br/>

          <Register setAuth={this.props.setAuth}/>
        </Form>
        </React.Fragment>
      );
    }
  }


  // <div className="card-title">
  //                       <img src={dog} className="icon--dog" />
  //                       <h5>{this.props.animal.name}</h5>
  //                       <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
  //                       <a href="#"
  //                           onClick={() => this.props.deleteAnimal(this.props.animal.id)}
  //                           className="card-link">Discharge</a>
  //                   </div>
