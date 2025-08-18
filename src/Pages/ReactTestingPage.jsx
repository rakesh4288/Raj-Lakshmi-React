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

            <hr className="bg-success"/>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6>What is snapshot testing in React</h6>
                            <p>
                                In React JS Snapshot capturing the rendered outoput of the component at the specific point of time. Snapshot is helping to detect the unexpected changes in the UI side
                            </p>

                            <p>
                                It works by taking a "snapshot" of a component's rendered output and saving it in a file. Later, when you run the test again, it compares the current output to the saved snapshot. 
                                <br/>if there's a difference, so the test fails and notify how we can resolve this issue.
                            </p>
                        </div>

                        

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6>Complete understanding by video:</h6>
                           <iframe width="100%" height="315" src="https://www.youtube.com/embed/tu8thOjb_S8?si=1Z4pXUznoy9NQZre" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactTestingPage;