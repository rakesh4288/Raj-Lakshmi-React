import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
const DmartReduxMain = () => {
    const navigate = useNavigate();
    const handleStudentHome = () => {
        navigate('/dmart-crud-via-redux/create');
    }
    return(
        <div id="dmart-redux-main">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="float-start"> 
                                <h4 className="pageHeading"> Dmart Employee Crud Operation using Redux </h4>
                            </div>

                            <div className="float-end"> 
                                <Link className="btn btn-warning btn-sm" to="list">Employee List</Link>
                                &nbsp;
                                <button className="btn btn-warning btn-sm" onClick={handleStudentHome}>Create New Employee</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Outlet />
            </section>

            <hr className="bg-info"/>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                            <h5> Complete Video Step By Step  <Icon.CameraVideo /></h5>
                            <iframe width="100%" height="500" src="https://www.youtube.com/embed/8vNFuUALYv4?si=pfZ4zXuUvaxLnuL0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div>
                                <h6>Here is the command for running json-server</h6>
                                <pre className="alert alert-warning">json-server --watch db.json --port 8000</pre>

                                <a href="https://blog.logrocket.com/using-react-toastify-style-toast-messages/" target="_blank" rel="noreferrer">
                                    https://blog.logrocket.com/using-react-toastify-style-toast-messages/
                                </a> <br /><br />
                                
                                <a href="https://deadsimplechat.com/blog/react-toastify-the-complete-guide/" target="_blank" rel="noreferrer">
                                    https://deadsimplechat.com/blog/react-toastify-the-complete-guide/
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default DmartReduxMain;