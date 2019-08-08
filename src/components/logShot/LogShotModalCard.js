import React, { Component } from "react";
// import WholeBody from "./WholeBody.jpg"
import "./logShot.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class LogShotModalCard extends Component {
  state = {
    // modal: false,
    shotAreaId: this.props.shotArea.id,
    shotSiteId: "",
    medication: "",
    notes: "",
    date: "",
    time: "",

    userId: +sessionStorage.getItem("credentials")
  };
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
        shotAreaId: this.state.shotAreaId,
        shotSiteId: this.state.shotSiteId,
        medication: this.state.medication,
        notes: this.state.notes,
        date: this.state.date,
        time: this.state.time,
        userId: +sessionStorage.getItem("credentials")
      };

      // Create the task and redirect user to home or wherever I add here
      this.props.addShot(shot).then(() => this.props.history.push("/home"));
    }
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {

    return (
      <section className="ShotSiteLocation">
        <div>
          <div className={this.props.shotArea.name} onClick={this.toggle} />
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Record Your Shot</ModalHeader>
            <ModalBody>
              <React.Fragment>
                <div className="testingimage">
                  {" "}
                  <img
                    src={this.props.shotArea.imagePath}
                    className="imageofbodypart"
                    alt="bodypart"
                  />{" "}
                </div>
                <form className="addOneShot">
                  <h3>{this.props.shotArea.nameOfArea}</h3>
                  {/* <div className="form-group">
                                        <label htmlFor="shotArea">Shot Area</label>
                                        <select
                                        // defaultValue=""
                                            name="shotAreaId"
                                            className="form-control"
                                            value={this.props.shotArea.id}
                                            onChange={this.handleFieldChange}
                                            id="shotAreaId"
                                            // disabled
                                        >
                                        <option value="">Select shot area</option>
                                        {this.props.shotArea.map(s => (
                                          <option key={s.id} id={s.id} {...this.props} value = {s.id}>
                                              {s.nameOfArea}
                                          </option>
                                        ))}
                                        </select>
                                    </div> */}

                  <div className="form-group">
                    <label htmlFor="shotSite"> </label>
                    <select
                      defaultValue=""
                      required
                      className="form-control"
                      // value={this.state.shotSite}
                      onChange={this.handleFieldChange}
                      id="shotSiteId"
                      // placeholder="shot site"
                    >
                      <option value="">Select shot site number</option>
                      {this.props.shotSites.map(s => (
                        <option
                          key={s.id}
                          id={s.id}
                          {...this.props}
                          value={s.id}
                        >
                          {s.siteNumber}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.handleFieldChange}
                      id="date"
                      // placeholder="date"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input
                      type="time"
                      className="form-control"
                      value={this.state.time}
                      onChange={this.handleFieldChange}
                      id="time"
                      placeholder="time"
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

              <button className="logMyShot" onClick={this.constructNewShot}>
                Log my Shot!
              </button>
              {/* need to change onclick here above*/}
              <button className="cancelMyShot" onClick={this.toggle}>
                Cancel
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </section>
    );
  }
}