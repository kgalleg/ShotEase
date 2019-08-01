// This can propbably be deleted


import React, { Component } from 'react';



export default class HistoryList extends Component {

    render() {
        console.log(this.props.oneShot)
        return (
            <React.Fragment>

                {/* <section className="tasks container" >
                    <h1>Task List</h1>
                    </section>
                    <section className="main">
                    <button type="button"
                        onClick={() => this.props.history.push("/tasks/new")}
                        className="btn btn-info mainbutton">
                        Add Task
                    </button>
                    </section> */}

                    <div className="historyLog">
                    {/* <img src ={shoticon?} className="icon--shot5" alt="shot"/> */}
                    {/* {this.props.oneShot.filter(task => oneShot.userId === +(sessionStorage.getItem("credentials")) */}
                    {/* // && task.completionStatus !== true
                    // ) */}

                            <section className="historyLog2">
          {this.props.oneShot
            .filter(
              oneShot =>
                +(oneShot.userId) ===
                +(sessionStorage.getItem("credentials"))
            )
            .map(oneShot => (

                            <div key={this.props.oneShot.id} {...this.props} className="card">
                              <div className="card-body">
                              <div className="card-title">
                              {/* <img src ={clipboard} className="icon--task" alt="task"/> */}
                                {this.props.oneShot.medication} <br />
                                {this.props.oneShot.dosage} <br />
                               <b>Completed:</b> {
                                    this.props.oneShot.date} <br />
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => {
                                        this.props.history.push(`/history/${this.props.oneShot.id}/edit`);

                                    }}
                                >
                                    Edit
                                </button> <br></br>

                                <button
                                    onClick={() => {this.props.deleteShot(this.props.oneShot.id);
                                        this.props.history.push("/home")}}

                                    className="btn btn-secondary card-link">Delete</button>
                            </div>
                            </div>
                    </div>


                        ) )}
                    }
                    </section>
</div>



            </React.Fragment>
        )
    }
}

