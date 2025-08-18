import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.svg';
import * as Icon from 'react-bootstrap-icons';
import './PagesStyle.css';
import AppImages from "../Assets";

const HomePage = () => {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const toggleHandler = () => {
        console.log('inside toggleHandler');
        setToggle(!toggle);
    }

    const handleGit = () => {
        //alert('inside handleGit');
        navigate('/what-is-git-and-git-github');
    }
    return (
        <div id="home-page" className="homePageStyle">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                           <div className="clearfix">
                                <div className="float-start">
                                <h1 className="pageHeading"> React JS <img src={logo} className="App-logo" alt="logo" /> </h1>
                            </div>

                            <div className="float-end">
                                <button className="btn btn-warning btn-sm" onClick={handleGit}>
                                    Learning Git & GitHub <Icon.Alexa />
                                </button>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h5>
                            The latest stable version of React is 19.1.0, <br/>released on March 28, 2025. React 19 was officially released on December 5, 2024. 
                        </h5>
                    </div>
                </div>

                <hr className="bg-primary"/>
                
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h4>Advantages <Icon.Plus /></h4>
                        <ul>
                            <li>React is increasing the performance of your web application Because its uses the virtual DOM</li>
                            <li>Using React, writing a test cases is very easy</li>
                            <li>Huge collection of third party components</li>
                            <li>Handle the large application</li>
                            <li>Virtual DOM is helping to increase the performance</li>
                            <li>One-way data binding keeps everything modular and fast</li>
                        </ul>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
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
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <p>
                            <img src={AppImages.ReactJsAdvantages} className="img-fluid" alt="ReactJsAdvantages" />
                        </p>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h6>
                            The current version of React is 19.0.0, which was released on December 5, 2024. React 19 is designed to improve the performance and efficiency, and to streamline the web development processes. <br/><br/> It's compatible with most existing React projects, but there are some changes and deprecated features that developers should be aware of.
                        </h6>

                        <h5>What is the stable version of React: <br/>React 18 is the stable version which was released on March 29, 2022.</h5>
                    </div>
                </div>
            </section>

            <hr className="bg-danger" />

            <section id="interview-list" className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="alert alert-dark">
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

                                <li>
                                    <Link className="link" to="https://github.com/anil-sidhu/50-Reac-js-objective-mcqs-for-interview-questions/blob/main/README.md" target="_blank"> React MCQ </Link>
                                </li>

                                <li>
                                    <Link to="https://cdngmstr.notion.site/React-JS-Interview-Questions-Beginner-Level-209f16a691da800eae3ae176432535fa" target="_blank">Best Interview Questions Asnwers</Link>
                                </li>

                                <li>
                                    <Link to="https://github.com/mohitdjcet/react-interview-questions-answers" target="_blank"> React Beginner & intermediate Level Interview Questions Asnwers </Link>
                                </li>

                                <li>
                                    <Link to="https://www.thecodingskills.com/" target="_blank">All MCQ questions are here</Link>
                                </li>
                            </ul>
                        </div>

                        <h6>
                            Git Repo: <a href="https://github.com/rakesh4288/Raj-Lakshmi-React" target="_blank" rel="noopener noreferrer"> https://github.com/rakesh4288/Raj-Lakshmi-React</a>
                        </h6>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>What is JSX ?</h5>
                        <img src={AppImages.WhatIsJSX} className="img-fluid" alt="what-is-jsx"/>
                    </div>
                </div>
            </section>
        
            <hr className="bg-primary" />

            <section id="npm-vs-npx" className="lighGreenBG pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5>What Are The Differences Between npm and npx?</h5>
                            <p>
                                When we are working with Node.js, you will frequently using the two important tools like npm and npx. 
                                While both npm and npx are important part to managing the JavaScript dependencies, they serve the different purposes.
                            </p>

                            <p>
                                The key difference between npm and npx is that npm is a node package manager for installing and managing the dependencies, <b><i>whereas npx is an execution tool that allows you to run the Node.js packages directly without installing them globally.</i></b>
                            </p>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <p>
                                <img src={AppImages.NPM_VS_NPX} alt={AppImages.NPM_VS_NPX} className="img-fluid" />
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6>When to Use npm:</h6>
                            <ul>
                                <li>When You need to install the packages locally or globally for your project.</li>
                                <li>When You want to manage the dependencies and ensure that they are tracked in your package.json file</li>
                                <li>You are working on a long-term project where you’ll frequently use the same packages and libraries.</li>
                            </ul>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6>When to Use npx:</h6>
                            <ul>
                                <li>When You want to execute a package without the permanently installing it.</li>
                                <li>when You're running one-off commands like create-react-app, eslint, or package binaries.</li>
                                <li>When You need to run a specific version of a package or command without modifying your existing setup.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-primary" />
            
            <section id='how-to-setup-bootstrap' className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h4>Bootstrap Icon:</h4>
                        <h5>All steps - How to install and use:</h5>
                        https://www.npmjs.com/package/react-bootstrap-icons <br />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZwYLOQk-iRo?si=QrS6NLP53AlPglCB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
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
            </section>

            <hr className="bg-danger" />

            <section id="how-to-optimize-react" className="darkBlueBgWithPinkBorder">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5 className="text-white">How to optimize React App ?</h5>
                            <p>Here are some key points By which we can improve the React application like:</p>

                            <ul className="text-white">
                                <li>Code Spliting</li>
                                <li>
                                    <Link className="text-white" to="/fragment-in-react">Using React Fragment</Link>
                                </li>
                                <li>Use key attribute in list: We should always use the key attributes while using .map() method Because React makes the difference between two HTML nodes</li>
                                <li>
                                    <Link className="text-white" to="/what-is-lazy-loading-in-react">
                                    Lazy Loading Component</Link>
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

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            
                        </div> 
                    </div>
                </div>
            </section>

            <section id="vulnerabilities-in-react">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4>What are the vulnerabilities in Node.js?</h4>
                            <p>
                                In Node.js, vulnerabilities are security weaknesses in your application or its dependencies that can be exploited by attackers to:
                            </p>

                            <ul>
                                <li>Run unauthorized code</li>
                                <li>Steal data</li>
                                <li>Crash the app</li>
                                <li>Gain system access</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h5>Common Types of Vulnerabilities in Node.js</h5>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Description</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Remote Code Execution (RCE)</td>
                                        <td>Malicious input leads to code execution</td>
                                        <td>eval() with user input</td>
                                    </tr>

                                    <tr>
                                        <td>Prototype Pollution</td>
                                        <td>Attacker manipulates JS object prototypes</td>
                                        <td>Vulnerable lodash version</td>
                                    </tr>

                                    <tr>
                                        <td>Denial of Service (DoS)</td>
                                        <td>Resource exhaustion crashes the app</td>
                                        <td>Unvalidated JSON, regex backtracking</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Insecure Dependencies</td>
                                        <td>A package has known security bugs</td>
                                        <td>Outdated express, mongoose</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5>Best Practices to Avoid Vulnerabilities</h5>
                            
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Best Practice</th>
                                        <th>Why It Helps</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Keep all dependencies up to date</td>
                                        <td>Becaise it helps to Fixes known issues</td>
                                    </tr>

                                    <tr>
                                        <td>Avoid eval(), exec(), and Function()</td>
                                        <td>Becaise it helps to Prevents code injection</td>
                                    </tr>

                                    <tr>
                                        <td>Validate and sanitize the all user input</td>
                                        <td>Becaise it helps to Stops injection, XSS, etc.</td>
                                    </tr>

                                    <tr>
                                        <td>Use environment variables for secrets</td>
                                        <td>Becaise it helps to Keeps credentials safe</td>
                                    </tr>

                                    <tr>
                                        <td>Implement proper error handling</td>
                                        <td>Becaise it helps to Avoids info leaks</td>
                                    </tr>

                                    <tr>
                                        <td>Use HTTPS</td>
                                        <td>Becaise it helps to Encrypts data in transit</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6>How to Resolve Vulnerabilities when "npm audit fix" does not work</h6>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/GKUW7f91I4w?si=18NUCi5iWqVMr7Dy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;