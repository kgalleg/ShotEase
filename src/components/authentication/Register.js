
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router'
import APIManager from '../../modules/APIManager';
import "./login.css"
import ShotEaseRegister from "./ShotEaseRegister.png"




class Register extends Component {

    state = {
        modal: false,
        username: "",
        email: "",
        password: ""
    }
    addUser = user => {
        return APIManager.post("user", user)
            .then((user) => sessionStorage.setItem("credentials", user.id))
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
    }

    // handleSignUp = event => {
    //     if (this.state.username === "") {
    //         alert("Please enter a user name")
    //     } else if (this.state.email === "") {
    //         alert("Please enter an email address")
    //     } else if (this.state.password === "") {
    //         alert("Please enter a password")
    //     } else if (this.props.users.some(user => {return user.username.toLowerCase() === this.state.username.toLowerCase()})) {
    //         alert("User name is already taken")
    //         console.log("already taken username")
    //     } else if (this.props.users.some(user => {return user.email.toLowerCase() === this.state.email.toLowerCase()})){
    //         alert("Email address already exists")
    //         console.log("already taken email")
    //     }else{
    //         const newUserObj = {
    //             name: this.state.name,
    //             username: this.state.username,
    //             password: this.state.password,
    //             email: this.state.email
    //         }
    //         this.props.addRegisteredUser(newUserObj)
    //         // .then(() => this.props.history.push('/login'))
    //     }
    // }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    saveUser = event => {
        event.preventDefault()
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        this.addUser(user)
            .then(() => this.props.history.push('/home'))
    }






    handleGoBack = () => {
        this.props.history.push('/')
        //TODO: or this.props.history.push('/login')
    }


    render() {


        return (


            <section className="createUser">
                <div>
                    <div className="linkButton">
                    <Button color="link" onClick={this.toggle}>Don't have an account? Sign Up!</Button>
                    </div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                        <ModalBody className="modalBodyRegister">
                            <React.Fragment>
                            <div><img src ={ShotEaseRegister} className="icon--shotRegister" alt="task"/></div>
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
                            <button className="registerButton" onClick={this.saveUser}>Register</button>

                            <button className="cancelRegisterButton" onClick={this.toggle}>Cancel</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </section>
        )
    }
}

export default withRouter(Register)
