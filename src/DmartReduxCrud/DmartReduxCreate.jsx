import React, { useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import { useDispatch } from "react-redux";
import { createEmployee } from "../Features/DmartEmpSlice";
import { toast } from 'react-toastify';
const DmartReduxCreate = () => {
    const dispatch = useDispatch();
    const initalFormValues = {
        empId: '',
        empName: '',
        empEmail: '',
        empPhone: '',
        empGender: '',
        empAddress: ''
    }
    const [formValues, setFormValues] = useState(initalFormValues);
    const [formError, setFormError] = useState({});
    const handleInput = (e) => {
        const {name, value}= e.target;
        // setFormValues({...formValues, [e.target.name]: e.target.value})
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const formValidation = () => {
        let errors = {}
        const nameRegex = /^[A-Za-z ]+$/;
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const phoneRegex = /^\d{10}$/;
        if(formValues.empId === '') {
            errors.empId = "Employee Id required"
        }
        
        if(formValues.empName === '') {
            errors.empName = "Employee Name required"
        } else if(!nameRegex.test(formValues.empName)) {
            errors.empName = "only alphabet allowed"
        }

        if(formValues.empEmail === '') {
            errors.empEmail = "Email is required"
        } else if(!emailRegex.test(formValues.empEmail)){
            errors.empEmail = 'Please enter correct Email !!'
        }

        if(formValues.empPhone === '') {
            errors.empPhone = "Phone number is required"
        } else if(!phoneRegex.test(formValues.empPhone)) {
            errors.empPhone = "Please enter correct Phone number"
        }

        if(formValues.empGender === '') {
            errors.empGender = "Please choose Gander"
        }

        if(formValues.empCity === '') {
            errors.empCity = "Current City required !"
        }

        if(formValues.empAddress === '') {
            errors.empAddress = "Employee Address is needed !"
        }
        
        setFormError({...errors})
        const errorKeys = Object.keys(errors);
        console.log('errorKeys =', errorKeys);

        if(errorKeys.length === 0) {
            // console.log('No Errors Keys');
            return true;
        } else {
            // console.log('Yes we have errors Keys');
            return false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        formValidation();
        // dispatch(createEmployee(empObject));
        const isValid = formValidation();
        if(isValid) {
            dispatch(createEmployee(formValues));
            toast.success("Form Submitted Succesfully");
            setFormValues({
                empId: '',
                empName: '',
                empEmail: '',
                empPhone: '',
                empGender: '',
                empCity: '',
                empAddress: ''
            });
        }
    }
    console.log('formError =', formError);
    console.log('formValues =', formValues);

    // toast.error("This is Error Message");
    // toast.warning("This is Warning Message");
    return(
        <div className="container" id="student-redux-create">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <h5> Dmart Employee Create  <Icon.Receipt /></h5>
                        <form className="alert alert-primary" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="empId" className="form-label">Emp Id</label>
                                <input type="text" id="empId" name="empId" className="form-control" value={formValues.empId} onChange={handleInput}
                                />
                                {formError && ( <div className="text-danger">{formError.empId}</div> )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="empName" className="form-label">Name</label>
                                <input type="text" id="empName" name="empName" className="form-control" value={formValues.empName} onChange={handleInput}
                                />
                                {formError && ( <div className="text-danger">{formError.empName}</div> )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="empEmail" className="form-label">Email</label>
                                <input type="text" id="empEmail" name="empEmail" className="form-control" value={formValues.empEmail} onChange={handleInput}
                                />
                                {formError && ( <div className="text-danger">{formError.empEmail}</div> )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="empPhone" className="form-label">Phone</label>
                                <input type="text" id="empPhone" name="empPhone" className="form-control" value={formValues.empPhone} onChange={handleInput}
                                />
                                {formError && ( <div className="text-danger">{formError.empPhone}</div> )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label" style={{display: "block"}}>Select Gender</label>
                                <div className="form-check float-start">
                                    <input className="form-check-input" type="radio" name="empGender" id="empMale" value="male" onChange={handleInput} />
                                    <label className="form-check-label" htmlFor="empMale"> Male </label>
                                </div>

                                <div className="form-check float-start" style={{paddingLeft: "30px"}}>
                                    <input className="form-check-input" type="radio" name="empGender" id="empFemale" value="female" onChange={handleInput} />
                                    <label className="form-check-label" htmlFor="empFemale"> Female</label>
                                </div>
                                
                                <div style={{clear: 'both'}}></div>
                                
                                <div>
                                    {formError && ( <div className="text-danger">{formError.empGender}</div> )}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="empCity" className="form-label">Current City</label>
                                <input type="text" id="empCity" name="empCity" className="form-control" value={formValues.empCity} onChange={handleInput}
                                />
                                {formError && ( <div className="text-danger">{formError.empCity}</div> )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="empAddress" className="form-label">Full Address</label>
                                <textarea id="empAddress" name="empAddress" className="form-control" value={formValues.empAddress} onChange={handleInput}></textarea>
                                {formError && ( <div className="text-danger">{formError.empAddress}</div> )}
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    id="jsCheckbox"
                                    name="termsCondition"
                                    className="form-check-input"
                                    onChange={handleInput}
                                />
                                <label className="form-check-label" htmlFor="jsCheckbox">
                                    I agree with terms and conditions
                                </label>
                            </div>

                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary btn-sm">Submit Application</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default DmartReduxCreate;