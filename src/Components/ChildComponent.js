import React, { useState } from 'react';

const ChildComponent = ({
    getFamilyClick,
    changeBgColor
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
        const selectedValue = event.target.value;
        if(selectedValue === '') {
            setShowError(true);
        } else {
            changeBgColor(selectedValue);
            setShowError(false);
        }
    }
    return (
        <div id='child-component'>
            <label>Choose any Color to in Background: </label> &nbsp;&nbsp;
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
                showError && (
                    <div className='text-danger'>Please select any color</div>
                )
            }
            <br/><br/>
            <button className='btn btn-success btn-sm' onClick={() => getFamilyClick(myFamilyData)}>Show My Family</button>
        </div>
    )
}

export default ChildComponent;