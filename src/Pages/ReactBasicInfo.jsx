import React from "react";
import MyInfo from "../Components/MyInfo";
import AppImages from "../Assets";
import * as Icon from 'react-bootstrap-icons';


const ReactBasicInfo = () => {
    return (
        <div id="page-not-found">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                React Basic Knowledge  <Icon.Backpack />
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="prop_vs_state">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Difference between props and state ?</h4>
                            <p>When working with React components, it's important to understand the differences between state and props. Here, we'll take a look at some common conditions and compare the behavior of props and state.</p>
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
                                        <td>State can be accessed using the use state hooks in a functional components and in a class component we can use ny this.state</td>
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


            <hr className="bg-primary" />

            <section id="check-prop-types">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h4>How to Use PropTypes in React</h4>
                            <p>
                                PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don’t receive an error at the very end of our app by the console which might not be easy to deal with.
                            </p>

                            <p className="alert alert-warning">
                                Before the release of React 15.5.0, PropTypes were available in the React package, but now we have to add the prop-types library in our project.
                            </p>

                            <p>
                                We can do so by running the following command in our terminal:
                            </p>

                            <p className="alert alert-info"> npm install prop-types --save</p>

                            <p>
                                We can use PropTypes to validate any data we are receiving from props. But before using it we will  have to import it as always in our app:
                            </p>

                            <p className="alert alert-info"> import PropTypes from 'prop-types';</p>

                            <p>
                                PropTypes are also objects with a key and a value pair where the ‘key’ is the name of the prop  while the value represents the type or class by which they are defined.
                            </p>

                            <MyInfo myName="Rakesh Shah" age={36} />

                            <div className="alert alert-danger">
                                <p>If your prop type is not correct then you will warning message in console But your application will be running fine</p>
                                <p>
                                    <b>Warning: Failed prop type: Invalid prop `age` of type `number` supplied to `MyInfo`, expected `string`.</b>
                                </p>
                            </div>

                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td> Type</td>
                                        <td>Class</td>
                                        <td>Example</td>
                                    </tr>

                                    <tr>
                                        <td> String</td>
                                        <td> PropType.string </td>
                                        <td>“helllo”</td>
                                    </tr>

                                    <tr>
                                        <td>Object</td>
                                        <td>PropType.object</td>
                                        <td><span>{`name: “Rohit”`}</span></td>
                                    </tr>

                                    <tr>
                                        <td>Number</td>
                                        <td>PropType.number</td>
                                        <td>10</td>
                                    </tr>

                                    <tr>
                                        <td>Boolean</td>
                                        <td>PropType.bool</td>
                                        <td>true/false</td>
                                    </tr>

                                    <tr>
                                        <td>Function</td>
                                        <td>PropType.func</td>
                                        <td><span>const say = {`console.log(“hello”)`}</span></td>
                                    </tr>

                                    <tr>
                                        <td>Symbol</td>
                                        <td>PropType.symbol</td>
                                        <td><span>Symbol(“m”)</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-md-4">
                            <p>
                                <img src={AppImages.CheckingPropTypesImg} alt="checking-prop-types" className="img-fluid" />
                            </p>

                            <p>
                                As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application.
                            </p>

                            <p>
                                But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactBasicInfo;