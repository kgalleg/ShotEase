import React, { Component } from 'react'
import HistoryCard from "./HistoryCard"


export default class HistoryList extends Component {
    render() {
        return (
            <React.Fragment>

            <section className="filterShot">
              {this.props.oneShot.filter(
                  oneShot =>
                    +(oneShot.userId) ===
                    +(sessionStorage.getItem("credentials"))
                )
                .map(singleShot => (
                  <HistoryCard key={this.props.oneShot.id} singleShot={singleShot} {...this.props}/>
                  //...this props is only for history... either remove it or change the oneShot={oneShot} to sigleShot {singleShot}
                ))}
            </section>
          </React.Fragment>
        )
    }
}
