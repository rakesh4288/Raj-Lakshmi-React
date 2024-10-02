import React from "react";
import MyInfo from "../Components/MyInfo";
import AppImages from "../Assets";

const ReactBasicInfo = () => {
    return(
        <div id="page-not-found">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                React Basic Knowledge 
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

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