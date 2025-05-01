import React, { useState, useEffect } from "react";
import * as Icon from 'react-bootstrap-icons';
import SimpleForm from "../Components/SimpleForm";
import AddRemoveItem from "../Components/AddRemoveItem";

const CompleteFormPage = () => {
    const intialValues = {
        username: '',
        email: '',
        occupation: '',
        gender: '',
        languages: []
    }

    const [formData, setFormData] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === 'languages') {
            const copy = { ...formData }
            if (e.target.checked) {
                copy.languages.push(e.target.value)
            } else {
                copy.languages = copy.languages.filter((item) => item !== e.target.value);
            }
            setFormData(copy);
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(formValidation(formData));
        setIsSubmit(true)
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // Here you can make your API calls
            console.log('Form data is ready =', formData);
            console.log('Form SUbmitted Successfully !');
            setFormData({
                username: '',
                email: '',
                occupation: '',
                gender: '',
                languages: []
            });
        }
    }, [formErrors, isSubmit]);

    const formValidation = (formValues) => {
        const errors = {}
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!formValues.username) {
            errors.username = "UserName field is required !";
        }

        if (!formValues.email) {
            errors.email = "Email field is required !";
        } else if (!emailRegex.test(formValues.email)) {
            errors.email = "Email is not valid, Please enter valid email !"
        }

        if (!formValues.occupation) {
            errors.occupation = 'occupation field is required !';
        }

        if (!formValues.gender) {
            errors.gender = "Please select your gender !";
        }

        if (formValues.languages.length === 0) {
            errors.languages = "Please select any languages !";
        }

        return errors
    }
    return (
        <div id="sample-id">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> Complete Form With Validation  <Icon.DatabaseAdd /> </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <form className="alert alert-primary" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInput}
                                    />
                                    {formErrors && (<div className="text-danger">{formErrors.username}</div>)}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInput}
                                    />
                                    {formErrors && (<div className="text-danger">{formErrors.email}</div>)}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="occupation" className="form-label">Occupation</label>
                                    <select className="form-select" name="occupation" onChange={handleInput} value={formData.occupation}>
                                        <option value="">Select your occupation</option>
                                        <option value="student">Student</option>
                                        <option value="employee">Employee</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {formErrors && (<div className="text-danger">{formErrors.occupation}</div>)}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gender" value="male" id="maleRadio" onChange={handleInput} checked={formData.gender === 'male'} />
                                            <label className="form-check-label" htmlFor="maleRadio">
                                                Male
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gender" value="female" id="femaleRadio" onChange={handleInput} checked={formData.gender === 'female'} />
                                            <label className="form-check-label" htmlFor="femaleRadio">
                                                Female
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gender" value="other" id="otherRadio" onChange={handleInput} checked={formData.gender === 'other'} />
                                            <label className="form-check-label" htmlFor="otherRadio">
                                                Other
                                            </label>
                                        </div>
                                        {formErrors && (<div className="text-danger">{formErrors.gender}</div>)}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="gender" className="form-label">Languages</label>
                                    <div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="htmlCheckbox" name="languages" value="html" onChange={handleInput} />
                                            <label className="form-check-label" htmlFor="htmlCheckbox">
                                                HTML
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="cssCheckbox" name="languages" value="css" onChange={handleInput} />
                                            <label className="form-check-label" htmlFor="cssCheckbox">
                                                CSS
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="jsCheckbox" name="languages" value="javascript" onChange={handleInput} />
                                            <label className="form-check-label" htmlFor="jsCheckbox">
                                                Javascript
                                            </label>
                                        </div>
                                        {formErrors && (<div className="text-danger">{formErrors.languages}</div>)}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-success btn-sm" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                            <h4>Complete Video Step By Step</h4>
                            <iframe width="100%" height="525px" src="https://www.youtube.com/embed/pFHsaFFcfAY?si=cU9om9yTGjdgJG-X" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-primary" />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <SimpleForm />
                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                            <div className="img-thumbnail">
                                <AddRemoveItem />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CompleteFormPage;