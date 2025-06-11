import React, {useState} from 'react';

const FormValidation = () => {
    const initialState = {
        userName: '',
        email: '',
        phone: '',
        gender: '',
        occupation: '',
        languages: [],
      };

    const [formData, setFormData] = useState(initialState);
    const [formError, setFormError] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === 'languages') {
          const copy = { ...formData };
          if (e.target.checked) {
            copy.languages.push(e.target.value);
          } else {
            copy.languages = copy.languages.filter((item) => item !== e.target.value);
            setFormData(copy);
          }
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('setFormData = ', formData);
        const isValid = validateForm();
        console.log('isValid =', isValid);
        if (isValid) {
          alert('Form Submitted Successfully!');
          setFormData({
            userName: '',
            email: '',
            phone: '',
            gender: '',
            occupation: '',
            languages: [],
          });
        } else {
          alert('Something went wrong!');
        }
    };

    const validateForm = () => {
        const currentError = {};
        const userNameRegex = /^[A-Za-z ]+$/;
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const phoneRegex = /^\d{10}$/;
        if (formData.userName === '') {
          currentError.userName = 'User Name should not be blank !';
        } else if (!userNameRegex.test(formData.userName)) {
          currentError.userName = 'Only alphabet is allowed !';
        }
    
        if (formData.email === '') {
          currentError.email = 'Please enter email id';
        } else if (!emailRegex.test(formData.email)) {
          currentError.email = 'Email is not valid, Please enter valid email !';
        }
    
        if (formData.phone === '') {
          currentError.phone = 'Please enter phone';
        } else if (!phoneRegex.test(formData.phone)) {
          currentError.phone = 'Invalid phone number';
        }
    
        if (formData.gender === '') {
          currentError.gender = 'Please select gender';
        }
    
        if (formData.occupation === '') {
          currentError.occupation = 'Please select occupation';
        }
    
        if (formData.languages.length < 1) {
          currentError.languages = 'Please select at least one language';
        }
    
        setFormError({ ...currentError });
        console.log('Object.keys(currentError) =', Object.keys(currentError));
        if (Object.keys(currentError).length === 0) {
          return true;
        } else {
          return false;
        }
      };

    return (
        <form className="alert alert-success" onSubmit={handleSubmit}>
            <h4>Form Validation</h4>
            <div className="form-group">
                <label htmlFor="yourName"> Name: </label> &nbsp;
                <input
                    type="text"
                    id="yourName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleInput}
                />
                {formError && (
                    <div className="text-danger"> {formError.userName} </div>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="yourEmail"> Email: </label> &nbsp;
                <input
                    type="text"
                    id="yourEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleInput}
                />
                {formError && <div className="text-danger"> {formError.email} </div>}
            </div>

            <div className="form-group">
                <label htmlFor="yourPhone"> Phone: </label> &nbsp;
                <input
                    type="text"
                    id="yourPhone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInput}
                />
                {formError && <div className="text-danger"> {formError.phone} </div>}
            </div>

            <div className="form-group">
                <label> Gender : </label> &nbsp;
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleInput}
                    checked={formData.gender === 'male'}
                />{' '}
                Male &nbsp;
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleInput}
                    checked={formData.gender === 'female'}
                />{' '}
                Female &nbsp;
                <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={handleInput}
                    checked={formData.gender === 'other'}
                />{' '}
                Other
                {formError && <div className="text-danger"> {formError.gender} </div>}
            </div>

            <div className="form-group">
                <label htmlFor="occupation"> Occupation: </label> &nbsp;
                <select
                    name="occupation"
                    onChange={handleInput}
                    value={formData.occupation}
                >
                    <option value="">Select Occupation </option>
                    <option value="employee">Employee </option>
                    <option value="student">Student </option>
                    <option value="home maker">Home Maker </option>
                    <option value="other">Other </option>
                </select>
                {formError && (
                    <div className="text-danger"> {formError.occupation} </div>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="languages"> Languages: </label> &nbsp;
                <input
                    type="checkbox"
                    id="languages"
                    value="hindi"
                    name="languages"
                    onChange={handleInput}
                />{' '}
                Hindi &nbsp;
                <input
                    type="checkbox"
                    id="languages"
                    value="english"
                    name="languages"
                    onChange={handleInput}
                />{' '}
                English &nbsp;
                <input
                    type="checkbox"
                    id="languages"
                    value="marathi"
                    name="languages"
                    onChange={handleInput}
                />{' '}
                Marathi &nbsp;
                <input
                    type="checkbox"
                    id="languages"
                    value="others"
                    name="languages"
                    onChange={handleInput}
                />{' '}
                Others
                {formError && (
                    <div className="text-danger"> {formError.languages} </div>
                )}
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-sm">
                  {' '}
                  Submit{' '}
              </button>
            </div>
        </form>
    )
}

export default FormValidation;