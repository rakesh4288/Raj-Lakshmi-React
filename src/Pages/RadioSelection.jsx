import React, {useState} from "react";
import * as Icon from 'react-bootstrap-icons';
import AppImages from "../Assets";
import CountdownTimer from "../Components/CountdownTimer";

const RadioSelection = () => {
    const [size, setSize] = useState('');
    const selectTshirtSize = (e) => {
        console.log('selectTshirtSize = ', e.target.value);
        let selectedValue = e.target.value;
        setSize(selectedValue);
    }
    return (
        <div id="radio-selection">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> Radio Selection Operation Page  <Icon.UiRadios /> </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <p>Select T-Shirt Size:</p>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="tShirt" 
                                    id="large" 
                                    value="Large_Tshirt" 
                                    onChange={selectTshirtSize} 
                                    checked={size==="Large_Tshirt"} 
                                />
                                <label className="form-check-label" htmlFor="large">
                                    Large
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="tShirt"
                                    id="medium"
                                    value="Medium_Tshirt"
                                    onChange={selectTshirtSize}
                                    checked={size==="Medium_Tshirt"} 
                                />
                                <label className="form-check-label" htmlFor="medium">
                                    Medium
                                </label>
                            </div>

                            <div className="form-check">
                                <input 
                                    type="radio"
                                    className="form-check-input"
                                    name="tShirt"
                                    id="small"
                                    value="Small_Tshirt"
                                    onChange={selectTshirtSize}
                                    checked={size==="Small_Tshirt"}
                                />
                                <label className="form-check-label" htmlFor="small">
                                    Small
                                </label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            {
                                size && (
                                    <div>Selected Size: <b>{size}</b></div>
                                )
                            }

                            {
                                size === 'Large_Tshirt' ? (
                                    <p>
                                        <img src={AppImages.Tshirt} alt="Large_Tshirt" height="420"/>
                                    </p>
                                )
                                : null
                            }

                            {
                                size === 'Medium_Tshirt' ? (
                                    <p>
                                        <img src={AppImages.Tshirt} alt="Medium_Tshirt" height="400" />
                                    </p>
                                )
                                : null
                            }

                            {
                                size === 'Small_Tshirt' ? (
                                    <p>
                                        <img src={AppImages.Tshirt} alt="Small_Tshirt" height="300"/>
                                    </p>
                                )
                                : null
                            }

                        </div>

                        <div className="col-md-4">
                            <CountdownTimer />
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-success"/>

            <section id="video-references">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/0SB3h1AJYQ4?si=Npx31k4eZH4ws13t" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default RadioSelection;