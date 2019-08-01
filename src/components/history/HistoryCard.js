import React, { Component } from 'react'

export default class HistoryCard extends Component {
    render() {
        console.log(this.props.singleShot)
        return (

      <div key={this.props.singleShot.id} className="history-card">
        <div className="card-body-history">
          <div className="card-title-history">
            <p>{this.props.singleShot.shotArea}</p>
            {/* <Link className="nav-link" to={this.props.article.url}>Article Link</Link> */}
            <p>Shot Site: {this.props.singleShot.shotSite}</p>
            <p>Shot Area: {this.props.singleShot.medication}</p>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push(`/history/${this.props.history.id}/edit`);
              }}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() =>
                this.props.deleteShot(this.props.singleShot.id)}
                // this.props.history.push("/home");

              className="card-link"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
