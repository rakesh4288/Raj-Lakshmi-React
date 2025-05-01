import React from 'react';
import AppImages from '../Assets';
import * as Icon from 'react-bootstrap-icons';
const ReactFragment = () => {
    return (
        <div id="react-fragment">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                React Fragment !! <Icon.Front />
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h6>
                                ReactJS Fragments are a way to group multiple elements without adding an extra node to the DOM. It allows you to return multiple child elements from a component without wrapping them in a parent container
                            </h6>
                        </div>
                    </div>

                    <hr className='bg-primary'/>

                    <div className='row'>
                        <div className='col-md-6'>
                            <h5>Why Use React Fragments?</h5>
                            <p>
                                The primary benefit of React Fragments is that capability to reduce the extra elements from the DOM
                            </p>

                            <ul>
                                <li><b>Cleaner DOM Structure:</b> It avoids redundant wrapper elements.</li>
                                <li>
                                    <b>Better Performance:</b> React fragments reduces extra nodes, improving rendering speed.
                                </li>
                                <li> <b>Avoid Unnecessary Markup:</b> It Prevents unwanted elements.</li>
                            </ul>
                        </div>

                        <div className='col-md-6'>
                            All Images
                            <p>
                                <img src={AppImages.ReactFragment} alt={ReactFragment} className='img-fluid' />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default ReactFragment;