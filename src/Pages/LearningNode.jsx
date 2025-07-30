import React from "react";
import AppImages from "../Assets";
import FormValidation from "../Components/FormValidation";
import ArrayState from "../Components/ArrayState";
import CounterAppUsingRedux from "../Components/CounterAppUsingRedux";

const LearningNode = () => {
    return (
        <div id="node-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                Learning Node Js
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h6>Node.js is an open source server environment.</h6>
                            <h6>Node.js allows you to run JavaScript on the server side.</h6>
                            <br /><br />
                            <h5>What is Node.js?</h5>
                            <ul>
                                <li>Node.js is an open source server environment</li>
                                <li>Node.js is free to use</li>
                                <li>Node.js runs on various platforms like <i>Windows, Linux, Unix, Mac OS X, etc.</i></li>
                                <li>Node.js uses JavaScript on the server side</li>
                            </ul>

                            <div className="alert alert-warning">
                                Node.js uses asynchronous programming!
                            </div>
                        </div>

                        <div className="col-md-6">
                            <img src={AppImages.NodeJs} alt="node-js" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-primary" />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Why Node.js?</h4>
                            <p className="alert alert-info">
                                A common task for a web server can be to open a file on the server and return the content to the client.
                            </p>

                            <h6>Here is how PHP or ASP handles a file request:</h6>
                            <ol>
                                <li>Sends the task to the computer's file system.</li>
                                <li>Waits while the file system opens and reads the file.</li>
                                <li>Returns the content to the client.</li>
                                <li>Ready to handle the next request.</li>
                            </ol>

                            <h6>Here is how Node.js handles a file request:</h6>
                            <ol>
                                <li>Sends the task to the computer's file system.</li>
                                <li>Ready to handle the next request.</li>
                                <li>When the file system has opened and read the file, the server returns the content to the client.</li>
                            </ol>

                            <p>Node.js eliminates the waiting, and simply continues with the next request.</p>
                            <p>Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.</p>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-md-6">
                            <h5>What Can Node.js Do?</h5>
                            <ul>
                                <li>Node.js can generate dynamic page content</li>
                                <li>Node.js can create, open, read, write, delete, and close files on the server</li>
                                <li>Node.js can collect form data</li>
                                <li>Node.js can add, delete, modify data in your database</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>What is a Node.js File?</h5>
                            <ul>
                                <li>Node.js files contain tasks that will be executed on certain events</li>
                                <li>A typical event is someone trying to access a port on the server</li>
                                <li>Node.js files must be initiated on the server before having any effect</li>
                                <li>Node.js files have extension ".js"</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <FormValidation />
                        </div>

                        <div className="col-md-4">
                            <ArrayState />
                            <CounterAppUsingRedux initialValue={0} />
                        </div>
                    </div>

                    <hr className="bg-primary"/>

                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                           <iframe width="100%" height="315" src="https://www.youtube.com/embed/3-PZsjRSfao?si=jiOaD2LkKqavwmna" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LearningNode;
