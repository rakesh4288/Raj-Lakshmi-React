import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import AppImages from "../Assets";
import { toast } from 'react-toastify';

const EmployeeEdit = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { id } = params;
    const [empId, setEmpId] = useState("");
    const [empName, setEmpName] = useState("");
    const [empEmail, setEmpEmail] = useState("");
    const [empPhone, setEmpPhone] = useState("");
    const [empLocation, setEmpLocation] = useState("");
    const [active, activeChange] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/employees/" + id)
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                setEmpId(resp.empId);
                setEmpName(resp.name);
                setEmpEmail(resp.email);
                setEmpPhone(resp.phone);
                setEmpLocation(resp.location);
                activeChange(resp.isactive);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/employees/" + id, {
            method: "PUT",
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
            console.log('response =', response);
            if (response.status === 200) {
                setTimeout(() => {
                    navigate('/employees-dashboard/list');
                }, 3000);
                toast.success("Employee Updated Successfully !", {
                    closeButton: true
                });
            }
        })
        .catch((error) => {
            toast.error(error.message, {
                closeButton: true
            });
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div className="img-thumbnail">
                        <h6>Meenakshi Amman Temple</h6>
                        <p>
                            <img src={AppImages.MeenakshiTemple} alt="MeenakshiTemple" className="img-fluid" />
                        </p>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12">
                    <h5>Update Employee <b> {empName}</b> <i className="bi bi-pencil-square" ></i> </h5>
                    <form className="alert alert-success" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="empId" className="form-label">Employee Id</label>
                            <input
                                type="text"
                                id="empId"
                                disabled="disabled"
                                name="empId"
                                value={empId}
                                maxLength={6}
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="empName" className="form-label">Enter Your Name</label>
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
                            <label htmlFor="empEmail" className="form-label">Enter Your Email</label>
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
                            <label htmlFor="empPhone" className="form-label">Enter Your Phone</label>
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
                            <button type="submit" className="btn btn-primary btn-sm">Update Employee</button>
                            &nbsp;
                            <Link to="/employees-dashboard/list" className="btn btn-dark btn-sm">Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeEdit;