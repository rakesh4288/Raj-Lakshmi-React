import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.svg';
import './PagesStyle.css';
import AppImages from "../Assets";

const HomePage = () => {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const toggleHandler = () => { setToggle(!toggle); }
    const handleGit = () => { navigate('/what-is-git-and-git-github') }
    const handleMicroFrontEnd = () => { navigate('/what-is-micro-front-end-architecture-in-react') }
    const handleGraphQL = () => { navigate('/learning-graphql-technologies')}
    const handleJenkins = () => { navigate('/learning-ci-cd-pipelines-with-jenkins')}

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
                                        Learning Git & GitHub <i className="bi bi-alexa"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="basic-react-info" className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h5>
                            The latest stable version of React is 19.2.0, <Link to="/react-19-features"><i><b>React 19 Features Just Checkout</b></i></Link> <br /> which was released on March 28, 2025. React 19 was officially released on December 5, 2024.
                        </h5>

                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <button className="btn btn-primary btn-sm" onClick={handleMicroFrontEnd}>
                                What is Mirco Front End Architecture <i className="bi bi-browser-edge"></i>
                            </button>

                            <div className="float-end">
                                <button className="btn btn-danger btn-sm" onClick={handleGraphQL}>
                                    Learning GraphQL <i className="bi bi-balloon"></i>
                                </button>
                            </div>

                            <button className="btn btn-success btn-sm" onClick={handleJenkins}>
                                Learning Jenkins CI/CD Pipelines <i className="bi bi-bluesky"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="bg-primary" />

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h4>Advantages <i className="bi bi-patch-plus-fill"></i></h4>
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
                        <h4>Disadvantages: <i className="bi bi-list-ul"></i></h4>
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
                            The current version of React is 19.0.0, which was released on December 5, 2024. React 19 is designed to improve the performance and efficiency, and to streamline the web development processes. <br /><br /> It's compatible with most existing React projects, but there are some changes and deprecated features that developers should be aware of.
                        </h6>

                        <h5>What is the stable version of React: <br />React 18 is the stable version which was released on March 29, 2022.</h5>
                    </div>
                </div>
            </section>

            <hr className="bg-danger" />

            <section id="interview-list" className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="alert alert-dark">
                            <h6> React Interview Questions <i className="bi bi-infinity"></i></h6>
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
                            </ul>
                        </div>

                        <h6>
                            Git Repo: <a href="https://github.com/rakesh4288/Raj-Lakshmi-React" target="_blank" rel="noopener noreferrer"> https://github.com/rakesh4288/Raj-Lakshmi-React</a>
                        </h6>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>What is JSX ?</h5>
                        <img src={AppImages.WhatIsJSX} className="img-fluid" alt="what-is-jsx" />
                    </div>
                </div>
            </section>

            <hr className="bg-primary" />

            <section id="npm-vs-npx" className="lighGreenBG pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5>What are the differences between npm and npx?</h5>
                            <p>
                                When we are working with Node.js, you will frequently using the two important tools like npm and npx.
                                While both npm and npx are important part to managing the JavaScript dependencies, they serve the different purposes.
                            </p>

                            <p>
                                The key difference between npm and npx is that npm is a node package manager for installing and managing the dependencies, <b><i>whereas npx is an execution tool that allows you to execute the Node.js packages directly.</i></b>
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
                                <li>When You are working on a long-term project where you'll frequently use the same packages and libraries.</li>
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

            <section id="how-to-optimize-react" className="whiteBgWithVioletBorder">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5>How to optimize the React App ?</h5>
                            <p>Here are some key points By which we can improve the React application like:</p>

                            <ul>
                                <li>
                                    Code Spliting - We can divide the code in multiple parts By this wasy React bundle size can be a less and it will help to eady debug.
                                </li>

                                <li>
                                    <Link to="/react-hook-tutorial/use-memo-page"> using useMemo & useCallback Hook -</Link> we can use the useMemo and useCallback hook for increasing the performance and optimization.
                                </li>


                                <li>
                                    <Link to="/what-is-lazy-loading-in-react"> Lazy Loading -</Link> Lazy Loading can also help to optimize the react app. If your any component which is taking a time to load on the screen so you can bind these kind of component using lazy and suspense component.
                                </li>

                                <li>
                                    <Link to="/what-is-debouncing-and-throttling"> Debouncing & Throttling -</Link> We should also use Debouncing and Throttling for increasing the React Application performance. Debouncing is working with setTimeout function and Throttling is using setInterval function.
                                </li>

                                <li>
                                    <Link to="/data-virtualization-in-react">Data Virtualization - </Link> Data Virtualization is also helping for loading thousand and thousand records without delaying. It is helping to optimize the React App.
                                </li>
                                
                                <li>
                                    <b>Use key attribute in list:</b> We should always use the key attributes while using .map() method Because React makes the difference between two HTML nodes.
                                </li>

                                <li>
                                    <Link to="/fragment-in-react">React Fragment -</Link> We can also use the React Fragment to remvoe the unnecessary extra HTML node. We can use the blank html container to remove extra element.
                                </li>
                                
                                <li>Using Es Lint for better coding experience.</li>
                                <li>Don't use the Inline CSS styling and inline event.</li>
                            </ul>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/CaShN6mCJB0?si=dGgjn5ixlUfyqxyK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
                                In Node.js, vulnerabilities are security weaknesses in your application
                            </p>

                            <p>
                                Vulnerabilities in Node.js projects often arise from its large, open-source ecosystem, asynchronous nature, and server-side access to system resources. Key threats include insecure third-party dependencies, injection attacks, cross-site scripting (XSS), broken authentication, and inadequate error handling that exposes system data
                            </p>

                            <ul>
                                <li>Run unauthorized code</li>
                                <li>Steal data</li>
                                <li>Crash the app</li>
                                <li>Gain system access</li>
                                <li>Cross Site Scripting Attacks</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h5>Common types of Vulnerabilities in Node.js</h5>
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
                            <h5>Best practices to avoid Vulnerabilities</h5>

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
                                        <td>Because it helps to Fixes known issues</td>
                                    </tr>

                                    <tr>
                                        <td>Avoid eval(), exec(), and Function()</td>
                                        <td>Because it helps to Prevents code injection</td>
                                    </tr>

                                    <tr>
                                        <td>Validate and sanitize the all user input</td>
                                        <td>Because it helps to Stops injection, XSS, etc.</td>
                                    </tr>

                                    <tr>
                                        <td>Use environment variables for secrets</td>
                                        <td>Because it helps to Keeps credentials safe</td>
                                    </tr>

                                    <tr>
                                        <td>Implement proper error handling</td>
                                        <td>Because it helps to Avoids info leaks</td>
                                    </tr>

                                    <tr>
                                        <td>Use HTTPS</td>
                                        <td>Because it helps to Encrypts data in transit</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6>How to Resolve Vulnerabilities when "npm audit fix" does not work</h6>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/VAHkHj3I6Wg?si=dEoLFRWJzvoIGbrq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-danger" />

            <section id='how-to-setup-bootstrap-icons' className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>Bootstrap Icon: Step By Step Installation</h5>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/kS2AGb_cfgE?si=h_aZXY8OGkXTu_Jz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <Link to="https://icons.getbootstrap.com/" target="_blank">https://icons.getbootstrap.com/</Link>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>Toggle Theme:</h5>
                        <div className={toggle ? 'darkTheme' : 'whiteTheme'}>
                            <h6 className="whiteIcon">Dark Mode Challenge {toggle ? <i className="bi bi-brightness-alt-high whiteIcon" onClick={toggleHandler}></i> : <i className="bi bi-moon" onClick={toggleHandler}></i>}</h6>
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
        </div>
    )
}

export default HomePage;