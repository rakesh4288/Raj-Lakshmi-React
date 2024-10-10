import React from "react";
import * as Icon from 'react-bootstrap-icons';
import AppImages from "../Assets";
import SearchByColumn from '../Components/SearchByColumn';
const ReactHttpPage = () => {
    return (
        <div id="react-http-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                Learning HTTP in React !!
                                <Icon.Airplane />
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                An API call in React is the process of sending a request to a web API from within React, which allows your application to interact and exchange information with other systems.
                            </p>

                            <p>
                                <img src={AppImages.ReactHttpRequest} alt="http" className="img-fluid" />
                            </p>

                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/8GBSO6PYKc4?si=AkN-TQmmkziAC8wB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>

                        <div className="col-md-6">
                            <SearchByColumn />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactHttpPage;