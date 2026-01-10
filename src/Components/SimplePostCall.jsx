import React, {useState, useEffect} from "react";

const SimplePostCall = () => {
    const [showPost, setShowPost] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isServerError, setIsServerError] = useState();
    const initialFormValues = {
        title: '',
        body: ''
    };
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(formValidation(formValues));
        setIsSubmit(true);
    }

    const formValidation = (values) => {
        const errors = {}
        if (values.title === '') {
            errors.title = 'This is required field';
        }

        if (values.body === '') {
            errors.body = 'This is required field';
        }
        return errors;
    }

    useEffect(() => {
        if (Object.keys(formError).length === 0 && isSubmit) {
            const postUrl = "https://jsonplaceholder.typicode.com/posts";
            setIsLoading(true);
            fetch(postUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: formValues.title,
                    body: formValues.body,
                }),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log('Success:', data);
                let responseArr = [];
                responseArr.push(data);
                console.log('responseArr:', responseArr);
                setShowPost(responseArr);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log('Error while post call', error);
                setIsServerError(error);
            })

            setFormValues({
                title: '',
                body: ''
            });
        }
    }, [formError, isSubmit, formValues]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <form className="alert alert-primary" onSubmit={handleSubmit}>
                        <h5>Simple Post Call </h5>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" id="title" name="title" value={formValues.title} className="form-control" onChange={handleInput} />
                            {formError && (<div className="text-danger"> {formError.title} </div>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="body" className="form-label">Body</label>
                            <input type="text" id="body" name="body" value={formValues.body} className="form-control" onChange={handleInput} />
                            {formError && (<div className="text-danger"> {formError.body} </div>)}
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                    </form>
                </div>

                <div className="col-md-3">
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


                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                            {
                                showPost && showPost.map((item, index) => {
                                    return (
                                        <tr key={index}>
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

                <div className="col-md-6">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/L3FxVU0S4oA?si=erGz3fA7Mt4JT63D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default SimplePostCall;