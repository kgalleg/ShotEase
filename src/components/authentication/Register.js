import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { withRouter } from "react-router";
import APIManager from "../../modules/APIManager";
import "./login.css";
import ShotEaseRegister from "./ShotEaseRegister.png";

class Register extends Component {
  state = {
    modal: false,
    username: "",
    email: "",
    password: ""
  };

  handleFieldChange = event => {
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;
    console.log(stateToChange);
    this.setState(stateToChange);
  };

  addUser = user => {
    return APIManager.post("user", user)
      .then(user => sessionStorage.setItem("credentials", user.id))
      .then(() => APIManager.all("user"))
      .then(user =>
        this.setState({
          user: user
        })
      );
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  //   saveUser = event => {
  //     event.preventDefault();
  //     const user = {
  //       username: this.state.username,
  //       email: this.state.email,
  //       password: this.state.password
  //     };
  //     this.addUser(user).then(() => this.props.history.push("/home"));
  //   };

  // createFirstSession = () => {
  //     let firstSession = {
  //         userId: parseInt(sessionStorage.getItem("credentials"))
  //     }
  //         this.props.addSessionOnRegister(firstSession)
  //     }

  //     addSessionOnRegister = (session) => {
  //         return APIManager.post(session, "sessions")
  //           .then(() => APIManager.getAll("sessions"))
  //           .then(Sessions =>
  //             this.setState({
  //               Sessions: Sessions
  //             })
  //           );
  //       };

  // saveUser = event => {
  //     event.preventDefault()
  //     APIManager.all("user").then((users) => {
  //         let isMatch = users.find(el => el.username.toLowerCase() === this.state.username.toLowerCase())
  //         if(isMatch){
  //             window.alert("This email already exists! Please go back to login page.")
  //         } else if(this.state.name === "" || this.state.email === "" || this.state.password === ""){
  //             window.alert("You left a field blank!")
  //         }

  //         else {
  //         let newUser = {
  //        username: this.state.username,
  //        email: this.state.email,
  //        password: this.state.password
  //         };

  //         this.props.addUser(newUser)
  //         .then(() => this.props.history.push('/home'))
  //     }
  // })
  // }

  saveUser = event => {
    event.preventDefault();
    APIManager.all("user").then(users => {
      if (
        users.find(
          el => el.email.toLowerCase() === this.state.email.toLowerCase()
        )
      ) {
        window.alert(
          "This email already exists! Please go back to login page."
        );
      } else if (
        users.find(
          el => el.username.toLowerCase() === this.state.username.toLowerCase()
        )
      ) {
        window.alert(
          "This username already exists! Please go back to login page."
        );
      } else if (
        this.state.name === "" ||
        this.state.email === "" ||
        this.state.password === ""
      ) {
        window.alert("You left a field blank!");
      } else {
        const newUser = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        };

        this.addUser(newUser).then(() => this.props.history.push("/home"));
        // window.alert("welcome to Shot Ease!")
      }
    });
  };

  render() {
    return (
      <section className="createUser">
        <div>
          <div className="linkButton">
            <Button color="link" onClick={this.toggle}>
              Don't have an account? Sign Up!
            </Button>
          </div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Register</ModalHeader>
            <ModalBody className="modalBodyRegister">
              <React.Fragment>
                <div>
                  <img
                    src={ShotEaseRegister}
                    className="icon--shotRegister"
                    alt="task"
                  />
                </div>
                <form className="add user">
                  <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.username}
                      onChange={this.handleFieldChange}
                      id="username"
                      placeholder="username"
                    />

                    <div className="form-group emailtext">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="email"
                        value={this.state.email}
                        placeholder="email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      required
                      className="form-control"
                      value={this.state.password}
                      onChange={this.handleFieldChange}
                      id="password"
                      placeholder="password"
                    />
                  </div>
                </form>
              </React.Fragment>
            </ModalBody>
            <ModalFooter>
              <button className="registerButton" onClick={this.saveUser}>
                Register
              </button>

              <button className="cancelRegisterButton" onClick={this.toggle}>
                Cancel
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </section>
    );
  }
}

export default withRouter(Register);
