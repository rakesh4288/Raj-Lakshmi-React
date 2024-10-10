import React, { useEffect, useState } from "react";

const SearchByColumn = () => {
    const [userData, setUserData] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((res) => res.json())
            .then((data) => {
                console.log('data user =', data.users);
                setUserData(data.users);
            })
            .catch((error) => {
                console.log('API Error =', error);
            })
    }, []);

    const handleSearch = (e) => {
        const {value } = e.target;
        setInputValue(value);
    }

    const filteredUser = userData.filter((record) => {
        const searchTerm = inputValue.toLowerCase();
        if(searchTerm === '') {
            return true
        }
        return (
            record.firstName.toLowerCase().includes(searchTerm) || 
            record.lastName.toLowerCase().includes(searchTerm)
        )
    });
    return (
        <div className="img-thumbnail">
            <h6>Dummy User</h6>
            <label>Search by First & Last Name:</label> <br />
            <input type="text" name="userSearch" value={inputValue} onChange={handleSearch} />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        filteredUser.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.age}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SearchByColumn;