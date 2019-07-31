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
        time: "",
        userId: +(sessionStorage.getItem("credentials"))
    }
     // Update state whenever an input field is edited
     handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    constructNewShot = evt => {
        // if (this.state.shotSite === "" || this.state.date === "") {
        //     window.alert("Please fill out all fields!");
        // } else
        {
        evt.preventDefault();
        const shot = {
            // modal: false,
            shotArea: this.state.shotArea,
            shotSite: this.state.shotSite,
            medication: this.state.medication,
            notes: this.state.notes,
            // date: this.state.date,
            // time: this.state.time,
            userId: +(sessionStorage.getItem("credentials"))

        };

        // Create the task and redirect user to home or wherever I add here
        this.props.addShot(shot)
            .then(() => this.props.history.push("/home"));

    }
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
                    <div className="bodypartmodal" onClick={this.toggle}>click on me</div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Record Your Shot</ModalHeader>
                        <ModalBody>
                            <React.Fragment>
                            <img src ={`${this.props.shotArea.imagePath}`} className="bodypart" alt="a bodypart"/>
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
                            <Button color="primary" onClick={this.constructNewShot}>Log my Shot!</Button>
{/* need to change onclick here above*/}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </section>

        )
    }
}

