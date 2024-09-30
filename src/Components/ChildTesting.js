import React, { useState } from 'react';

const ChildTesting = ({
        changeBgColor,
        myFamilyClick 
    }) => {
    const [showError, setShowError] = useState(false);
    const myFamilyData = [
        {
            id: 1,
            name: 'Rakesh Shah',
            age: 36,
            gender: 'Male'
        },
        {
            id: 2,
            name: 'Lalita Sahu',
            age: 34,
            gender: 'Female'
        },
        {
            id: 3,
            name: 'Rajvika Shah',
            age: 6,
            gender: 'Female'
        },
        {
            id: 4,
            name: 'Rajlakshmi Shah',
            age: 0.2,
            gender: 'Female'
        }
    ]

    const handleChange = (event) => {
        console.log('handleChange =', event.target.value);
        const selectedValue = event.target.value;
        if(selectedValue === ''){
            setShowError(true);
        } else {
            changeBgColor(selectedValue);
        }
    }
    return (
        <div id='child-testing'>
            <h6>Using callback function we can pass the data from Child to Parent</h6>
            <button className="btn btn-dark btn-sm" onClick={() => myFamilyClick(myFamilyData)}>Get Family Info</button>
            &nbsp;&nbsp; Choose Color &nbsp;&nbsp;
            <select onChange={handleChange}>
                <option value="">Select Any Color</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="lime">Lime</option>
                <option value="violet">Violet</option>
                <option value="gold">Gold</option>
            </select>

            {
                showError ? (
                    <div> Please Select Any Color </div>
                ) : null
            }
        </div>
    )
}

export default ChildTesting;