import {useState} from "react";

const SimpleLoginForm = () => {
    const initialState = {
        userEmail: '',
        userPass: ''
    }

    const [formValues, setFormValues] = useState(initialState);
    const [formError, setFormError] = useState({});
    const [modalShow, setModalShow] = useState(false);

    const handleInput = (e) => {
        const {name, value}= e.target;
        setFormValues({
            ...formValues,
            [name]:value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        console.log('isValid =', isValid);
        if(isValid) {
            console.log('Form Submitted Succesfully');
            setFormValues({
                userEmail: '',
                userPass: ''
            });
            setModalShow(true);
        } else {
            console.log('Unable to Submit the Form');
        }
    }

    const formValidation = () => {
        const errors = {}
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(formValues.userEmail === ''){
            errors.userEmail = 'Email is required !!'
        } else if(!emailRegex.test(formValues.userEmail)){
            errors.userEmail = 'Please enter correct Email !!'
        }

        if(formValues.userPass === '') {
            errors.userPass = "Passowrd field is required !!"
        }

        setFormError({...errors});
        const errorList = Object.keys(errors);
        console.log('errorList =', errorList);
        if(errorList.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    const handleClose = () => {
        setModalShow(false);
    }

    console.log('formError =', formError);
    console.log('formValues =', formValues);
    return (
        <>
            <form className="alert alert-info" onSubmit={handleSubmit}>
                <h5>Simple Login Form</h5>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"  name="userEmail" value={formValues.userEmail} onChange={handleInput}/>
                    {formError  && ( <div className="text-danger">{formError.userEmail}</div>)}
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="userPass" value={formValues.userPass} onChange={handleInput}/>
                    { formError  && ( <div className="text-danger">{formError.userPass}</div>) }
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
            </form>

            {
                modalShow && (
                    <div id="modalBackdrop" className="modalBackDrop">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">
                                    This is only a Simple Popup
                                </h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                <p>This is only a Simple Popup</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary btn-sm" onClick={handleClose}>OK</button>
                            </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default SimpleLoginForm;