import React, { createContext } from "react";
import * as Icon from 'react-bootstrap-icons';
import AppImages from "../Assets";
import MyCountry from "./MyCountry";

const countryName = createContext();
const stateName = createContext();
const districtName = createContext();

const UseContextInfo = () => {
    return(
        <div id="use-context-info">
            <h3> UseContextInfo Hook </h3>
            <p> 
                hook is useful for sharing the global info into all its child component. While using this we can ignore to use props because useContext helping to share the global info at very deep level component
            </p>

            <p>
                React is a way to manage the state globally. If you have any global info that you need to pass in all comopnent or every child or nested child so in this case you can use the useContext hook
            </p>

            <h4>What was the problem:</h4>
            <p>
                <b>Detail Explanation:</b> Let's suppose you have multiple child component like parent to child or nested child so before useContext you need to use the props for passing the data. so in this approach your component structure will look like prop drilling. so here React js providing the useContext API for avoiding props drilling. Because it will become very difficult to handle this prop drilling.
            </p>

            <hr className="bg-primary"/>

            <h5>Here is some example for useContext:</h5>
            <ul>
                <li>Global State</li>
                <li>Themes</li>
                <li>Services</li>
                <li>User Setting</li>
            </ul>

            <hr className="bg-primary"/>

            <h5>So here is the Solution:</h5>
            <h6>
            <Icon.ArrowRight /> Solution is to create the context and React Js providing the useContext hook here to solve this issue</h6>

            <ul>
                <li>Firstly you need to create the context. you need to decide which kind of data you are going to pass in the deep level component</li>
                <li>After creating the context now you need to use the Provider, so basically providers is wrapping the child component and helping to hold the data to pass</li>
                <li>In your child component - you need to call the useContext hook for getting the global state.</li>
            </ul>

            <p className="alert alert-warning">Always make sure you are exporting your createContext variable in bottom of component. Because we just need to pass or export the data</p>

            <div className="row">
                <div className="col-md-6">
                    <p>
                        <img src={AppImages.UseContextImg} className="img-fluid" alt="UseContextImg" />
                    </p>

                    <p>In this above screenshot we can easily understand its will be very difficult to handle and pass the props at very the deep level component. </p>
                </div>

                <div className="col-md-6">
                    <countryName.Provider value={"India 'Bharat'"}>
                        <stateName.Provider value={"Maharashtra"}>
                            <districtName.Provider value={"Pune"}>
                                <div className="alert alert-info"><MyCountry/></div>
                            </districtName.Provider>
                        </stateName.Provider>
                    </countryName.Provider>
                </div>
            </div>

            <hr className="bg-info"/>

            <h6>How to use the useContext, here are the steps:</h6>
            <ul>
                <li>Create the Context by using the create context</li>
                <li>Providing the Context</li>
                <li>Consuming the Context</li>
            </ul>

            <hr className="bg-success"/>

            <iframe width="100%" height="350" src="https://www.youtube.com/embed/s1Ix2jBhCkI?si=aA9v1YVqqo-9FSrr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default UseContextInfo;

export {countryName, stateName, districtName}