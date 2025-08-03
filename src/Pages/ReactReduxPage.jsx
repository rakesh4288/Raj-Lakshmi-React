import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import RajLakshmiModal from "../Components/Modal";
import AppImages from '../Assets';
import CounterAppUsingRedux from "../Components/CounterAppUsingRedux";
import TaskManager from "../Components/TaskManager";

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
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                            <h4 className="pageHeading">
                                What is the React Redux  <Icon.BorderCenter />
                            </h4>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                            <Link to="/simple-crud-using-redux-toolkit" className="btn btn-warning btn-sm">Crud Operation using Redux Toolkit</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            React Redux is a state management library. Redux is simply helps to manage the state of your entire application
                        </p>

                        <p>
                            In other words React Redux is used to manage the data of the application by keeping centralized store.
                        </p>

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
                        <div>
                            <h6>Steps for configure Redux:</h6>
                            <ul>
                                <li>Step 1: Firstly we need to create the store</li>
                                <li>Step 2: Wrap the react app by using provider and add the store attribute and assign the store configuration in index.js file</li>
                                <li>Step 3: Create the feature slice, This is the actual file where you need to create feature about common States</li>
                                <li>
                                    Step 4: Register the slice feature with store.js file., This file needs all the slice registration
                                </li>
                                <li>
                                    Step 5: Later you can use the useSelector() hook for getting the latest data from the store
                                    </li>
                                <li>
                                    Step 5: And if you wanted to update the state then you need to use the useDispatch() hook to pass the action to the reducer, and reducer will take your action and payload and perform the opertion based on your request
                                </li>
                            </ul>
                            <h6>
                                Best tutorial for Setup: <Link href="https://whataboutcoding.com/redux-toolkit-tutorial/" target="_target">https://whataboutcoding.com/redux-toolkit-tutorial/</Link> 
                            </h6>
                        </div>

                        <hr className="bg-primary"/>
                        <p>
                            The <b>useSelector()</b> hook is primarily used for extracting the data from Redux store within the functional component. <b>useSelector()</b> takes a selector function as an argument. This function receiving the entire Redux store state and returning the specefic piece of data that the component needs.
                        </p>

                        <p className='text-danger'>
                            When the states are changing inside the Redux store, so the useSelector automatically re-renders and ensuring that you are always receiving the most up-to-date information.
                        </p>

                        <button className="btn btn-success btn-sm" onClick={ModalHandler}>What is Use Selector - See in Modal ?</button>
                        { show ? <RajLakshmiModal handleClose = {handleClose} /> : null }

                        <CounterAppUsingRedux initialState={0}/>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12">
                        <p>
                            <img src={AppImages.useSelectorImg} alt='useSelectorImg' className='img-fluid' />
                        </p>

                        <div>
                            <h5>What are the action in Redux ?</h5>
                            <p>
                                If I would say in simple terms so Actions are the just message which is just dispatching to the reducer like what to do. Then reducer are taking the action and performing the operations and updating the state.
                            </p>
                            <p>
                                Actions are the plain JavaScript objects that have a type field. As mentioned earlier,
                                you can think of an action as an event that describes something that happened in the application.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-dark pt-4 pb-4 mt-4 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h4 className="text-white">What are the Reducers in Redux ?</h4>
                            <p className="text-white">
                                In a simple way - Reducers are a function which is helping to getting the updated states from the reducer function. Because in Redux we are stroing the states in a common file and this common states are serving to the across application.
                            </p> 

                            <p className="bg-warning p-2">
                                Reducers are the actual place where you are manipulating the states and defining your actual logic here.
                            </p>

                            <p className="text-white">
                                Reducers: As we know already, actions only tell what to do, but they don't tell how to do, so reducers are the pure functions that take the current state and action and return the new state and tell the store how to do. Store: The store is the object which holds the state of the application.27 Jan 2019
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

                            <div className="lightGreenBG">
                                <h6>can we have multiple reducers in redux</h6>
                                <p>
                                    Yes, it is possible to have multiple reducers in Redux. While Redux maintains a single, immutable state tree, it provides a utility function called combineReducers to manage different parts, or "slices," of that state tree with separate reducer functions.
                                </p>
                            </div>
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
                                    <b>Redux</b> is a more powerful library which is helping to managing the state. This is keeping the centralized state where any component can interact with centralized store and retrieve the latest states. <br/>
                                    This is more useful for complex state requirements in the applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>Best Redux Interview Questions:</h5>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Qh9tarU1KWg?si=XJ7WAoxXDDfzmrHX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>How to call the API using Redux Thunk:</h5>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/2JBx_06dD1k?si=VLPTfoq2U7AP1GDt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            <section className="pt-4 pb-4 mt-4 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h5>Redux Thunk vs. Redux Saga: Choosing the Right Middleware <Icon.Activity/></h5>
                            <h6>
                                Redux is a predictable state container for React apps. This is a mainly used in React application for managing the application state globally.
                            </h6>

                            <h6 className="text-danger">
                                Redux Thunk and Redux Saga are the middleware libraries in React applications for handling the side effect such as asynchronous API calls and some complex state transitions and many more. Both are offering the solution for handling a asynchronous operations.
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
                                Redux Saga is also a middleware of the React applications and the main purpose is to make a side effect in the Redux application while dealing with API. This is easier to manage and more efficient to execute
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

            <hr className="bg-primary"/>

            <section className="pt-2 pb-2 mt-2 mb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <TaskManager />
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5>Redux Toolkit Video for Task Management: </h5>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/EV168NQvCHc?si=d4E4WDHoW7q8iZSA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactReduxPage;