import React from "react";
import * as Icon from 'react-bootstrap-icons';
import { Link, Outlet } from 'react-router-dom';

const EmployeeDashboard = () => {
    return (
        <div id="employee-dashboard">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                Employees Crud Knowledge  <Icon.Database />
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="employee-operation">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="float-start">
                                <h6>Here is the command for running json-server</h6>
                                <pre className="alert alert-warning">json-server --watch db.json --port 8000</pre>
                                https://blog.logrocket.com/using-react-toastify-style-toast-messages/ <br/>
                                https://deadsimplechat.com/blog/react-toastify-the-complete-guide/
                            </div>

                            <div className="float-end">
                                <Link className="btn btn-success btn-sm" to="create">Add New +</Link>
                                &nbsp;&nbsp;
                                <Link className="btn btn-success btn-sm" to="list">All Employee List</Link>
                            </div>
                            <div className="clearfix"></div>
                            <hr className="bg-success" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="employee-outlet">
                <Outlet />
            </section>
        </div>
    )
}

export default EmployeeDashboard;