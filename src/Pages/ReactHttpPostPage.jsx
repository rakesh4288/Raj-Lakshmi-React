import React, { useState } from "react";
import * as Icon from 'react-bootstrap-icons';
// import AppImages from "../Assets";

const ReactHttpPostPage = () => {
    const [showPost, setShowPost] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isServerError, setIsServerError] = useState();
    const initialFormValues = {
        title: '',
        body: ''
    };
    const [formValues, setFormValues] = useState(initialFormValues);
    const handleInput = (e) => {
        const {name,value} = e.target;
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    // console.log('formValues =', formValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const usersUrl = "https://jsonplaceholder.typicode.com/users";
        const postUrl = "https://jsonplaceholder.typicode.com/posts";
        setIsLoading(true);
        fetch(postUrl,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
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
        .catch((error)=>{
            console.log('Error while post call', error);
            setIsServerError(error);
        })
    }
    console.log('showPost:', showPost);
    return(
        <div id="react-http-get-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                Let's discuss about the Post call with HTTP &nbsp; <Icon.Airplane/>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>
                                When working with APIs we oftentimes want to send data to the server for processing. For example, if we have a list of to-dos and want to add to it, perhaps through a form submission, we use POST HTTP requests to send a request with a payload for processing and potential persistence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <form className="alert alert-primary" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" id="title" name="title" value={formValues.title} className="form-control" onChange={handleInput} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="body" className="form-label">Body</label>
                                    <input type="text" id="body" name="body" value={formValues.body} className="form-control" onChange={handleInput} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
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
                                                    <td>Id: {item.id}</td>
                                                    <td>Title: {item.title}</td>
                                                    <td>Body: {item.body}</td>
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
            </section>
        </div>
    )
}

export default ReactHttpPostPage;