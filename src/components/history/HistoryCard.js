import React, { Component } from 'react'
import SyringeBlue from "./SyringeBlue.png"
import "./historycard.css"
import { Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import EditShot from "../editShot/EditShot"

export default class HistoryCard extends Component {
    render() {

        return (
    //       <div>
    //   <Card>
    //     <CardHeader>Header</CardHeader>
    //     <CardBody>
    //       <CardTitle>Special Title Treatment</CardTitle>
    //       <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    //       <Button>Go somewhere</Button>
    //     </CardBody>
    //     <CardFooter>Footer</CardFooter>
    // <CardFooter className="text-muted">Footer</CardFooter>
    //   </Card>
    // </div>


      <div key={this.props.singleShot.id} className="history-card">
        <div className="card-body-history">

            <section className="mySection">
              <div className="myHeader">
              <CardHeader> <img src ={SyringeBlue} className="syringeBlue" alt="syringe"/></CardHeader>
            </div>



            <div className="card-title-history">
         <p>Shot Area Name:{this.props.shotAreas.nameofArea}</p>
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
            <EditShot key={this.props.singleShot} singleShot={this.props.singleShot}/>
            <button
              type="button"
              className="deleteButton myButton"
              onClick={() =>
                this.props.deleteShot(this.props.singleShot.id)}
                // <Button color="secondary" size="sm">Small Button</Button>
            >
              Delete
            </button>

          </div>
          </section>
        </div>
      </div>
    );
  }
}
