import React, {useState, useEffect} from "react";
import * as Icon from 'react-bootstrap-icons';

const SimpleForm = () => {
    const initialFormValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleInput = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(formValidation(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log('Form Errors =', formError);
        if(Object.keys(formError).length === 0 && isSubmit){
            console.log('Form data is ready =', formValues);
            console.log('Form SUbmitted Successfully !');
            setFormValues({
                username: '',
                email: '',
                password: '',
            });
        }
    }, [formError]);

    const formValidation = (values) => {
        const errors = {}
        // const emailRegex = /^\S+@\S+\.\S+$/
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!values.username){
            errors.username = 'User Name is required field !';
        }

        if(!values.email){
            errors.email = 'Email is required field !';
        } else if (!emailRegex.test(values.email)){
            errors.email = "Email is not valid !";
        }

        if(!values.password){
            errors.password = 'Password is required field !';
        } else if (values.password.length < 4) {
            errors.password = 'Password should not be less than 4 characters';
        } else if (values.password.length > 10) {
            errors.password = 'Password should not be excedded more than 10 characters';
        }
        
        if(!values.confirmPassword) {
            errors.confirmPassword = 'Confirm Password is required field !';
        }

        if(values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Password is not matching !';
        }
        return errors;
    }
    return (
        <form className="alert alert-primary" onSubmit={handleSubmit}>
            <h5>Sample Registration Form <Icon.Receipt /> </h5>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">Enter Your Name</label>
                <input
                    type="text"
                    id="userName"
                    name="username"
                    className="form-control"
                    value={formValues.username}
                    onChange={handleInput}
                />
                {formError && (<div className="text-danger">{formError.username}</div>)}
            </div>

            <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">Enter Your Email</label>
                <input
                    type="text"
                    id="userEmail"
                    name="email"
                    className="form-control"
                    value={formValues.email}
                    onChange={handleInput}
                />

                {formError && (<div className="text-danger">{formError.email}</div>)}
            </div>

            <div className="mb-3">
                <label htmlFor="userPassword" className="form-label">Enter Password</label>
                <input
                    type="password"
                    id="userPassword"
                    name="password"
                    className="form-control"
                    value={formValues.password}
                    onChange={handleInput}
                />
                {formError && (<div className="text-danger">{formError.password}</div>)}
            </div>

            <div className="mb-3">
                <label htmlFor="userConfirmPassword" className="form-label">Enter Password</label>
                <input
                    type="password"
                    id="userConfirmPassword"
                    name="confirmPassword"
                    className="form-control"
                    value={formValues.confirmPassword}
                    onChange={handleInput}
                />
                {formError && (<div className="text-danger">{formError.confirmPassword}</div>)}
            </div>

            <div className="mb-3">
                <button type="submit" className="btn btn-primary btn-sm">Submit Application</button>
            </div>
        </form>
    )
}

export default SimpleForm;