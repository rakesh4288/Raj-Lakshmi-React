import React from "react";
import ArrayState from "../Components/ArrayState";
import ContactList from "../Components/ContactList";
import ToDoListCrud from "../Components/ToDoListCrud";

const ToDoDashboard = () => {
    return (
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

            <section className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <ArrayState />
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <ContactList />
                    </div>
                </div>
            </section>

            <hr className="bg-danger" />

            <section className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <ToDoListCrud />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ToDoDashboard;