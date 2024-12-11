import React from "react";
import AppImages from "../Assets";

const InterviewPart_1 = () => {
    return (
        <div id="interview-part-1">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> React Interview Questions Answer Part 1</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="virtual-dom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5>What is Virtual DOM concept in React Js</h5>
                            <h6>Before leaning virtual let's understand the DOM first</h6>
                            <div className="alert alert-warning">
                                <h6>What is DOM ?</h6>
                                <p><b>DOM stands for Document Object Model.</b> In simple terms, it is a structured representation of the HTML elements that are present in a webpage or web app. DOM represents the entire UI of your application. The DOM is represented as a tree data structure. It contains a node for each UI element present in the web document. It is very useful as it allows web developers to modify content through JavaScript, also it being in structured format helps a lot as we can choose specific targets and all the code becomes much easier to work with.</p>
                            </div>

                            <div className="alert alert-info">
                                <h6>What is Virtual DOM ?</h6>
                                <p><b>VirtualDOM in React is a lightweight copy of the actual DOM.</b> Its a virtual representation of the DOM and its optimized the code and take the updates on every object that exists in the original DOM,</p>

                                <p>
                                    Manipulating DOM is slow,  but manipulating Virtual DOM is very fast because its taking full refresh of the screen.
                                </p>

                                <p>
                                    So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <p>Understand by Figure: </p>
                            <p>
                                <img src={AppImages.virtualDom_1} alt="virtualDom_1" className="img-fluid" />
                            </p>

                            <div className="alert alert-danger">
                                <h6>Summary</h6>
                                <p>
                                    <b>Virtual DOM plays a major role in boosting the performance</b> of the applications. When the state of a component changes in an application, the Virtual DOM is updated and then compared with its previous state of the component.<b>Only those few objects are changed in the real DOM that was the outcome of the comparison between the previous states and the new states.</b> This feature made things move faster and also reduced cost. We hope you understood the comparison of virtual dom vs real dom and why React uses virtual dom.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-primary" />

            <section id="prop_vs_state">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Difference between props and state ?</h4>
                            <p>When we working with React components, it's important to understand the differences between state and props. Here, we'll take a look at some common conditions and compare the behavior of props and state.</p>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>State</th>
                                        <th>Props</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>State is managed within the component</td>
                                        <td>Props gets passed to the component</td>
                                    </tr>

                                    <tr>
                                        <td>State can be changed and its mutable</td>
                                        <td>Where props are readonly its cannot be changed, its immutable</td>
                                    </tr>

                                    <tr>
                                        <td>State can be accessed using the use state hooks in a functional components and in a class component we can use by this.state</td>
                                        <td>Similarly, Props can be accessed in functional component using props as a parameter And in a class based component we can accessed by this.props keyword</td>
                                    </tr>

                                    <tr>
                                        <td>States are controlled by React component</td>
                                        <td>Where as Props are controlled by whoever renders the components</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>State vs Props in React: A Comparison Table</h5>
                            <p>
                                <img src={AppImages.StatePropsCamparison} alt="state props" className="img-fluid" />
                            </p>

                            <p>
                                As we can see from the table, props and state have some similarities. They are both plain JavaScript objects that can contain default values, and they are both read-only when using the `this` keyword.
                            </p>
                        </div>

                        <div className="col-md-6">
                            <p>
                                <img src={AppImages.StateVsProps} alt="state props" className="img-fluid" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-danger" />

            <section id="bidirectional-vs-unidirectional">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>React js is bidirectional or unidirectional</h4>
                            <p>
                                React uses a unidirectional data flow, which means that data flows in one direction, from parent to child components. This is a structural best practice for React applications.
                            </p>

                            <div className="alert alert-warning">
                                The React core team strongly recommends using unidirectional data flow as often as possible.
                            </div>

                            <p>
                                <b>Unidirectional Data Flow:</b> React enforces a unidirectional data flow, where data flows downwards from parent components to child components via props. This one-way flow of data makes the application state more predictable and easier to reason about.
                            </p>

                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>Unidirectional data flow</th>
                                    </tr>

                                    <tr>
                                        <td>How data flows</td>
                                        <td>Data flows down from parent components to child components via props</td>
                                    </tr>

                                    <tr>
                                        <td>Benefits</td>
                                        <td>Makes the application state more predictable and easier to reason about, and makes large scale codebases easier to follow and more performant</td>
                                    </tr>

                                    <tr>
                                        <td>What can't happen</td>
                                        <td>Child components can't update the data that comes from parent components, and the view can't change the state</td>
                                    </tr>

                                    <tr>
                                        <td>What to do if a child component needs to send a message to its parent</td>
                                        <td>Use a special technique called inversion data flow</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-md-6">
                            <p>
                                <img src={AppImages.ReactDataApproach} alt="react-data-approach" className="img-fluid" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InterviewPart_1;