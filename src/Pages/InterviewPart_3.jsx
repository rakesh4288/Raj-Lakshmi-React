import React from "react";
import AppImages from "../Assets";
import * as Icon from 'react-bootstrap-icons';

const InterviewPart_3 = () => {
    return (
        <div id="interview-part-1">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> React Interview Questions Answer Part 3</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h4>What is Pure Component ?</h4>
                            <p>
                                ReactJS Pure Components are similar to regular class base components but with a key optimization. They skip the re-renders when the props and state remain the same.
                            </p>

                            <p>
                                Generally React is recommending to use functional base components with hooks in new code for better performance and simplicity.
                            </p>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xV1BK3ZYxuA?si=GGuDhPrFn1DEdc3X" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-dark p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h4 className="text-white">What are synthetic events in ReactJS ?</h4>
                            <p className="text-white">
                                Synthetic events are the cross-browser wrappers around the all browsers. The main purpose of creating the synthetic event is to perform cross browser issues. 
                            </p>

                            <p className="text-white">
                                In traditional web development we were using onclick event for JavaScript But in React side we are using onClick camel cases, so basically this is helping to perform the Cross Browser issue. In every browser while clicking it should provide the basic details about event
                            </p>

                            <p className="text-white">
                                Synthetic event is providing the more details about the event logs. We can use the objects to use business logic.
                            </p>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <p>
                            <img src={AppImages.SyntheticEventImg} alt="SyntheticEventImg" className="img-fluid img-thumbnail" />
                        </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InterviewPart_3;