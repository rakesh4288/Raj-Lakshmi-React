import React, { useEffect, useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import SimplePostCall from "../Components/SimplePostCall";
import PostIdComponent from "../Components/PostIdComponent";

const ReactHttpPostPage = () => {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${page}`);
        const response = await res.json();
        setPosts(response);
    }

    const handlePageChange = (e) => {
        setPage(e.target.value);
    }

    console.log("setPage =", page);

    const handleSubmit = () => {
        fetchPosts();
        console.log("posts =", posts);
    }
    return (
        <div id="react-http-get-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                Let's discuss about the Post call with HTTP &nbsp; <Icon.Airplane />
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
                <SimplePostCall />
            </section>

            <hr className="bg-danger" />

            <section className="blueGradientLeft">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <PostIdComponent handlePageChange={handlePageChange} handleSubmit={handleSubmit} />
                        </div>
                        <div className="col-md-9">
                            <h4>Fetching details from child component using Id of API</h4>
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>Id</td>
                                        <td>{posts.id}</td>
                                    </tr>

                                    <tr>
                                        <td>Title</td>
                                        <td>{posts.title}</td>
                                    </tr>

                                    <tr>
                                        <td>Url</td>
                                        <td>{posts.url}</td>
                                    </tr>

                                    <tr>
                                        <td>Image</td>
                                        <td>
                                            <img src={posts.thumbnailUrl} alt={posts.thumbnailUrl} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactHttpPostPage;