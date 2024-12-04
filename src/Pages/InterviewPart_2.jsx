import React from "react";

const InterviewPart_1 = () => {
    return (
        <div id="interview-part-1">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> React Interview Questions Answer Part 2</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="virtual-dom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h4>What is React Js and its better than other ?</h4>
                            <p>Just because of its Virtual DOM concept. React is using virtual DOM for updating the component. By using Virtual DOM the performance of React is increasing</p>
                            <ul>
                                <li>It's library for creating the UI components and its NOT a FRAMEWORK</li>
                                <li>Angular and Vue is completely framework and its following the MVC pattern</li>
                                <li>MVC stands for Model View Controller</li>
                                <li>But React is following only View Part</li>
                            </ul>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5>Best React interview series in short clips: </h5>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/73gvbkS44jg?si=3AadRwb5P05bia0E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section id="what-is-babel" className="blueGradientRight">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>What is babel?</h3>
                            <p>
                                Babel is a popular JavaScript transpiler that converts modern JavaScript code (ES6 and beyond) and JSX into a backwards-compatible version of JavaScript that can run in every browsers.
                            </p>
                            <p>
                                It allows developers to write code using the latest JavaScript features without worrying about compatibility issues across different browsers.
                            </p>

                            <p>
                                In ReactJS, Babel is often used to transform the JSX syntax into standard JavaScript, as browsers do not natively understand JSX. Babel also provides polyfills to emulate newer JavaScript features in older environments.
                            </p>
                        </div>

                        <div className="col-md-6">
                            <h3>Why is Babel Important for ReactJS?</h3>
                            <p>Babel is essential for ReactJS development for several reasons:</p>
                            <ul>
                                <li>
                                    <b>Transforms JSX into JavaScript:</b> React’s syntax extension, JSX, allows developers to write HTML like code in JavaScript. However, browsers cannot execute JSX directly. Babel transpiles JSX code into standard JavaScript that browsers can understand.
                                </li>

                                <li>
                                    <b>Supports Modern JavaScript Features:</b> ES6 and beyond introduced many new JavaScript features, such as arrow functions, classes, template literals, and destructuring. Babel converts these modern features into backward-compatible versions, ensuring that your code runs on older browsers.
                                </li>

                                <li>
                                    <b>Polyfills for Missing Features:</b> Babel can also include polyfills for newer JavaScript features that are not natively supported in some browsers. This ensures that the application’s code behaves consistently across all environments.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="best-interview-series-1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h3>Best interview</h3>
                            <iframe width="100%" height="500" src="https://www.youtube.com/embed/cXHm_7a7gfE?si=hCnAMB0a_xoWuH-7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InterviewPart_1;