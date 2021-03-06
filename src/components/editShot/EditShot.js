import React, { Component } from "react";
// import "../logShot/logShot.css"
import "../history/historycard.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { withRouter } from "react-router";
import APIManager from "../../modules/APIManager";

class EditShot extends Component {
  state = {
    modal: false,
    shotAreaId: "",
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

  updateExistingShot = evt => {
    console.log(this.props);
    // if (this.state.shotSite === "" || this.state.date === "") {
    //     window.alert("Please fill out all fields!");
    // } else
    // {
    evt.preventDefault();
    const editedShot = {
      // modal: false,
      id: this.props.singleShot.id,
      shotAreaId: this.state.shotAreaId,
      shotSiteId: this.state.shotSiteId,
      medication: this.state.medication,
      notes: this.state.notes,
      date: this.state.date,
      time: this.state.time,
      userId: +sessionStorage.getItem("credentials")
    };

    // Create the shot and redirect user to home or wherever I add here
    this.props.updatedShot(editedShot);
    //  .then(() => this.props.history.push(`/history/${this.props.match.params.singleShotId}/edit`))
    this.toggle();
  };

  myProps = this.props.singleShot;
  componentDidMount() {
    console.log(this.props);
    if (this.props.singleShot !== undefined) {
      // console.log(this.props.singleShot);
      // console.log("The edit component has mounted");
      APIManager.get("oneShot", this.props.singleShot.id)
        .then(oneShot => {
          this.setState({
            shotAreaId: oneShot.shotAreaId,
            shotSiteId: oneShot.shotSiteId,
            medication: oneShot.medication,
            notes: oneShot.notes,
            date: oneShot.date,
            time: oneShot.time
            // userId: +(sessionStorage.getItem("credentials"))
          });
        });
    }
  }

  componentWillReceiveProps() {}

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      // medication: this.state.oneShot.medication,
      //       notes: this.state.oneShot.notes,
      //       date: this.state.oneShot.date,
      //       time: this.state.oneShot.time

    }));
  };

  render() {
    console.log("the edit modal has rendered");

    //   console.log(sessionStorage.getItem("credentials"))
    return (
      <section className="ShotSiteLocation">
        <div>
          <button onClick={this.toggle} className="myButton editButton">
            Edit
          </button>
          {/* <div className={this.props.shotAreas.name}></div> */}
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Edit your shot</ModalHeader>
            <ModalBody>
              <React.Fragment>
                <div className="testingimage">
                  {" "}
                  <img
                    src={this.props.singleShot.shotArea.imagePath}
                    className="imageofbodypart"
                    alt="bodypart"
                  />{" "}
                </div>
                <form className="addOneShot">

<div className="form-group">
                    <label htmlFor="shotArea"> </label>
                    <select
                      // defaultValue=""
                      required
                      className="form-control"
                      value={this.state.shotAreaId}
                      onChange={this.handleFieldChange}
                      id="shotAreaId"
                      // placeholder="shot site"
                    >
                      <option value="">Select shot site number</option>
                      {this.props.shotAreas.map(s => (
                        <option
                          key={s.id}
                          id={s.id}
                          {...this.props}
                          value={s.id}
                        >
                          {s.nameOfArea}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="shotSite"> </label>
                    <select
                      // defaultValue=""
                      required
                      className="form-control"
                      value={this.state.shotSiteId}
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
              <button
                type="submit"
                className="submitButtonInEdit"
                onClick={this.updateExistingShot}
              >
                Submit
              </button>

              <button className="cancelButtonInEdit" onClick={this.toggle}>
                Cancel
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </section>
    );
  }
}

export default withRouter(EditShot);
