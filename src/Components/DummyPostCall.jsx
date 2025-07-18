import React, { useEffect, useState } from 'react';

const DummyPostCall = () => {
    const initialState = {
        title: '',
        body: ''
    }

    const [formValues, setFormValues] = useState(initialState);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showPost, setShowPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isServerError, setIsServerError] = useState();
    const handleChange = (e) => {
      const {name, value}  = e.target;
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

    const formValidation = (formValues) => {
        const errors = {}
        if(formValues.title === '') {
            errors.title = 'Title is required !!'
        }

        if(formValues.body === '') {
            errors.body = 'Body field is required !!'
        }

        return errors;
    }

    useEffect(() => {
        if(Object.keys(formError).length === 0 && isSubmit){
            //const postUrl = 'https://dummyjson.com/posts';
            const postUrl = 'https://jsonplaceholder.typicode.com/posts';
            try {
                setIsLoading(true);
                const postDummyData = async() => {
                    const response = await fetch(
                        postUrl, {
                        method: 'POST',
                        headers: { 'Content-Type' : 'application/json'},
                        body: JSON.stringify({
                            title: formValues.title,
                            body: formValues.body
                        })
                    });
    
                    const res = await response.json();
                    console.log('postDummyData Success =', res);
                    let resArray = [];
                    resArray.push(res);
                    console.log('resArray.push(res) =', resArray);
                    setShowPost(resArray);
                    setIsLoading(false);
                }

                postDummyData();
            }
            catch(error) {
                console.log('postDummyData Error =', error);
                setIsLoading(true);
                setIsServerError(error)
            }

            
        }
    }, [formError, isSubmit]);

    // console.log('handleChange =', formValues);
    return (
        <>
            <div className='col-md-3'>
                <form className='alert alert-success' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <h5>Post call with dummy API</h5>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='title' className="form-label">Title</label>
                        <input type='text' id='title' name='title' className='form-control' onChange={handleChange} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='body' className="form-label">Body</label>
                        <input type='text' id='body' name='body' className='form-control' onChange={handleChange} />
                    </div>

                    <div className='mb-3'>
                        <button className='btn btn-dark btn-sm'>Submit</button>
                    </div>
                </form>
            </div>

            <div className='col-md-3'>
                {
                    isLoading && (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )
                }

                {
                    isServerError && (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Getting Error while fetching the Data...</span>
                            </div>
                        </div>
                    )
                }
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Title</td>
                            <td>Body</td>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        showPost.map((item, index) => {
                            return (
                                <tr key={index + 1}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DummyPostCall;