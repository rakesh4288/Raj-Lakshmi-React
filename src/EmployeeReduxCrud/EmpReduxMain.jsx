import React from "react";
import * as Icon from 'react-bootstrap-icons';
import EmpReduxCreate from "./EmpReduxCreate";
const EmpReduxMain = () => {
    return(
        <div id="emp-redux-main">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="float-start"> 
                                <h4 className="pageHeading"> Employee Redux Crud Dashboard ! </h4>
                            </div>

                            <div className="float-end"> 
                                <button className="btn btn-warning btn-sm">Employee List</button>
                                &nbsp;
                                <button className="btn btn-warning btn-sm">Other Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <EmpReduxCreate />
                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                            <h5> Complete Video Step By Step  <Icon.CameraVideo /></h5>
                            <iframe width="100%" height="500" src="https://www.youtube.com/embed/8vNFuUALYv4?si=pfZ4zXuUvaxLnuL0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EmpReduxMain;