import React, { Component } from "react";
import HistoryCard from "./HistoryCard";
import Logo from "./Logo.png";

export default class HistoryList extends Component {
  render() {
    console.log("oneShot", this.props.oneShot)
    return (
      <React.Fragment>
        <div>
          <header>
            <img src={Logo} className="image--mainLogo" alt="main logo" />
          </header>
          <h4 className="historyLog">History Log</h4>
        </div>
        <section className="filterShot">
          {this.props.oneShot
            .filter(
              oneShot =>
                +oneShot.userId === +sessionStorage.getItem("credentials")
            )
            .map(singleShot => (
              <HistoryCard
                key={this.props.oneShot.id}
                singleShot={singleShot}
                {...this.props}
              />
              //...this props is only for history... either remove it or change the oneShot={oneShot} to sigleShot {singleShot}
            ))}
        </section>
      </React.Fragment>
    );
  }
}
