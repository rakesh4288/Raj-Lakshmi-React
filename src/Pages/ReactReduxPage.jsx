import React, { useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import RajLakshmiModal from "../Components/Modal";
import AppImages from '../Assets';

const ReactReduxPage = () => {
    const [show, setShow] = useState(false);
    const ModalHandler = () => {
        setShow(!show);
    }

    const handleClose = () => {
        setShow(!show);
    }
    return(
        <div id="react-redux-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                What is the React Redux  <Icon.BorderCenter />
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
                                React Redux is a state management library for React applications. Redux is simply helps to manage the state of your application
                            </p>

                            <p>In other words React Redux is used to manage the data of the application by keeping centralized store.</p>

                            <p>
                                It provides a predictable state container by connecting React components to a centralized store, simplifying data flow and enabling efficient management of application state across components.
                            </p>

                            <p>
                                Redux Uses: It makes it easier to manage the state and data. As the complexity of our application increases. At the start, it is hard to understand but it helps to build complex applications. In the beginning, it feels like a lot of work, but it is really helpful.
                            </p>
                        </div>

                        <div className="col-md-6">
                            <h4>Why we learn React Redux?</h4>
                            <div>
                                <p>
                                    In the React development most common task is to update the state, mostly you are passing the state from Parent to child component, and sometimes you need to pass the state from child to parent component. Let's check few scenarios:
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

                    <hr className="bg-success"/>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12">
                            <p>
                                The <b>useSelector()</b> hook is primarily used for extracting the data from Redux store within the functional component. <b>useSelector()</b> takes a selector function as an argument. This function receiving the entire Redux store state and returning the specefic piece of data that the component needs.
                            </p>

                            <p className='text-danger'>
                                When the states are changing inside the Redux store, so the useSelector automatically re-renders, ensuring that it always displays the most up-to-date information.
                            </p>

                            <button className="btn btn-success btn-sm" onClick={ModalHandler}>What is Use Selector ?</button>
                            { show ? <RajLakshmiModal handleClose = {handleClose} /> : null }
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12">
                            <p>
                                <img src={AppImages.useSelectorImg} alt='useSelectorImg' className='img-fluid' />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-dark pt-4 pb-4 mt-4 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h4 className="text-white">What are Reducers in Redux ?</h4>
                            <h6 className="text-white">
                                In Redux, reducers are pure functions that handle state logic, accepting the initial state and action type to update and return the state, facilitating changes in React view components.
                            </h6>

                            <p className="text-white">
                                In a simple way - Reducers are a function which is helping to getting the updated states from the reducer function. Because in Redux we are stroing the states in a common file and this common states are serving to the across application.
                            </p>                            
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6 className="text-white">Here is a syntax:</h6>
                            <pre className="bg-warning p-2">
                                <span>(State,action) =&gt; newState</span><br/>
                            </pre>

                            <p className="bg-warning p-2 text-dark">
                                If you see here we are passing the states and also sending the action type as parameter. So what type of the action we are requesting from Redux Store with the help of reducers only that states are returning.
                            </p>
                        </div>
                    </div>

                    <hr className="bg-warning"/>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6 className="text-warning">Prop Drilling Vs useContext Vs React Redux</h6>
                            <p>
                                <img src={AppImages.PropDrilling_vs_useContext_ReactRedux} alt="PropDrilling_vs_useContext_ReactRedux" className="img-fluid img-thumbnail"/>
                            </p>                           
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="text-white">
                                <p>
                                    useContext and Redux are both state management tools in React. The use of these two is totally based on the requirement. React JS by default providing the useContext where is Redux you need to install separately. 
                                </p>

                                <p>
                                     <b>useContext </b>is helping to solve the Prop Drilling issue. If you have multiple component which is combined with each other like Parent to child component at deep level and you need to get the one state from the top level component so in this case useContext Hook is really helpful for solving this
                                </p>

                                <p>
                                    <b>Redux</b> is a more powerful library which is helping for managing the state. This is keeping the centralized state where any component can interact with centralized store and retrieve the latest states. <br/>
                                    This is more useful for complex state requirements in the applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4 pb-4 mt-4 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h5>Redux Thunk vs. Redux Saga: Choosing the Right Middleware <Icon.Activity/></h5>
                            <h6>
                                Redux is a predictable state container for React apps. This is widely used in React application for managing the application state globaly.
                            </h6>

                            <h6 className="text-danger">
                                Redux Thunk and Redux Saga are the middleware libraries in React applications for handling the side effect such as asynchronous API calls and some complex state transitions and many more. Both offering a solution for handling a asynchronous operations.
                            </h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6><b>Redux Thunk:</b></h6>
                            <p>
                                Redux Thunk is a middleware of React applications which is allow to write the actions creators that returns a functions instead of an action.
                            </p>

                            <p>
                                This function receives the store's dispatch method, which is used to dispatch the regular synchornous actions.
                            </p>

                            <h6>Features:</h6>
                            <ul>
                                <li>Simple setup and integration with existing Redux applications.</li>
                                <li>This is Best for simpler use cases and smaller applications.</li>
                                <li>Easier to understand for developers familiar with Redux.</li>
                            </ul>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6><b>Redux Saga:</b></h6>
                            <p>
                                Redux Saga is also a middleware of React applications that main aim to make a side effect in Redux application. This is easier to manage and more efficient to execute
                            </p>

                            <p>
                                It uses ES6 generators to make asynchronous flow control more readable and easier to debug.
                            </p>

                            <h6>Features:</h6>

                            <ul>
                                <li>This is a more powerful and flexible for complex asynchronous flows.</li>
                                <li>Built-in support for cancellation, which can be useful for handling user interactions like cancellation of ongoing requests.</li>
                                <li>Allows for easier testing due to the use of generator functions.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactReduxPage;