import { useState } from 'react';
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

    const handleDelete = (id) => {
        console.log('handleDelete =', id);
        let selectedId = id;
        if (window.confirm("Are you sure you want to remove this city?")) {
            setCityList((prevState) => prevState.filter((item, id) => id !== selectedId));
        }
    }

    return (
        <div>
            <h5>How to update the Array State</h5>
            <input type='text' placeholder='Add any city' value={newCity} onChange={handleChange} /> &nbsp;
            <button className='btn btn-dark btn-sm' onClick={handleCity}>Add City</button> <br/>
            <Link to="https://www.youtube.com/shorts/kqYpp5Q1aCI" target="_blank"> Short Video</Link>
            <br/>
            <table className='table table-bordered table-striped'>
                <thead> 
                    <tr>
                        <th>SNO</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {cityList.length === 0 && (
                        <tr>
                            <td colSpan={4}>No Records Found !!</td>
                        </tr>
                    )}

                    {cityList && cityList.length > 0 && (
                        cityList.map((item, index) => {
                            return (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{item}</td>
                                    <td>
                                        <i className="bi bi-trash" style={{cursor: 'pointer'}} onClick={() => handleDelete (index)}></i>
                                    </td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ArrayState;