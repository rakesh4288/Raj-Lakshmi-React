import React from "react";
import * as Icon from 'react-bootstrap-icons';
import AppImages from "../Assets";
import SimpleForm from "../Components/SimpleForm";
import CheckboxRowSelection from '../Components/CheckboxRowSelection';
import LiveSearch from "../Components/LiveSearch";
import StudentForm from '../Components/StudentForm';
import BasicImageUpload from "../Components/BasicImageUpload";

const ReactFormPage = () => {
    return (
        <div id="react-form-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                How to start working in React Form <Icon.Book />
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <CheckboxRowSelection />
                        </div>

                        <div className="col-md-6">
                            <p>
                                <img src={AppImages.FormHandlingTwo} alt="react-form-handling" className="img-fluid img-thumbnail" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-success" />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <SimpleForm />
                        </div>

                        <div className="col-md-9">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EYpdEYK25Dc?si=wCmIAGLA2Qynjc_h" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-danger" />

            <section id="live-search" className="whiteBgWithVioletBorder">
                <LiveSearch />
            </section>

            <section className="whiteBgWithVioletBorder noBorder">
                <BasicImageUpload/>
            </section>

            <section className="grayBgWithPinkBorder">
                <StudentForm />
            </section>
        </div>
    )
}

export default ReactFormPage;