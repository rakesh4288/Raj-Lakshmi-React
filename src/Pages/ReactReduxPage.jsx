import React, { useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import RajLakshmiModal from "../Components/Modal";

const ReactReduxPage = () => {
    const [show, setShow] = useState(false);
    const ModalHandler = () => {
        setShow(!show);
    }

    const handleClose = () => {
        setShow(!show);
    }
    return(
        <div id="react-redux-page" onClick={handleClose}>
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                What is React Redux  <Icon.BorderCenter />
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="check-prop-types">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                React Redux is a state management library for React applications. Redux is simply helps to manage the state of your application
                            </p>

                            <p>In other words it is used to manage the data of the application.</p>

                            <p>
                                It provides a predictable state container by connecting React components to a centralized store, simplifying data flow and enabling efficient management of application state across components.
                            </p>

                            <p>
                                Uses: It makes it easier to manage state and data. As the complexity of our application increases. At the start, it is hard to understand but it helps to build complex applications. In the beginning, it feels like a lot of work, but it is really helpful.
                            </p>

                            <button className="btn btn-success btn-sm" onClick={ModalHandler}>Show the Modal</button>
                            { show ? <RajLakshmiModal handleClose = {handleClose} /> : null }
                        </div>

                        <div className="col-md-6">
                            <h4>Why learn React Redux?</h4>
                            <div>
                                <p>
                                    In React development most commonly task is to update the state, mostly you are passing the state from Parent to child component, and sometimes you need to pass the state from child to parent component. Let's check few scenarios:
                                </p>
                                <ul>
                                    <li>
                                        Let's suppose you have some complex code component structure where you are passing the state using the props so sometimes it can be a difficult to manage the props via upwards or downwards.
                                    </li>

                                    <li>Generally React passing the props via parent to child like Downwards it means top to the bottom, and similarly how you will the states from bottom to top you will use the callback options no any other methods are present to handle this case.</li>

                                    <li>So handle this situation you can use the Redux where Redux provides the centralized store to help the data flows and provides the smooth transitions to update the states</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactReduxPage;