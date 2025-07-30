import React, { useState } from 'react';
import { postUserData } from '../Global/GlobalApi';

const SimpleUserForm = () => {
    const initialValue = {
        name: '',
        age: '',
        salary: '',
        email: ''
    }

    const [formValue, setFormValue] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const [responseData, setResponseData] = useState([]);
    const handleInput = (e) => {
        const {name, value} = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    console.log('formValue =', formValue);

    const handleSubmit = (e) => {
        e.preventDefault();
        const valid = formValidation();
        console.log('handleSubmit valid =', valid);
        if(valid) {
            submitForm();
        } else {
            console.log('Unable to submit form');
        }
    }

    const formValidation = () => {
        let errors = {}
        const userNameRegex = /^[A-Za-z ]+$/;
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const ageRegex = /^\d{2}$/;
        const salaryRegex = /^\d{6}$/;
        
        if(formValue.name === ''){
            errors.name = 'This field is required !';
        } else if(!userNameRegex.test(formValue.name)) {
            errors.name = 'Only alphabet is allowed !';
        }

        // if(formValue.age === '') {
        //     errors.age = 'This field is required !';
        // } else if(!(isNaN(formValue.age))){
        //     console.log('its number');
        // } else {
        //     errors.age = 'Age is not Valid !';
        // }

        if(formValue.age === '') {
            errors.age = 'This field is required !';
        } else if(!ageRegex.test(formValue.age)) {
            errors.age = 'Please enter valid age !';
        }

        // if(!(isNaN(formValue.age))) {
        //     console.log('its number');
        // } else {
        //     console.log('its string');
        // }

        if(formValue.salary === '') {
            errors.salary = 'This field is required !'
        } else if(!salaryRegex.test(formValue.salary)) {
            errors.salary = 'Please enter valid & maximum 6 digit salary'
        }

        if(formValue.email === '') {
            errors.email = 'This field is required !';
        } else if(!emailRegex.test(formValue.email)) {
            errors.email = 'Please enter valid email !';
        }

        setFormError({...errors});
        const errorList = Object.keys(errors);
        if(errorList.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    const submitForm = async () => {
        const res = await postUserData({formValue});
        if(res.status === "success") {
            const resArray = [];
            resArray.push(res);
            console.log('resArray[0] =', resArray[0].data);
            setResponseData(resArray[0]?.data)
            setFormValue({
                name: '',
                age: '',
                salary: '',
                email: ''
            })
        } else {
            console.log('postUserData failed')
        }
    }
    return (
        <>
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12'>
                <form className='lightGreenBG rounded shadow-sm p-3' onSubmit={handleSubmit}>
                    <h5>User Registration:</h5>
                    <div className='mb-3'>
                        <label htmlFor="name" className="form-label"> Name:</label>
                        <input type='text' className='form-control' id='name' name="name" value={formValue.name} onChange={handleInput} />
                        { formError && ( <div className='text-danger'>{formError.name}</div>)}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="age" className="form-label"> Age:</label>
                        <input type='text' className='form-control' id='age' name="age" value={formValue.age} onChange={handleInput} />
                        { formError && ( <div className='text-danger'>{formError.age}</div>)}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="salary" className="form-label"> Salary:</label>
                        <input type='text' className='form-control' id='salary' name="salary" value={formValue.salary} onChange={handleInput} />
                        { formError && ( <div className='text-danger'>{formError.salary}</div>)}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email" className="form-label"> Email:</label>
                        <input type='text' className='form-control' id='email' name="email" value={formValue.email} onChange={handleInput} />
                        { formError && ( <div className='text-danger'>{formError.name}</div>)}
                    </div>

                    <div className="mb-3">
                        <button type='submit' className='btn btn-dark btn-sm'>Submit</button>
                    </div>
                </form>
            </div>
            
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Salary</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{responseData?.id}</td>
                            <td>{responseData?.name}</td>
                            <td>{responseData?.age}</td>
                            <td>{responseData?.salary}</td>
                            <td>{responseData?.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SimpleUserForm;