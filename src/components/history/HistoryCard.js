import React, { Component } from "react";
import SyringeBlue from "./SyringeBlue.png";
import "./historycard.css";
import EditShot from "../editShot/EditShot";

export default class HistoryCard extends Component {
  render() {
    console.log("singleShot history card", this.props.singleShot)
    return (
      <React.Fragment>
        <div key={this.props.singleShot.id} className="history-card">
          <div className="card-body-history">
            {/* <section className="mySection"> */}
            {/* <div > */}
            <div className="myHeader">
              {" "}
              <img src={SyringeBlue} className="syringeBlue" alt="syringe" />
            </div>
            {/* </div> */}

            <div className="card-title-history">
            <p><strong>Date:</strong> {this.props.singleShot.date}</p>
              <p><strong>Shot Area: </strong>{this.props.singleShot.shotArea.nameOfArea}</p>
              
              {/* <Link className="nav-link" to={this.props.article.url}>Article Link</Link> */}
              <p><strong>Shot Site:</strong> {this.props.singleShot.shotSiteId}</p>
              <p><strong>Medication:</strong> {this.props.singleShot.medication}</p>
              <p><strong>Time:</strong> {this.props.singleShot.time}</p>
              <p><strong>Notes:</strong> {this.props.singleShot.notes}</p>
              {/* <Button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push(`/history/${this.props.singleShot.id}/edit`);
              }}
            >
              Edit
            </Button> */}
              <EditShot
                key={this.props.singleShot}
                singleShot={this.props.singleShot}
                updatedShot={this.props.updatedShot}
                shotAreas={this.props.shotArea}
              />

              <button
                type="button"
                className="deleteButton myButton"
                onClick={() => this.props.deleteShot(this.props.singleShot.id)}
              >
                Delete
              </button>
            </div>
            {/* </section> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
