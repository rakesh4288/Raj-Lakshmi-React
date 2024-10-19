import React, { useEffect, useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeList = () => {
    const navigate = useNavigate();
    const [empData, setEmpData] = useState([]);
    const fetchingEmpData = async () => {
        const url = "http://localhost:8000/employees";
        try {
            const res = await fetch(url);
            const response = await res.json();
            console.log("fetchingEmpData response =", response);
            setEmpData(response);
        } catch (error) {
            console.log("fetchingEmpData Error Block =", error);
        }
    }

    const handleEmpEdit = (id) => {
        navigate('/employees-dashboard/edit/' + id);
    }

    const handleEmpDetails = (id) => {
        navigate('/employees-dashboard/details/' + id);
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure want to delete ?")) {
            fetch("http://localhost:8000/employees/" + id, {
                method: "DELETE"
            }).then((response) => {
                if (response.status === 200) {
                    fetchingEmpData();
                    toast.success("Employee Deleted Successfully !", {
                        closeButton: true
                    });
                }
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
    useEffect(() => {
        fetchingEmpData();
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h5>Employees List <Icon.List /></h5>

                    <table className="table table-striped">
                        <thead>
                            <tr className="bg-dark text-white">
                                <td>SL No</td>
                                <td>Employee Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td align="right">Action</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                empData &&
                                empData.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.empId}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td align="right">
                                                <button className="btn" onClick={() => { handleEmpEdit(item.id) }}> <Icon.Pencil /> </button>
                                                <button className="btn" onClick={() => { handleEmpDetails(item.id) }}> <Icon.Eye /> </button>
                                                <button className="btn" onClick={() => { handleDelete(item.id) }}> <Icon.Trash /> </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer position="top-right" />
        </div>
    )
}

export default EmployeeList;