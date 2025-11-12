import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ArrayState = () => {
    const city = ['Pune', 'Udaipur', 'Indore'];
    const [cityList, setCityList] = useState(city);
    const [newCity, setNewCity] = useState(['']);

    const handleChange = (e) => {
        setNewCity(e.target.value);
    }

    const handleCity = (e) => {
        console.log(e);
        // cityList.push('Banaras'); //  Why this is not working because of Memory references. Generally takes the memory references
        setCityList([...cityList, newCity]);
        setNewCity('');
    }
    return (
        <div className='bg-warning p-2'>
            <h5>How to update the Array State</h5>

            <ul>
                {cityList.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
            <input type='text' placeholder='Add any city' value={newCity} onChange={handleChange} /> &nbsp;
            <button className='btn btn-dark btn-sm' onClick={handleCity}>Add City</button> <br/>
            <Link to="https://www.youtube.com/shorts/kqYpp5Q1aCI" target="_blank"> Short Video</Link>
        </div>
    )
}

export default ArrayState;