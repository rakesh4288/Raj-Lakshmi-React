import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EmployeeList = () => {
    const navigate = useNavigate();
    const [empData, setEmpData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchingEmpData = async () => {
        const url = "http://localhost:8000/employees";
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const response = await res.json();
            setEmpData(response);
            setIsLoading(false);
        } catch (error) {
            toast.error(error, {
                closeButton: true
            });
            setIsLoading(false);
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
            }).catch((error) => {
                toast.error(error.message, {
                    closeButton: true
                });
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
                    <h5>Employees List <i className="bi bi-list-ul"></i></h5>
                    {isLoading && (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                    {
                       empData.length < 1 ? (
                        <div className="alert alert-danger"> No records available !! </div>
                       ) : (
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
                                                <button className="btn" onClick={() => { handleEmpEdit(item.id) }}> <i className="bi bi-pencil-square" ></i> </button>
                                                <button className="btn" onClick={() => { handleEmpDetails(item.id) }}> <i className="bi bi-eye"></i></button>
                                                <button className="btn" onClick={() => { handleDelete(item.id) }}> <i className="bi bi-trash" ></i> </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                       ) 
                    }
                </div>
            </div>
        </div>
    )
}

export default EmployeeList;