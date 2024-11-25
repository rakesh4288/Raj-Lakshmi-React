import React from "react";
import * as Icon from 'react-bootstrap-icons';
import AppImages from "../Assets";

const InterviewPart_1 = () => {
    return (
        <div id="interview-part-1">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> React Interview Questions Answer Part 2</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="virtual-dom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h4>What is React Js and its better than other ?</h4>
                            <p>Just because of its Virtual DOM concept. React is using virtual DOM for updating the component. By using Virtual DOM the performance of React is increasing</p>
                            <ul>
                                <li>It's library for creating the UI components and its NOT a FRAMEWORK</li>
                                <li>Angular and Vue is completely framework and its following the MVC pattern</li>
                                <li>MVC stands for Model View Controller</li>
                                <li>But React is following only View Part</li>
                            </ul>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>Best React interview series in short clips: </h5>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/73gvbkS44jg?si=3AadRwb5P05bia0E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InterviewPart_1;