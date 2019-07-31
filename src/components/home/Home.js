import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';
import Logoorange from "./Logoorange.png"
import Syringe from "./Syringe.png"
import "./home.css"

// const home =
// {
//     background-Color: '#DD6359',
// }


export default class Home extends Component {

    // style={home}

    render() {
        return (
            <React.Fragment >
                <div >
 <div><img src ={Logoorange} className="icon--orange" alt="orangelogo"/></div>
            <div className ="button-area">
                <Link to="/shot"><Button className="home-button"  size="lg">Log a Shot!</Button></Link>

                <div><img src ={Syringe} className="icon--syringe" alt="syringe"/></div>

                <Link to="/history"><Button className="home-button"  size="lg">History Log!</Button></Link>
            </div>
            </div>
            </React.Fragment>
        )
    }
}