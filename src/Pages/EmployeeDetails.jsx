import React, { useState, useEffect } from "react";
import * as Icon from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
const EmployeeDetails = () => {
    const params = useParams();
    // console.log("params =", params);
    const { id } = params;
    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employees/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    {empdata &&
                        <div>
                            <h5>Full Details of <b>{empdata.name}</b> <Icon.Postcard /> </h5>
                            <table className="table table-striped table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Employee Id</td>
                                        <td>{empdata.empId}</td>
                                    </tr>

                                    <tr>
                                        <td>Name</td>
                                        <td>{empdata.name}</td>
                                    </tr>

                                    <tr>
                                        <td>Email</td>
                                        <td>{empdata.email}</td>
                                    </tr>

                                    <tr>
                                        <td>Phone</td>
                                        <td>{empdata.phone}</td>
                                    </tr>

                                    <tr>
                                        <td>Location</td>
                                        <td>{empdata.location}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <Link className="btn btn-dark btn-sm" to="/employees-dashboard/list">
                                <Icon.ArrowBarLeft /> Back to Listing
                            </Link>
                        </div>
                    }
                </div>

                <div className="col-xl-8 col-lg-8 col-md-5 col-sm-12">
                    image
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetails;