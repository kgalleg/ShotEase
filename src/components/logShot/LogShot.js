import React, { Component } from 'react'
import WholeBody from "./WholeBody.jpg"
import "./logShot.css"
import LogShotModalCard from "./LogShotModalCard"


export default class LogShot extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="WholeBody">
                <img src ={WholeBody} className="image--body" alt="whole body"/>
            </div>

            <section className="images">
            {/* <div className="test" onClick={this.toggle}>click on me</div> */}
                {
                    this.props.shotAreas.map(shotArea =>
                        <LogShotModalCard key={shotArea.id} shotArea={shotArea} {...this.props} />
                    )
                }
                </section>
                </React.Fragment>


        )
       }
    }

    // key={shotArea.imagePath}