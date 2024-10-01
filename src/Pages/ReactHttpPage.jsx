import React from "react";
import * as Icon from 'react-bootstrap-icons';
import DummyUsers from '../Components/DummyUsers';

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
                            <h4>Get Call API with filtered </h4>
                            <DummyUsers />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactHttpPage;