import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.svg';
import './SiteHeader.css';
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

                        {/* <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/basic-info-of-react">React Basic</Link>
                        </li> */}

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
                            </ul>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/react-redux-tutorial">React Redux</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="react-hook-tutorial">Hooks Tutorial</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="react-http-tutorial">HTTP Tutorial</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Utility Pages
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#">React Fragment</Link></li>
                                <li><Link className="dropdown-item" href="#">Higher Order Component</Link></li>
                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="react-router-tutorial">Router Page</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="node-tutorial">Learning Node Js</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default SiteHeader;