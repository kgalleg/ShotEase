import React, { Component } from 'react'
import WholeBody from "./WholeBody.jpg"
import "./logShot.css"
import LogShotModalCard from "./LogShotModalCard"
import Logo from "./Logo.png"


export default class LogShot extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="WholeBody">

            <img src ={Logo} className="image--mainLogo" alt="main logo"/>
            <img src ={WholeBody} className="image--body" alt="whole body"/>


            <section className="images">
            {
                    this.props.shotAreas.map(shotArea =>
                        <LogShotModalCard key={shotArea.id} shotArea={shotArea} {...this.props} />
                    )
                }
                </section>
                </div>
                </React.Fragment>


        )
       }
    }
