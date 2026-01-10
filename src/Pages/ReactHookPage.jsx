import './PagesStyle.css';
import { Link, Outlet } from "react-router-dom";
const ReactHookPage = () => {
    return(
        <div id="react-hook-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                            <h3 className="pageHeading">
                                React Hook Dashboard !! <i className="bi bi-shield-slash-fill"></i>
                            </h3>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="text-end mt-2">
                                <Link to="/how-to-create-custom-hook" className="btn btn-warning btn-sm">
                                    Go to Custom Hook
                                </Link>
                            </div>
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
                                   <i className="bi bi-arrow-right"></i> useState</Link> 
                                </li>

                                <li className="list-group-item">
                                    <Link to="use-effect-page" className="link">
                                    <i className="bi bi-arrow-right"></i> useEffect</Link> 
                                </li>

                                <li className="list-group-item">
                                    <Link to="use-context-page" className="link">
                                    <i className="bi bi-arrow-right"></i> useContext</Link>
                                </li>

                                <li className="list-group-item">
                                    <Link to="use-memo-page" className="link">
                                    <i className="bi bi-arrow-right"></i> useMemo</Link>
                                </li>

                                <li className="list-group-item">
                                    <Link to="use-callback-page" className="link">
                                    <i className="bi bi-arrow-right"></i> useCallback</Link>
                                </li>

                                <li className="list-group-item">
                                    <Link to="use-reducer-page" className="link">
                                        <i className="bi bi-arrow-right"></i> useReducer
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link to="use-ref-page" className="link">
                                        <i className="bi bi-arrow-right"></i> useRef
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