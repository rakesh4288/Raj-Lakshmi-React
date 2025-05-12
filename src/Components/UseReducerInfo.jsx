import React, { useReducer } from "react";
import * as Icon from 'react-bootstrap-icons';

const UseReducerInfo = () => {
    const initialState = {
        count: 0,
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'increment' : {
                return { 
                    count: state.count + 2
                }
            }

            case 'decrement': {
                return {
                    count: state.count - 2
                }
            }

            default: {
                return state;
            }
        }   
    }

    const [state, dispatch]= useReducer(reducer, initialState);
    const increment = () => {
        dispatch({ type: "increment" });
    }

    const decrement = () => {
        dispatch({ type: 'decrement' });
    }

    return(
        <div id="use-reducer-info">
            <h3> <i>useReducer</i> React Hook Page <Icon.BagPlusFill /> </h3>
            <ul>
                <li>useReducer hook is a very powerful hook that can simplify the complex state management in your react application.</li>
                <li>This hook is verfy helpful for handling the large amount of todo function using the switch case.</li>
            </ul>

            <h6>When do you use the useReducer Hook ?</h6>
            <p>
                Actually <b>useState</b> hook is already sufficient for handling the simple state management. <b>But when you wanted to handle the several todo function so this is the situation where you can apply the useReducer hook.</b>
            </p>
            <p className="text-danger"> The useReducer Hook returns the current state and a dispatch the method. </p>
            <p> The reducer function contains your custom state logic and the initial state can be a simple value but generally will contain an object. </p>

            <div className="alert alert-info">
                <div className="row">
                    <div className="col-md-8">
                        <h6>Let's follow the below steps in order to implement the useReducer Hook:</h6>
                            <ul>
                                <li>Firslty You need to import <b>useReducer</b> hook from the react</li>
                                <li>Since this is a function so you need to call the function and keep remember we need to pass the two parameters - one is reducer and another one is the initial state</li>
                                <li>Now we need to make reducer function and inside that we can initialize the todos function and also we will assign the initial state for the second parameter.</li>
                                <li>Next is that you need to destruct the useRecuder function into array format</li>
                                <li>First will be the <b>State</b> and other one is <b>dispatch</b></li>
                            </ul>

                            <hr className="bg-primary"/>

                            <ul>
                                <li>After above steps, this is the time Where we need to make the <b>reducer function</b></li>
                                <li>This function is accepting a two parameter one is <b>state</b> and another one is <b>action</b> </li>
                                <li>Only action is responsible for finding the manipulating or business logic</li>
                                <li>Now either you can make a <b>Switch Case statement</b> or <b>if conditoin</b></li>
                                <li>Now each case you need to verify and make the operation and dispatch the latest value</li>
                            </ul>

                            <ul>
                                <li>Here is the switch case statement come into the picture Because we have large amount of todos function so we need to make the cases for per case</li>
                                <li>When we are dispaching the function on that we need to confirm our reguest type like what we are looking "Increment" or "Decrement"</li>
                            </ul>
                    </div>

                    <div className="col-md-4">
                        <button className="btn btn-success btn-sm" onClick={increment}>Increment By 2</button>
                        <h6>Count: {state.count} </h6>
                        <button className="btn btn-danger btn-sm" onClick={decrement}>Decrement By 2</button>
                    </div>
                </div>
            </div>

            <iframe width="100%" height="500" src="https://www.youtube.com/embed/mEv3VFNu5Eo?si=U3kd0txvsExzdWNh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <hr className="bg-primary"/> 
        </div>
    )
}

export default UseReducerInfo;