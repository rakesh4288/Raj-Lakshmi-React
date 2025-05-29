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
                                React JS Fragments are a way to group the multiple elements without adding any extra node to the parent element in DOM. It allows you to return the multiple child elements from a component without wrapping them in a parent container
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
                            <p>
                                <img src={AppImages.React_Fragment_1} alt={AppImages.React_Fragment_1} className='img-fluid' />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='whiteBgWithVioletBorder'>
                <div className="container">
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                            <h4>What is the difference betweem two images:</h4>
                            <h6>
                                Actually both are not correct approach to add the HTML in React Component Because React Component needs all HTML tags should be wrap inside on parent Block level element.
                            </h6>

                            <h6>
                                Main things is that all the HTML element is treating as object while rendering in web page so per the fundamental two objects should be wrap in array then it can be easily loop. One more thing if you giving a commma after one element like below image so it will not through error app will be running. it will be undefined.
                            </h6>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <p>
                                <img src={AppImages.React_Fragment_2} alt={AppImages.React_Fragment_2} className='img-fluid' />
                            </p>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <p>
                                <img src={AppImages.React_Fragment_3} alt={AppImages.React_Fragment_3} className='img-fluid' />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default ReactFragment;