import React from "react";
import * as Icon from 'react-bootstrap-icons';
import AppImages from "../Assets";

const ReactHttpPage = () => {
    return(
        <div id="react-http-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                Learning HTTP in React !!
                                <Icon.Airplane/>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                           <p>
                                An API call in React is the process of sending a request to a web API from within React, which allows your application to interact and exchange information with other systems.
                           </p>

                           <p>
                            <img src={AppImages.ReactHttpRequest} alt="http" className="img-fluid" />
                           </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactHttpPage;