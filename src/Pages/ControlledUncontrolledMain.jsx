import React from "react";
import * as Icon from 'react-bootstrap-icons';
import AppImages from "../Assets";
import Controlled from '../Components/Controlled';
import Uncontrolled from '../Components/Uncontrolled';
const ControlledUncontrolledMain = () => {
    return (
        <div id='controlled-uncontrolled-component'>
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                What is Controlled Uncontrolled Component  <Icon.Backpack />
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grayBgWithPinkBorder">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                           <h6> In React, Controlled components refer to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves.</h6>

                           <div className="row">
                                <br/>
                                <div className="col-md-6">
                                    <p>
                                        <img src={AppImages.ControlledUncontrolledImg} alt="ControlledUncontrolledImg" className="img-fluid" />
                                    </p>
                                </div>

                                <div className="col-md-6">
                                    <iframe width="100%" height="350" src="https://www.youtube.com/embed/rpdhFx9bnW8?si=_JZwKu7W59th--rT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                                <br/>
                           </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="alert alert-info">
                                <h5>Controlled Component</h5>
                                <p>
                                Controlled Components are the components which is totaly handled by the react. while working with form element if you are using state for handling the input values so it is called the controlled component Because you are assigning the value to state and this is states controlled by the React Life Cycle Hook and its called while rendering the component.
                                </p>

                                <Controlled/> <br/>

                                <div>
                                    <h6>Controlled Component Screenshot:</h6>
                                    <img src={AppImages.ControlledImg} alt="ControlledImg" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="alert alert-warning">
                                <h5>Uncontrolled Component</h5>
                                <p>
                                    Uncontrolled Components are the components that are not controlled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.
                                </p>
                                <Uncontrolled/> <br/>
                                <div>
                                    <h6>Uncontrolled Component Screenshot:</h6>
                                    <img src={AppImages.UncontrolledImg} alt="UncontrolledImg" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ControlledUncontrolledMain;