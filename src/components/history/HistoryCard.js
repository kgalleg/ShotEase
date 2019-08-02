import React, { Component } from 'react'
import SyringeBlue from "./SyringeBlue.png"
import "./historycard.css"
import EditShot from "../editShot/EditShot"

export default class HistoryCard extends Component {
    render() {

        return (

      <div key={this.props.singleShot.id} className="history-card">
        <div className="card-body-history">
          <div className="card-title-history">
          <img src ={SyringeBlue} className="syringeBlue" alt="syringe"/>

{/* //this.props.shotArea.map */}


            <p>Shot Area Name:{this.props.shotAreas.nameofArea}</p>
            <p>Shot Area Id: {this.props.singleShot.shotAreaId}</p>
            {/* <Link className="nav-link" to={this.props.article.url}>Article Link</Link> */}
            <p>Shot Site: {this.props.singleShot.shotSiteId}</p>
            <p>Medication: {this.props.singleShot.medication}</p>
            {/* <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push(`/history/${this.props.singleShot.id}/edit`);
              }}
            >
              Edit
            </button> */}
            <EditShot key={this.props.singleShot} singleShot={this.props.singleShot}/>
            <button
              type="button"
              className="btn btn-success"
              onClick={() =>
                this.props.deleteShot(this.props.singleShot.id)}

            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
