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
                            <h1 className="pageHeading"> React Js <img src={logo} className="App-logo" alt="logo" /> </h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
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
                            <li>This is library very large and its very difficult to understand for beginner level</li>
                            <li>Coding gets complicated because its uses inline tamplating with JSX</li>
                        </ul>
                    </div>
                </div>

                <hr className="bg-danger" />

                <div className="row">
                    <div className="col-md-6">
                        <div className="alert alert-warning">
                            <h6> React Interview Questions <Icon.Infinity /></h6>
                            <ul>
                                <li>
                                    <Link className="link" to="/interview-question-part-1">Interview Question Part 1</Link>
                                </li>

                                <li>
                                    <Link className="link" to="/interview-question-part-2">Interview Question Part 2</Link>
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
        </div>
    )
}

export default HomePage;