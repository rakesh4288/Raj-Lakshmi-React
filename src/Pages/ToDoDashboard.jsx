import React from "react";
import ArrayState from "../Components/ArrayState";
import ToDoWithArrayOfObject from "../Components/ToDoWithArrayOfObject";

const ToDoDashboard = () => {
    return(
        <div id="to-do-dashboard">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> To Do Operation Dashboard </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <ArrayState />
                        </div>
                    </div>

                    <hr/>

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <ToDoWithArrayOfObject />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ToDoDashboard;