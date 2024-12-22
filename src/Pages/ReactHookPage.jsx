import React from "react";
import './PagesStyle.css';
import { Link, Outlet } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
const ReactHookPage = () => {
    return(
        <div id="react-hook-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="pageHeading"> React Hook Dashboard !! <Icon.Badge3dFill  /> </h3>
                        </div>
                    </div>
                </div>
            </section>

            <section id="hooks-main-body" className="hooksMainBody">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <Outlet/>
                            <div id="basic-hook-info">
                                <h5>React Hooks were added to React in version 16.8.</h5>
                                <p>
                                    Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
                                </p>

                                <h5>What is a Hook?</h5>
                                <p>
                                    Hooks allow us to "hook" into React features such as state and lifecycle methods.
                                </p>

                                <h5>Hook Rules</h5>
                                <p>
                                    There are 3 rules for hooks:
                                </p>
                                <ul>
                                    <li>Hooks can only be called inside React function components.</li>
                                    <li>Hooks can only be called at the top level of a component.</li>
                                    <li>Hooks cannot be conditional</li>
                                </ul>

                                <div className="alert alert-warning">
                                    Note: Hooks will not work in React class components.
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">React Hooks List</li>
                                <li className="list-group-item">
                                   <Link to="use-state-page" className="link">
                                   <Icon.ArrowRight color="red"  /> useState</Link> 
                                </li>

                                <li className="list-group-item">
                                    <Link to="use-effect-page" className="link">
                                    <Icon.ArrowRight color="red"  /> useEffect</Link> 
                                </li>

                                <li className="list-group-item">
                                    <Link to="use-context-page" className="link">
                                    <Icon.ArrowRight color="red"  /> useContext</Link>
                                </li>

                                <li className="list-group-item">
                                    <Link to="use-memo-page" className="link">
                                    <Icon.ArrowRight color="red"  /> useMemo</Link>
                                </li>

                                <li className="list-group-item">
                                    <Link to="use-callback-page" className="link">
                                    <Icon.ArrowRight color="red"  /> useCallback</Link>
                                </li>

                                <li className="list-group-item">
                                    <Link to="use-reducer-page" className="link">
                                        <Icon.ArrowRight color="red"  /> useReducer
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactHookPage;