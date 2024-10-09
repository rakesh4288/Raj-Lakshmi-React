import React from "react";
import AppImages from "../Assets";

const PageNotFound = () => {
    return(
        <div id="page-not-found">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img src={AppImages.PageNotFound} alt="page-not-found" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;