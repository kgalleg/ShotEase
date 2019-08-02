import React, { Component } from 'react'
// import "./logShot.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router'
import APIManager from '../../modules/APIManager';

class EditShot extends Component {

    state = {
        modal: false,
        shotArea: "",
        shotSite: "",
        medication: "",
        notes: "",
        date: "",
        time: "",
        shotAreaId:"",
        shotSiteId:"",
        userId: +(sessionStorage.getItem("credentials"))
    }
     // Update state whenever an input field is edited
     handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    updatedShot = evt => {
        // if (this.state.shotSite === "" || this.state.date === "") {
        //     window.alert("Please fill out all fields!");
        // } else
        // {
        evt.preventDefault();
        const shot = {
            // modal: false,
            id: this.props.singleShot.id,
            shotArea: this.state.shotArea,
            shotSite: this.state.shotSite,
            medication: this.state.medication,
            notes: this.state.notes,
            date: this.state.date,
            time: this.state.time,
            shotAreaId:parseInt(this.state.shotAreaId),
            shotSiteId:parseInt(this.state.shotSiteId),
            userId: +(sessionStorage.getItem("credentials"))

        };

        // Create the shot and redirect user to home or wherever I add here
        this.props.updatedShot(shot)
            .then(() => this.props.history.push("/home"));

    // }
}
myProps = this.props.singleShot
componentDidMount() {
    if (this.props.singleShot !== undefined){
    console.log(this.props.singleShot)
    console.log("The edit component has mounted")
    APIManager.get("oneShot", this.props.singleShot.id)
        .then(oneShot => {
            this.setState({
            shotArea: oneShot.shotArea,
            shotSite: oneShot.shotSite,
            medication: oneShot.medication,
            notes: oneShot.notes,
            date: oneShot.date,
            time: oneShot.time,
            shotAreaId:parseInt(oneShot.shotAreaId),
            shotSiteId:parseInt(oneShot.shotSiteId),
            // userId: +(sessionStorage.getItem("credentials"))
            });
        });
    }
}

componentWillReceiveProps() {

}


    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        console.log("the edit modal has rendered")
        //   console.log(sessionStorage.getItem("credentials"))
        return (
            <section className="ShotSiteLocation">
                <div>
                    <Button  onClick={this.toggle}>
                    Edit
                    </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        {/* <ModalHeader toggle={this.toggle}>Record Your Shot</ModalHeader> */}
                        <ModalBody>
                            <React.Fragment>

                           {/* <div className="testingimage"> <img src ={this.props.shotArea.imagePath} className="imageofbodypart" alt="bodypart"/> </div> */}
                                <form className="addOneShot">

                                    <div className="form-group">
                                        <label htmlFor="shotArea">Shot Area</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            value={this.state.shotArea}
                                            onChange={this.handleFieldChange}
                                            id="shotArea"

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

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date">Date</label>
                                        <input
                                            type="date"
                                            required
                                            className="form-control"
                                            value={this.state.date}
                                            onChange={this.handleFieldChange}
                                            id="date"

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="time">Time</label>
                                        <input
                                            type="time"
                                            required
                                            className="form-control"
                                            value={this.state.time}
                                            onChange={this.handleFieldChange}
                                            id="time"

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

                                        />
                                    </div>

                                </form>
                            </React.Fragment>

                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" color="primary" onClick={this.updatedShot}>Submit</Button>
{/* need to change onclick here above*/}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </section>

        )
    }
}

export default withRouter (EditShot)