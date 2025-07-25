import React from "react";
import AppImages from "../Assets";
import * as Icon from 'react-bootstrap-icons';

const InterviewSeries_2 = () => {
    const checkSyntheticEvent = (e) => {
        console.log('checkSyntheticEvent =', e);
    }
    return (
        <div id="interview-part-1">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> React Interview Questions Answer Part 2 <Icon.Fullscreen/></h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="virtual-dom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h4>What is React Js and why its better than other ?</h4>
                            <p>
                                Just because of its Virtual DOM concept. React is using virtual DOM for updating the component. By using Virtual DOM the performance of React is increasing.
                            </p>
                            <ul>
                                <li>It's library for creating the UI components and its not a FRAMEWORK</li>
                                <li>Angular and Vue is completely framework and its following their own MVC pattern</li>
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
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h3>What is babel?</h3>
                            <p>
                                Babel is a popular JavaScript transpiler that converts the modern JavaScript code (ES6 and beyond) and JSX into a backwards-compatible version of JavaScript that can run in every browsers.
                            </p>
                            
                            <p>
                                It allows developers to write the code using the latest JavaScript features without worrying about the compatibility issues across the different browsers.
                            </p>

                            <p>
                                In React JS, Babel is often used to transform the JSX syntax into standard JavaScript, as browsers do not natively understand the JSX. Babel is also providing polyfills to emulate newer JavaScript features in older environments.
                            </p>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h3>Why is Babel Important for React JS?</h3>
                            <p>Babel is essential for React JS development for several reasons:</p>
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

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h5>What is the webpack in react ?</h5>
                            <h6>
                                Webpack is a just helping to create the bundle for your react js application.
                                <br/>Its primary role is to take all the individual JavaScript files and assets alos like CSS, images, fonts in a project and combine them into a single, optimized bundle that can be efficiently loaded by a web browser.
                            </h6>

                            <h5>Key functions of Webpack in a React context</h5>
                            <ul>
                                <li>Module Bundling</li>
                                <li>Transpilation</li>
                                <li>Asset Management</li>
                                <li>Optimization</li>
                                <li>Development Features</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h5>What happens if we pass null or undefined in second argument in useEffect Hook ?</h5>
                            <h5>What happens if we not pass the second argumment in useEffect</h5>
                            <p>If you create an useEffect with no second argument or null or undefined then callback will get executed on every render.</p>

                            <p>If you add null or undefined then it will throw the warning via EsLint. </p>

                            <p className="alert alert-warning">
                                It will not harm your application in case you don't mutate a state inside the callback. If you added the console.log with Hello Pune so it will print on every render.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6>How below will get executed ?</h6>
                            <img src={AppImages.UseEffectWithAsync} className="img-fluid" alt="UseEffectWithAsync" />
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <p>We should to focus on few points: </p>
                            <ul>
                                <li>It will throw the error Because async will return the promise.</li>
                                <li>useEffect() is designed to handle the side effect in a synchronous manner. UseEffect is expecting the synchronous function as in argument to proceed</li>
                                
                                <li>You can not directly use the async function with the useEffect Because useEffect hook is a cleanup function.</li>
                                <li>it is not returning anything like promises</li>
                            </ul>

                            <p className="alert alert-danger">
                            <Icon.ArrowRight /> Best approach to use the async function is that - you can put async inside the useEffect() not as in argument.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <br/>
                            <h6>Let's talk about the dependency array</h6>
                            <ul>
                                <li>If you adding a blank dependency array inside useEffect hook then it will render on every component rendering</li>
                                <li>But let's suppose you added any array dependecies over there then it will execute when your array dependecies array updated. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-info"/>

            <section id="best-interview-series-1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h5>Best interview video ever</h5>
                            <iframe width="100%" height="500" src="https://www.youtube.com/embed/cXHm_7a7gfE?si=hCnAMB0a_xoWuH-7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <hr/>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h4>What is the Error Bounderies in React ?</h4>
                            <p>
                                Error Boundaries are the React components that catchs the JavaScript errors anywhere in their child component tree, we can log those errors and display a fallback UI instead of crashing the entire application. They act like a try/catch block for the components, but specifically for errors that occur during rendering, in lifecycle methods and in constructors.
                            </p>

                            <h5>How Error Boundaries Work?</h5>
                            <p>
                                Error boundaries work similarly as the try/catch works in the JavaScript. If an error occurs within a component's rendering process or lifecycle methods
                            </p>
                            <p>
                                React looks for the nearest error boundary in the component tree.
                            </p>

                            <hr className="bg-primary"/>

                           
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="bg-dark p-2 mb-2">
                                <h4 className="text-white">What are Synthetic Events in ReactJS ?</h4>
                                <p className="text-white">
                                    Synthetic events are the cross-browser wrappers around the all browsers. The main purpose of creating the synthetic event is to perform cross browser issues. 
                                </p>

                                <p className="text-white">
                                    In traditional web development we were using onclick event for JavaScript But in React side we are using onClick camel cases, so basically this is helping to perform the Cross Browser issue. In every browser while clicking it should provide the basic details about event
                                </p>

                                <p>
                                    <button onClick={checkSyntheticEvent} className="btn btn-warning btn-sm">Click Me</button>
                                </p>

                                <p>
                                    <img src={AppImages.SyntheticEventImg} alt="SyntheticEventImg" className="img-fluid" />
                                </p>

                                <p className="text-white">
                                    by console.log(e) you can see the Synthentic event
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-primary"/>
        
            <section className="container pt-4 pb-5">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>What is React Strict Mode ? <Icon.Book/></h5>
                        <h6>
                            React Strict Mode is a react component which is used to identify the potential issues and finding the bug in the react code. It is helping to provides the warning and alerts while building the app.
                        </h6>

                        <h6>
                            React Strict Mode goal is to improve the quality of the react application by avoiding the common mistakes while developming a app.
                        </h6>

                        <pre className="lighGreenBG">
                            <span>&lt;React.StrictMode&gt;</span><br/><span>    &lt;App /&gt;</span><br/><span>&lt;/React.StrictMode&gt;</span>
                        </pre>

                        <div>
                            <h6>Explanation for right side screenshot:</h6> 
                            <p>
                                In the above example, the StrictMode checks will be applicable only on Component2 and Component3 (as they the child components of React.StrictMode). Contrary to this, Component1 and Component4 will not have any checks.
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h6>Full Component Screenshot:</h6>
                        <p>
                            <img src={AppImages.React_Strict_Mode} alt="React_Strict_Mode"
                            className="img-fluid img-thumbnail" />
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InterviewSeries_2;