import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppImages from "../Assets";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EmployeeCreate = () => {
    // const initialFormValues = {
    //     empid: '',
    //     empName: '',
    //     empPhone: '',
    //     empEmail: '',
    //     location: '',
    // }

    // const [formValues, setFormValues] = useState(initialFormValues);
    // const handleInput = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({
    //         ...formValues,
    //         [name]: value
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    // console.log("Form Values =", formValues);

    const navigate = useNavigate();
    const [empId, setEmpId] = useState("");
    const [empName, setEmpName] = useState("");
    const [empEmail, setEmpEmail] = useState("");
    const [empPhone, setEmpPhone] = useState("");
    const [empLocation, setEmpLocation] = useState("");
    const [active, activeChange] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/employees", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                empId: empId,
                name: empName,
                location: empLocation,
                phone: empPhone,
                email: empEmail
            })
        })
        .then((response) => {
            console.log('response = ', response);
            if (response.status === 201) {
                setTimeout(() => {
                    navigate('/employees-dashboard/list');
                }, 3000);
                toast.success("New Employee Registered Successfully !", {
                    closeButton: true
                });
            }
        })
        .catch((error) => {
            console.log(error.message)
            toast.error(error.message, {
                closeButton: true
            });
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12">
                    <h5> Employees Create  <i className="bi bi-receipt"></i> </h5>
                    <form className="alert alert-primary" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="empId" className="form-label">Enter Employee Id</label>
                            <input
                                type="text"
                                id="empId"
                                name="empId"
                                value={empId}
                                maxLength={6}
                                className="form-control"
                                onChange={(e) => setEmpId(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="empName" className="form-label">Employee Name</label>
                            <input
                                type="text"
                                id="empName"
                                name="empName"
                                value={empName}
                                className="form-control"
                                onChange={(e) => setEmpName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="empEmail" className="form-label">Employee Email</label>
                            <input
                                type="text"
                                id="empEmail"
                                name="empEmail"
                                value={empEmail}
                                className="form-control"
                                onChange={(e) => setEmpEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="empPhone" className="form-label">Employee Phone</label>
                            <input
                                type="text"
                                id="empPhone"
                                name="empPhone"
                                value={empPhone}
                                className="form-control"
                                onChange={(e) => setEmpPhone(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Address</label>
                            <input
                                type="text"
                                id="location"
                                name="empLocation"
                                value={empLocation}
                                className="form-control"
                                onChange={(e) => setEmpLocation(e.target.value)}
                            />
                        </div>

                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="jsCheckbox"
                                name="termsCondition"
                                className="form-check-input"
                                value="javascript"
                                checked={active}
                                onChange={(e) => activeChange(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="jsCheckbox">
                                I agree with terms and conditions
                            </label>
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary btn-sm">Submit Application</button>
                            &nbsp;
                            <Link to="/employees-dashboard" className="btn btn-dark btn-sm">Back</Link>
                        </div>
                    </form>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <figure className="img-thumbnail">
                        <img src={AppImages.DonaPaulaBeach} alt="DonaPaulaBeach" className="img-fluid" />
                        <figcaption>Dona Paula Beach, Goa India</figcaption>
                    </figure>
                </div>
            </div>
            <ToastContainer position="top-right" />
        </div>
    )
}

export default EmployeeCreate;