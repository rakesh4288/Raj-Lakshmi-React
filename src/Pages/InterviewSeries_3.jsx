import React from "react";
import AppImages from "../Assets";
import * as Icon from 'react-bootstrap-icons';

const InterviewPart_3 = () => {
    return (
        <div id="interview-part-1">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> React Interview Questions Answer Part 3 <Icon.Fullscreen/></h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h4>What is Pure Component ?</h4>
                            <p>
                                ReactJS Pure Components are similar to regular class base components but with a key optimization. They skip the re-renders when the props and state remain the same.
                            </p>

                            <p>
                                Generally React is recommending to use functional base components with hooks in new code for better performance and simplicity.
                            </p>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6>Best Interview Questions Answers:</h6>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/xV1BK3ZYxuA?si=GGuDhPrFn1DEdc3X" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section id="synthetic-events" className="bg-dark p-4 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h4 className="text-white">What are synthetic events in ReactJS ?</h4>
                            <p className="text-white">
                                Synthetic events are the cross-browser wrappers around the all browsers. The main purpose of creating the synthetic event is to perform cross browser issues. 
                            </p>

                            <p className="text-white">
                                In traditional web development we were using onclick event for JavaScript But in React side we are using onClick camel cases, so basically this is helping to perform the Cross Browser issue. In every browser while clicking it should provide the basic details about event
                            </p>

                            <p className="text-white">
                                Synthetic event is providing the more details about the event logs. We can use the objects to use business logic.
                            </p>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <p>
                                <img src={AppImages.SyntheticEventImg} alt="SyntheticEventImg" className="img-fluid img-thumbnail" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h4>What is the content negotiation in web api ?</h4>
                        <p>
                            Content negotiation is the best format for getting the response from the server. When a client is requesting the data from the server so server offer few options to send the data like JSON format or XML format. 
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>Here's a more detailed explanation:</h5>
                        <h6>The Problem:</h6>
                        <ul>
                        <li>
                            Web APIs often need to serve the data to different clients, which may have varying preferences (e.g., some clients might prefer JSON, while others prefer XML).
                        </li>

                        <li>
                            It's crucial to deliver the data in a format that each client can efficiently process and understand. 
                        </li>
                        </ul>

                        <h5>The Solution: Content Negotiation:</h5>
                        <ul>
                        <li>Clients send an HTTP request including headers like Accept to specify their preferred media types.</li>
                        <li>The server uses this information to select the most appropriate representation of the data to return.</li>
                        <li>If the server can fulfill the client's request, it returns the data in the specified format.</li>
                        <li>If no acceptable format is available, the server might return a 406 Not Acceptable error or a response in a default format. </li>
                        </ul>

                        <h5>Example:</h5>
                        <ul>
                        <li>A client sends a request with Accept: application/json. </li>
                        <li>The server, if it can generate JSON, sends back the data in JSON format. </li>
                        <li>If the client sends Accept: application/xml and the server can generate XML, it sends the data in XML format. </li>
                        </ul>

                        <p>
                        In essence, content negotiation enables APIs to provide data in a variety of formats, making them more versatile and accommodating to different client applications. 
                        </p>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="alert alert-info">
                        <h6>Content-Type: application/json</h6>
                        <p>
                        <img src={AppImages.Web_Api_JSON_response} alt="Web API JSON" className="img-fluid img-thumbnail" />
                        </p>

                        <hr className="bg-dark"/>

                        <h6>Content-Type: application/xml</h6>
                        <p>
                        <img src={AppImages.Web_Api_XML_response} alt="Web API XML" className="img-fluid img-thumbnail" />
                        </p>
                    </div>
                    </div>
                </div>
            </section>

            <hr className="bg-dark"/>

            <section id="react--reconciliation" className="pt-4 pb-5">  
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h2>What is Reconciliation in React JS?</h2>
                            <h6>
                                Reconciliation is one of the most important concepts by which React. It is helping to update the DOM in very efficiently manner. This mechanism ensures that UI updates are optimized, minimizing performance overhead and improving the user experience
                            </h6>

                            <h6>
                                Reconciliation in React is the process of efficiently updating the user interface (UI) to reflect changes in a component's state or props. It involves comparing the current virtual DOM tree with the new virtual DOM tree and then updating only the necessary parts of the actual DOM. This process ensures that React applications remain performant by minimizing the number of DOM operations.
                            </h6>

                            <h6>
                                <i>
                                    React Reconciliation refers to React's process of comparing the current and previous states of the Virtual DOM and updating the DOM efficiently. It makes the DOM updates faster in React. It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.
                                </i>
                            </h6>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <p>
                                <img src={AppImages.ReconciliationImg} alt="Reconciliation - Img" className="img-fluid img-thumbnail" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-danger"/>

            <section id="ssr-csr" className="pt-4 pb-5">  
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h3>What is Server Side Rendering and Client Side Rendering in React JS?</h3>
                            <p>
                                In the world of web development, there are several approaches to rendering web pages: server-side rendering, client-side rendering, and server-side generation. Each approach has its own advantages and disadvantages, and choosing the right one for your project depends on your specific needs and goals.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h4>Server-Side Rendering</h4>
                            <p>
                                Server-side rendering (SSR) is the process of rendering the web pages on the server side and sending the fully-rendered HTML and related assets to the client side.
                            </p>

                            <p>
                                In this approach, the server generates the HTML, inclusing its all assets and including any dynamic data, and sends it to the client as a complete page. After this client is displays the page without any further processing.
                            </p>

                            <p><b>One example of a popular SSR framework is Next.js. </b></p>

                            <h5>Advantages:</h5>
                            <ul>
                                <li>Faster initial load times</li>
                                <li>Improved SEO optimization</li>
                            </ul>

                            <h5>Disadvantages:</h5>
                            <ul>
                                <li>This can be take more resources and maintenance</li>
                                <li>
                                    While loading the web page slowly If user make another server request on may be this will take more time to load.
                                </li>
                            </ul>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <p>
                                <img src={AppImages.Server_Side_Rendering} alt="Server Side Rendering" className="img-fluid" />
                           </p>
                        </div>
                    </div>

                    <hr className="bg-primary"/>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <p>
                                <img src={AppImages.Client_Side_Rendering} alt="Client Side Rendering" className="img-fluid" />
                           </p>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h4>Client-Side Rendering</h4>
                            <p>
                                Client-side rendering (CSR) is the process of rendering the web pages on the client using JavaScript.
                            </p>

                            <p>
                                In this approach, the server sends the initial HTML file, but the client then uses JavaScript to dynamically update the page as needed. This allows for more interactive and responsive web pages, as the client can update specific parts of the page without needing to reload the entire page.
                            </p>

                            <p><b>One example of a popular CSR framework is React.</b></p>

                            <h5>Advantages:</h5>
                            <ul>
                                <li>More dynamic and interactive web applications</li>
                                <li>Can provide a smoother and more seamless user experience</li>
                                <li>Can reduce the need for additional server requests</li>
                            </ul>

                            <h5>Disadvantages:</h5>
                            <ul>
                                <li>Can be less SEO-friendly, as search engines may have difficulty indexing client-rendered content</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-danger"/>
        </div>
    )
}

export default InterviewPart_3;