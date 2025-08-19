import { useState } from "react";
import AppImages from "../Assets";
import { Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import { addNewStudent } from "../Features/StudentContactSlice";
// useSelector provides the access of reducer from where we can fetch the data

const ReduxCrudCreate = () => {
    const studentData = useSelector((state) => state.StudentStore);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialFormValues = {
        studentName: '',
        studentEmail: '',
        studentPhone: '',
        city: ''
    }
    
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formError, setFormError] = useState({});

    const handleInput = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    console.log('setFormValues =', formValues);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = formValidation();
        console.log('isFormValid =', isFormValid);
        if(isFormValid) {
            dispatch(addNewStudent({
                id: studentData[studentData.length - 1].id + 1,
                studentName: formValues.studentName,
                studentEmail: formValues.studentEmail,
                studentPhone: formValues.studentPhone,
                city: formValues.city
            }));
            navigate('/simple-crud-using-redux-toolkit');
        } else {
            console.log('Not able to submit form');
        }
    }

    const formValidation = () => {
        const errors = {}
        const nameRegex = /^[A-Za-z ]+$/;
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const phoneRegex = /^\d{10}$/;
        if(formValues.studentName === '') {
            errors.studentName = "This field is requird !"
        } else if(!nameRegex.test(formValues.studentName)) {
            errors.studentName = "Please enter only aphabet"
        }

        if(formValues.studentEmail === '') {
            errors.studentEmail = "Please enter Email !"
        } else if(!emailRegex.test(formValues.studentEmail)) {
            errors.studentEmail = "Please enter valid Email only !"
        }

        if(formValues.studentPhone === '') {
            errors.studentPhone = "Phone number is requried field !"
        } else if(!phoneRegex.test(formValues.studentPhone)){
            errors.studentPhone = "Please enter 10 digit phone number only !"
        }

        if(formValues.city === '') {
            errors.city = "Please select your city !"
        }

        setFormError({...errors});
        const errorKeys = Object.keys(errors);
        console.log('errorKeys =', errorKeys);
        if(errorKeys.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading">
                                Crud Operation with React Redux Toolkit 
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="redux-crud">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <h5>Add New Student Contact:</h5>
                                <form className='alert alert-info' onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor="student-name" className="form-label">Name</label>
                                    <input type='text' className='form-control' id='student-name' name="studentName" onChange={handleInput} />

                                    {
                                        formError && (<div className="text-danger">{formError.studentName}</div>)
                                    }
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="student-email" className="form-label">Email</label>
                                    <input type='text' className='form-control' id='student-email' name="studentEmail" onChange={handleInput}/>

                                    {
                                        formError && (<div className="text-danger">{formError.studentEmail}</div>)
                                    }
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="student-phone" className="form-label">Phone</label>
                                    <input type='text' className='form-control' id='student-email' name="studentPhone" onChange={handleInput}/>

                                    {
                                        formError && (<div className="text-danger">{formError.studentPhone}</div>)
                                    }
                                </div>

                                 <div className='mb-3'>
                                    <label htmlFor="student-city" className="form-label">City</label>
                                    {/* <input type='text' className='form-control' id='student-email' name="city" onChange={handleInput}/> */}

                                    <select className="form-select" name='city' onChange={handleInput}>
                                        <option value=''>Select City</option>
                                        <option value='Pune'>Pune</option>
                                        <option value='Bhopal'>Bhopal</option>
                                        <option value='Indore'>Indore</option>
                                        <option value='Gwalior'>Gwalior</option>
                                        <option value='Jabalpur'>Jabalpur</option>
                                        <option value='Ujjain'>Ujjain</option>
                                    </select>

                                    {
                                        formError && (<div className="text-danger">{formError.city}</div>)
                                    }
                                </div>

                                <div className="mb-3">
                                    <button type='submit' className='btn btn-primary btn-sm'>Add New Student <Icon.Plus /></button>
                                </div>
                            </form>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/DOkSU3yg4vQ?si=IIlp9pUyfpKzrV0o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="lightGreenBG">
                                <h6>Steps for configure Redux:</h6>
                                <ul>
                                    <li>
                                        Step 1: Firstly we need to create the store where we configure the store
                                    </li>

                                    <li>
                                        Step 2: Next step would be - go to the index.js file and Wrap the react app by using provider and add the store attribute and assign the store configuration. here is the syntax:
                                        <pre className='aleet alert-warning'>
                                            <code>import { "Provider" } from "react-redux";</code>
                                        </pre>
                                        
                                        <pre className='aleet alert-warning'>
                                            <code>import { "store" } from "./redux/store";</code>
                                        </pre>
                                        
                                        <p>
                                            <img src={AppImages.ReduxProviderSteps} alt={AppImages.ReduxProviderSteps} className='img-fluid'/>
                                        </p>
                                    </li>
                                    
                                    <li>
                                        Step 3: Create the feature slice, This is the actual file where you need to create feature about common States.
                                    </li>
                                    
                                    <li>
                                        Step 4: Register the slice feature with store.js file., This file needs all the features slice registration at one place. Because a store can have multiple features based on your project requirement.
                                    </li>
                                    
                                    <li>
                                        Step 5: Later you can use the useSelector() hook and this hook need to import by react-redux for getting the latest data from the store in your whole react app
                                    </li>
                                    <li>
                                        Step 5: And if you wanted to update the state then you need to use the useDispatch() hook and pass the action to the reducer, and finally reducer will take your action with payload and perform the opertion based on your request.
                                    </li>
                                </ul>

                                <h6>
                                    Best tutorial for Setup: <Link to="https://whataboutcoding.com/redux-toolkit-tutorial/" target="_blank">https://whataboutcoding.com/redux-toolkit-tutorial/</Link> 
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReduxCrudCreate;