import React, { Component } from "react";
import SyringeBlue from "./SyringeBlue.png";
import "./historycard.css";
import EditShot from "../editShot/EditShot";

export default class HistoryCard extends Component {
  render() {
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
              <p>Shot Area Name:{this.props.singleShot.shotArea.nameOfArea}</p>
              <p>Shot Area Id: {this.props.singleShot.shotAreaId}</p>
              {/* <Link className="nav-link" to={this.props.article.url}>Article Link</Link> */}
              <p>Shot Site Id: {this.props.singleShot.shotSiteId}</p>
              <p>Medication: {this.props.singleShot.medication}</p>
              <p>Date: {this.props.singleShot.date}</p>
              <p>Time: {this.props.singleShot.time}</p>
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
                shotAreas={this.props.shotAreas}
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
