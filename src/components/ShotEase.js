    import React, { Component } from "react"
    import NavBar from "./nav/NavBar"
    import ApplicationViews from "./ApplicationViews"
    import IsAuth from "../components/authentication/IsAuth"
    import "./shotEase.css"
    // import "bootstrap/dist/css/bootstrap.min.css"


    export default class ShotEase extends Component {
            // a function that return true if the session Storage object contains the key credentials and false if it does not.
            isAuthenticated = () => sessionStorage.getItem("credentials") !== null


            state = {
              authTrigger: this.isAuthenticated()
            }

            // a function that can be passed down to a component to trigger a render.
           setAuth = () => {
             this.setState({ authTrigger: this.isAuthenticated() })
           }
            render() {
              return ( <React.Fragment>

                  <IsAuth isAuthenticated={this.isAuthenticated} setAuth={this.setAuth} />

                </React.Fragment>
              )
            }
          }



    // render() {
        //     return (
        //         <React.Fragment>
        //             <NavBar />
        //             <ApplicationViews />
        //         </React.Fragment>
        //     )
        // }