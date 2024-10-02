import React, { useState } from "react";
import './PagesStyle.css';
import AppImages from "../Assets";
import ChildTesting from "../Components/ChildTesting";

const HomePage = () => {
    const [familyData, setFamilyData] = useState([]);
    const [color, setColor] = useState('#cff4fc');
    const getMyFamily = (data) => {
        console.log('inside getMyFamily =', data);
        setFamilyData(data);
    }

    const getBgColor = (data) => {
        console.log('getBgColor =', data);
        setColor(data);
    }
    return(
        <div id="home-page" className="homePageStyle">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> React Js  </h4>
                        </div>
                    </div>
                </div>
            </section>

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

                        <div className="alert alert-info" style={{background: `${color}`}}>
                            <ChildTesting myFamilyClick={getMyFamily} changeBgColor={getBgColor} />
                            <br/>
                            <table className="table table-bordered table-striped">
                                <tbody>
                                    {
                                        familyData.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.age}</td>
                                                    <td>{item.gender}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <hr className="bg-primary" />

                <h6>Git Repo: <a href="https://github.com/rakesh4288/Raj-Lakshmi-React" target="_blank" rel="noopener noreferrer">
                https://github.com/rakesh4288/Raj-Lakshmi-React</a></h6>

                <hr className="bg-primary" />

                <div className="row">
                    <div className="col-md-6">
                        <h4>Bootstrap Icon:</h4>
                        <h5>All steps - How to install and use:</h5>
                        https://www.npmjs.com/package/react-bootstrap-icons <br/>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZwYLOQk-iRo?si=QrS6NLP53AlPglCB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;