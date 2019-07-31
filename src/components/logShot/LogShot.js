import React, { Component } from 'react'
import WholeBody from "./WholeBody.jpg"
import "./logShot.css"
import RightArmCopy from "./RightArmCopy.jpg"

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class LogShot extends Component {

    state = {
        modal: false,
        shotArea: "",
        shotSite: "",
        medication: "",
        notes: "",
        date: "",
        time: ""
    }


    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <section className="ShotSiteLocation">
                <div>
                <img src ={WholeBody} className="image--body" alt="whole body"/>
                    <div className="abdomen" onClick={this.toggle}>do I need this</div>
                    {/* <Button color="link" onClick={this.toggle}>Don't have an account? Sign Up!</Button> */}
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Record Your Shot</ModalHeader>
                        <ModalBody>
                            <React.Fragment>
                            <img src ={RightArmCopy} className="image--rightArm" alt="right arm"/>
                                <form className="add user">

                                    <div className="form-group">
                                        <label htmlFor="shotArea">Shot Area</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            value={this.state.shotArea}
                                            onChange={this.handleFieldChange}
                                            id="shotArea"
                                            placeholder="shot area"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="shotSite">Shot Site</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            value={this.state.shotSite}
                                            onChange={this.handleFieldChange}
                                            id="shotSite"
                                            placeholder="shot site"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="medication">Medication</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            onChange={this.handleFieldChange}
                                            id="medication"
                                            value={this.state.medication}
                                            placeholder="medication"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Notes">Notes</label>
                                        <textarea
                                            type="text"
                                            required
                                            className="form-control"
                                            onChange={this.handleFieldChange}
                                            id="notes"
                                            value={this.state.notes}
                                            placeholder="notes"
                                        />
                                    </div>

                                </form>
                            </React.Fragment>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.saveUser}>Log my Shot!</Button>
{/* need to change onclick here above*/}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </section>

        )
    }
}


// <div className="container">
            //     <img src ={WholeBody} className="image--body" alt="whole body"/>
            //     <div className="abdomen" onClick={console.log("youclickedme")}></div>
            //     <div className="rightArm"></div>
            //     <div className="leftArm"></div>
            //     <div className="rightHip"></div>
            //     <div className="leftHip"></div>
            //     <div className="rightThigh"></div>
            //     <div className="leftThigh"></div>
            // </div>