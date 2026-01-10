import { Link, Outlet } from 'react-router-dom';
import DynamicInput from "../Components/DynamicInput";
import ThreeFilterOnApi from '../Components/ThreeFilterOnApi';

const EmployeeDashboard = () => {
    return (
        <div id="employee-dashboard">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                Employees Crud Knowledge  <i className="bi bi-database"></i>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="employee-operation">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="float-start">
                                <h6>Here is the command for running json-server</h6>
                                <pre className="alert alert-warning">json-server --watch db.json --port 8000</pre>
                                <a href="https://blog.logrocket.com/using-react-toastify-style-toast-messages/" target="_blank" rel="noreferrer">
                                    https://blog.logrocket.com/using-react-toastify-style-toast-messages/
                                </a> <br />
                                <a href="https://deadsimplechat.com/blog/react-toastify-the-complete-guide/" target="_blank" rel="noreferrer">
                                    https://deadsimplechat.com/blog/react-toastify-the-complete-guide/
                                </a>
                            </div>

                            <div className="float-end">
                                <Link className="btn btn-success btn-sm" to="create">Add New +</Link>
                                &nbsp;&nbsp;
                                <Link className="btn btn-success btn-sm" to="list">All Employee List</Link>
                            </div>
                            <div className="clearfix"></div>
                            <hr className="bg-success" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="employee-outlet">
                <Outlet />
            </section>

            <hr className="bg-info"/>

            <section id="dynamic-input">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="alert alert-info">
                                <h5>Dynamic Input</h5>
                                <DynamicInput />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <h5>How to create dynamic input: Full Video</h5>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/gMTtCw1iEJ8?si=-k4u-aAP8AThub_q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-info"/>

            <section className="container pt-3 pb-3">
                <ThreeFilterOnApi />
            </section>
        </div>
    )
}

export default EmployeeDashboard;