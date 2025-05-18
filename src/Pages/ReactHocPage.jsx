import React from "react";
import AppImages from "../Assets";
import * as Icon from 'react-bootstrap-icons';
import SimpleDashboard from "../Components/SimpleDashboard";
import withAuth from "../Global/withAuth";

const ReactHocPage = () => {
    const UserAuthentication = withAuth(SimpleDashboard);
    return (
        <div id="higher-order-component">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                React Higher Order Component !! <Icon.Border />
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h6>
                                Definition: Higher order component is a React frunction which is accepting a component as a parameter and returning with new component after adding the business logic.
                            </h6>

                            <h6>You can also say that - Newly component produced after adding extra features</h6>

                            <h6>const updatedComponent = HOCcomponent(component)</h6>

                            <p>
                                <img src={AppImages.HOCBasicStructure} alt="HOCBasicStructure" className="img-fluid" />
                            </p>

                            <div>
                                <h5>How to call the HOC component:</h5>
                                <div>
                                    <ul>
                                        <li>First your need to create one component which you wanted to show after the authenticatoin is passed</li>
                                        <li>We have created one simple dashboard component</li>
                                        <li>In any component you need to import the HOC component and pass the simple dashboard component as a parameter. please refer below screenshot</li>
                                        <li>Then finally you need to assgin in any variable and this variable will behave like component and you can use anywhere</li>
                                    </ul>
                                </div>
                                <p>
                                    <img src={AppImages.HowtoCallHOC} alt="how to call hoc" />
                                </p>
                            </div>

                            <div>
                                <UserAuthentication />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactHocPage;