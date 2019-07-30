
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router'
import APIManager from '../../modules/APIManager';


//THIS ONE IS NOT WORKING - go to LogShot.js



// import './register.css'

//practice modal for abdomen to see if I can show body image and log form at the same time as modal.


// class Register extends Component {
//     state = {
//         modal: false
//     }

//     toggle = () => {
//         this.setState(prevState => ({
//             modal: !prevState.modal
//         }));
//     }


    // <div className="container">
    //             <img src ={WholeBody} className="image--body" alt="whole body"/>
    //             <div className="abdomen" onClick={console.log("youclickedme")}></div>
    //             <div className="rightArm"></div>
    //             <div className="leftArm"></div>
    //             <div className="rightHip"></div>
    //             <div className="leftHip"></div>
    //             <div className="rightThigh"></div>
    //             <div className="leftThigh"></div>
    //         </div>

    render() {


        return (

            <section className="ShotSiteLocation">
                <div>
                <Button color="link" onClick={this.toggle}>Don't have an account? Sign Up!</Button>
                    {/* <div className="abdomen" onClick={this.toggle}>Don't have an account? Sign Up!</div> */}
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                        <ModalBody>
                            <React.Fragment>
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
                                    <div className="form-group">
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

                                </form>
                            </React.Fragment>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.saveUser}>Register</Button>

                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </section>
        )
    }
}

export default withRouter(Register)
