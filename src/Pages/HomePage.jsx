import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.svg';
import * as Icon from 'react-bootstrap-icons';
import './PagesStyle.css';
import AppImages from "../Assets";

const HomePage = () => {
    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => {
        console.log('inside toggleHandler');
        setToggle(!toggle);
    }
    return (
        <div id="home-page" className="homePageStyle">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="pageHeading"> React JS <img src={logo} className="App-logo" alt="logo" /> </h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5>
                            The latest stable version of React is 19.1.0, <br/>released on March 28, 2025. React 19 was officially released on December 5, 2024. 
                        </h5>
                    </div>
                </div>

                <hr className="bg-primary"/>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4>Advantages <Icon.Plus /></h4>
                        <ul>
                            <li>React is increasing the performance of your web application Because its uses virtual DOM</li>
                            <li>Using React, writing a test cases is very easy</li>
                            <li>Huge collection of third party components</li>
                            <li>Handle large application</li>
                            <li>Virtual DOM is helping to increase the performance</li>
                            <li>One-way data binding keeps everything modular and fast</li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <h4>Disadvantages: <Icon.List /></h4>
                        <ul>
                            <li>React is a library not a full blown framework</li>
                            <li>So everything is not available while installing the react like one its major dependencies is not present i.e. <b>react router dom</b></li>
                            <li>
                                <b>react router dom</b> is helping to create the Navigation or routing across the application.  
                            </li>
                            <li>This library is very very large and its difficult to understand for beginner level</li>
                            <li>Coding gets complicated because its uses inline tamplating with JSX</li>
                        </ul>
                    </div>
                </div>

                <hr className="bg-primary" />

                <div className="row">
                    <div className="col-md-6">
                        <p>
                            <img src={AppImages.ReactJsAdvantages} className="img-fluid" alt="ReactJsAdvantages" />
                        </p>
                    </div>

                    <div className="col-md-6">
                        <h6>
                            The current version of React is 19.0.0, which was released on December 5, 2024. React 19 is designed to improve the performance and efficiency, and to streamline the web development processes. <br/><br/> It's compatible with most existing React projects, but there are some changes and deprecated features that developers should be aware of.
                        </h6>

                        <h5>What is the stable version of React: <br/>React 18 is the stable version which was released on March 29, 2022.</h5>
                    </div>
                </div>

                <hr className="bg-danger" />

                <div className="row">
                    <div className="col-md-6">
                        <div className="alert alert-warning">
                            <h6> React Interview Questions <Icon.Infinity /></h6>
                            <ul>
                                <li>
                                    <Link className="link" to="/interview-series-part-1">Interview Series Part 1</Link>
                                </li>

                                <li>
                                    <Link className="link" to="/interview-series-part-2">Interview Series Part 2</Link>
                                </li>

                                <li>
                                    <Link className="link" to="/interview-series-part-3">Interview Series Part 3</Link>
                                </li>
                            </ul>
                        </div>

                        <h6>
                            Git Repo: <a href="https://github.com/rakesh4288/Raj-Lakshmi-React" target="_blank" rel="noopener noreferrer"> https://github.com/rakesh4288/Raj-Lakshmi-React</a>
                        </h6>
                    </div>

                    <div className="col-md-6">
                        <h5>What is JSX ?</h5>
                        <img src={AppImages.WhatIsJSX} className="img-fluid" alt="what-is-jsx"/>
                    </div>
                </div>

                <hr className="bg-primary" />

                <div className="row">
                    <div className="col-md-6">
                        <h4>Bootstrap Icon:</h4>
                        <h5>All steps - How to install and use:</h5>
                        https://www.npmjs.com/package/react-bootstrap-icons <br />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZwYLOQk-iRo?si=QrS6NLP53AlPglCB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className="col-md-6">
                        <div className={toggle ? 'darkTheme' : 'whiteTheme'}>
                            <h5>Dark Mode Challenge</h5>
                            {
                                toggle ?
                                <Icon.Sun onClick={toggleHandler} className="whiteIcon"/>
                                :
                                <Icon.Moon onClick={toggleHandler} className="darkIcon"/>
                            }

                            <br/><br/>
                            <p>
                                React is an efficient, flexible, and open-source JavaScript library that allows developers to create simple, fast, and scalable web applications. Jordan Walke, a software engineer who was working for Facebook created React. It was first deployed on Facebook’s news feed in 2011 and on Instagram in 2012. Developers with a Javascript background can easily develop web applications with React.
                            </p>

                            <p>
                                JSX is basically a syntax extension of regular JavaScript and is used to create React elements. These elements are then rendered to the React DOM. All the React components are written in JSX.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="bg-danger" />

            <section className="darkBlueBgWithPinkBorder">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="text-white">How to optimize React App ?</h5>
                            <p>Here are some key points By which we can improve the React application:</p>

                            <ul className="text-white">
                                <li>Code Spliting</li>
                                <li>Using React Fragment</li>
                                <li>Use key attribute in list</li>
                                <li>
                                    <Link className="text-white" to="/what-is-lazy-loading-in-react">Lazy Loading Component</Link>
                                </li>
                                <li>
                                    <Link className="text-white" to="/react-hook-tutorial/use-memo-page">
                                        Memoization: You can use the useMemo hook for this 
                                    </Link>
                                </li>
                                <li>Using Es Lint for better coding experience</li>
                                <li>Don't use the Inline CSS styling and inline event</li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;