import React, { useContext } from "react";
// import { countryName, stateName, districtName } from '../Components/UseContextInfo';

import { countryName, stateName, districtName } from './UseContextInfo';

const MyDistrict = () => {
    const getCountryName = useContext(countryName);
    const getStateName = useContext(stateName);
    const getDistrictName = useContext(districtName);
    return (
        <div id="my-distrcit">
            <h6>Country Name: {getCountryName}</h6>
            <h6>State Name: {getStateName}</h6>
            <h6>District Name: {getDistrictName}</h6>
        </div>
    )
}

export default MyDistrict;