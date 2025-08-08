import { useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import { updateStudent } from "../Features/StudentContactSlice";
import ReduxConfiguration from "../Components/ReduxConfiguration";
// useSelector provides the access of reducer from where we can fetch the data

const ReduxCrudUpdate = () => {
    const studentData = useSelector((state) => state.StudentStore);
    console.log('ReduxCrudUpdate studentData =', studentData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    // const studentId = params.id
    // console.log('params =', params);
    console.log('studentId =', id);

    const existingStudent = studentData.filter(item => item.id == id);
    console.log('existingStudent[0] =', existingStudent[0]);
    
    const {studentName, studentEmail, studentPhone, city} = existingStudent[0];
    const initialFormValues = {
        studentName: studentName,
        studentEmail: studentEmail,
        studentPhone: studentPhone,
        city: city
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

    const handleUpdate = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if(isValid) {
            dispatch(updateStudent({
                id: id,
                studentName: formValues.studentName,
                studentEmail: formValues.studentEmail,
                studentPhone: formValues.studentPhone,
                city: formValues.city
            }));
            navigate('/simple-crud-using-redux-toolkit');
        } else {
            console.log('Not able to update the form');
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
                            <h5>Update Existing Student Contact:</h5>
                            <form className='alert alert-info' onSubmit={handleUpdate}>
                                <div className='mb-3'>
                                    <label htmlFor="user-name" className="form-label">Name</label>
                                    <input type='text' className='form-control' id='user-name' name="studentName" value={formValues.studentName} onChange={handleInput} />
                                    {
                                        formError && (<div className="text-danger">{formError.studentName}</div>)
                                    }
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="user-email" className="form-label">Email</label>
                                    <input type='text' className='form-control' id='user-email' name="studentEmail" value={formValues.studentEmail} onChange={handleInput}/>
                                    {
                                        formError && (<div className="text-danger">{formError.studentEmail}</div>)
                                    }
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="user-email" className="form-label">Phone</label>
                                    <input type='text' className='form-control' id='user-email'
                                     name="studentPhone" value={formValues.studentPhone} onChange={handleInput}/>
                                    {
                                        formError && (<div className="text-danger">{formError.studentPhone}</div>)
                                    }
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="user-city" className="form-label">City</label>
                                    {/* <input type='text' className='form-control' id='user-city' name="city" value={formValues.city} onChange={handleInput}/> */}

                                    <select className="form-select" name='city' value={city} onChange={handleInput}>
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
                                    <button type='submit' className='btn btn-primary btn-sm'>Update Student <Icon.MenuUp /></button>
                                    &nbsp; 
                                    <Link to="/simple-crud-using-redux-toolkit" className="btn btn-info btn-sm"> 
                                    Back to Student List <Icon.ArrowBarLeft /> </Link>
                                </div>
                            </form>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/DOkSU3yg4vQ?si=IIlp9pUyfpKzrV0o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                            <ReduxConfiguration />
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-primary"/>
        </div>
    )
}

export default ReduxCrudUpdate;