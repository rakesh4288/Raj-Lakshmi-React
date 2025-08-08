import React from "react";

const ReactTestingPage = () => {
    return(
        <div id="react-testing-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> React Testing Library</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h5>What is jest framework ?</h5>
                            <p>
                                Jest is a open-source JavaScript testing framework maintained by Meta (formerly Facebook). It's widely used for testing the React applications,  but it's also capable of testing any JavaScript codebase particularly those built with React.  It is known for its simplicity, speed, and comprehensive feature set, which includes:
                            </p>

                            <h6>Why we Use Jest?</h6>
                            <p>
                                <b>Zero Configuration:</b> Jest aims to be easy to set up and use, often requiring minimal configuration for common JavaScript projects. Works out of the box with minimal setup.
                            </p>

                            <p>
                                <b>Fast and Efficient:</b> Runs tests in parallel for improved performance.
                            </p>

                            <p>
                                <b>Snapshot Testing:</b> A unique feature of Jest, snapshot testing, captures a "snapshot" of a component's rendered output or data structure and compares it to a previously saved snapshot, helping to detect unintended UI changes. Helps track UI changes over time.
                            </p>

                            <p>
                                <b>Mocking Capabilities:</b> Jest offers a powerful built-in mocking library that allows developers to create mock functions and modules, isolating the code under test and controlling dependencies. Easily mocks functions, modules, and APIs.
                            </p>

                            <p>
                                <b>Code Coverage:</b> Provides insights into untested parts of your code.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactTestingPage;