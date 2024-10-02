

import React from "react";
import PropTypes from "prop-types";

const MyInfo = ({
    myName,
    age
}) => {
    return(
        <div id="checking-prop-types">
            <h4> Validating Prop types</h4>
            <h6>My Name is - {myName}</h6>
            <h6>My age is - {age} years</h6>
        </div>
    )
}

MyInfo.propTypes={
    myName: PropTypes.string,
    age: PropTypes.number
}

export default MyInfo;

