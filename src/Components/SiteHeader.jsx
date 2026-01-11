import { Link } from 'react-router-dom';
import logo from '../Assets/logo.svg';
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
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                React Basic
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/basic-info-of-react">
                                            <i className="bi bi-arrow-right"></i> React Basic Page
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link className="dropdown-item" to="/react-controlled-uncontrolled-component">
                                            <i className="bi bi-arrow-right"></i> Controlled and Uncontrolled Component
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/life-cycle-method-in-react">
                                            <i className="bi bi-arrow-right"></i> Life Cycle Method in React
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/how-to-pass-data-from-child-to-parent-component">
                                            <i className="bi bi-arrow-right"></i> How to pass data from Child to Parent
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    React Redux
                                </Link>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/react-redux-tutorial">
                                            <i className="bi bi-arrow-right"></i> Redux Home Page
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/simple-crud-using-redux-toolkit">
                                            <i className="bi bi-arrow-right"></i> Crud Operation with React Redux Toolkit
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/http-get-api-calling-via-redux-thunk">
                                            <i className="bi bi-arrow-right"></i> Http API calling via Redux Thunk
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/dmart-crud-via-redux/create">
                                            <i className="bi bi-arrow-right"></i> Dmart Emp Crud Operatoin with Redux
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Form Handling
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/how-to-handle-form-in-react">
                                            <i className="bi bi-arrow-right"></i> Form Dashboard
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/checkbox-operation-in-react">
                                            <i className="bi bi-arrow-right"></i> Checkbox Operation 
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/how-to-upload-files">
                                            <i className="bi bi-arrow-right"></i> Basic File Upload Functionlity
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/basic-live-search">
                                            <i className="bi bi-arrow-right"></i> Live Search By Textbox
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/radio-operation-in-react">
                                            <i className="bi bi-arrow-right"></i> Radio Selection Operation 
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/todo-operation-in-react">
                                            <i className="bi bi-arrow-right"></i> To Do Operations Dashbaord
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
                                            <i className="bi bi-arrow-right"></i>> React HTTP Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/http-react-get-call">
                                            <i className="bi bi-arrow-right"></i> HTTP Get Call
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/http-react-post-call">
                                            <i className="bi bi-arrow-right"></i> HTTP Post Call
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/how-to-perform-ascending-descending-order">
                                            <i className="bi bi-arrow-right"></i> Ascending Descending Order
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/data-virtualization-in-react">
                                            <i className="bi bi-arrow-right"></i> Data Virtualization 
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
                                            <i className="bi bi-arrow-right"></i> React Fragment
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link className="dropdown-item" to="/higher-order-component-in-react">
                                            <i className="bi bi-arrow-right"></i> Higher Order Component
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/how-to-pass-data-from-child-to-parent-component">
                                            <i className="bi bi-arrow-right"></i> How to pass data from Child to Parent
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/what-is-debouncing-and-throttling">
                                            <i className="bi bi-arrow-right"></i> Debouncing and Throttling in React
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/what-is-lazy-loading-in-react">
                                            <i className="bi bi-arrow-right"></i> Lazy Loading in React
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
                                CRUD
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/employees-dashboard/create">
                                            <i className="bi bi-arrow-right"></i> Employees Crud
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/computer-material-dashboard">
                                            <i className="bi bi-arrow-right"></i> Computer Accessories
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/simple-crud-using-redux-toolkit">
                                            <i className="bi bi-arrow-right"></i> Crud using Redux Toolkit
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/todo-operation-in-react">
                                            <i className="bi bi-arrow-right"></i> To Do Operations Dashbaord
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/how-to-write-test-cases-in-react">React Testing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default SiteHeader;