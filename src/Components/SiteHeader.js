import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.svg';
import * as Icon from 'react-bootstrap-icons';
const SiteHeader = () => {
    return(
        <div id='site-header'>
            <nav className="navbar navbar-expand-lg navbar-dark navBg fixed-top">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    राजलक्ष्मी
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            React Basic
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/basic-info-of-react">
                                        <Icon.ArrowRight /> React Basic Landing Page
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/react-controlled-uncontrolled-component">
                                        <Icon.ArrowRight /> Controlled and Uncontrolled Component
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/life-cycle-method-in-react">
                                        <Icon.ArrowRight /> Life Cycle Method in React
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/react-redux-tutorial">React Redux</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Form Handling
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/how-to-handle-form-in-react">
                                        <Icon.ArrowRight /> React Form Dashboard
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/checkbox-operation-in-react">
                                        <Icon.ArrowRight /> Checkbox Operation 
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/how-to-upload-files">
                                        <Icon.ArrowRight /> Basic File Upload Functionlity
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/basic-live-search">
                                        <Icon.ArrowRight /> Live Search By Textbox
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/radio-operation-in-react">
                                        <Icon.ArrowRight /> Radio Selection Operation 
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="react-hook-tutorial">Hooks Tutorial</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                HTTP Tutorial
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/react-http-tutorial">
                                        <Icon.ArrowRight /> React HTTP Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/http-react-get-call">
                                        <Icon.ArrowRight /> HTTP Get Call
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/http-react-post-call">
                                        <Icon.ArrowRight /> HTTP Post Call
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/how-to-perform-ascending-descending-order">
                                        <Icon.ArrowRight /> Ascending Descending Order
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Utility Pages
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/fragment-in-react">
                                        <Icon.ArrowRight /> React Fragment
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link className="dropdown-item" to="/higher-order-component-in-react">
                                        <Icon.ArrowRight /> Higher Order Component
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/how-to-pass-data-from-child-to-parent-component">
                                        <Icon.ArrowRight /> How to pass data from Child to Parent
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/what-is-debouncing-and-throttling">
                                        <Icon.ArrowRight /> Debouncing and Throttling in React
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/what-is-lazy-loading-in-react">
                                        <Icon.ArrowRight /> Lazy Loading in React
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="react-router-tutorial">Router Page</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="node-tutorial">Learning Node Js</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Crud Operation
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/employees-dashboard/create">
                                        <Icon.ArrowRight /> Employees Crud
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/computer-material-dashboard">
                                        <Icon.ArrowRight /> Computer Accessories
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/simple-crud-using-redux-toolkit">
                                        <Icon.ArrowRight /> Crud using Redux Toolkit
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default SiteHeader;