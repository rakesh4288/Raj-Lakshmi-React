import React, { useEffect, useState } from 'react';

const ThreeFilterOnApi = () => {
    const [userData, setUserData] = useState([]);
    const [copyUser, setCopyUser] = useState([]);
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            const res = await response.json();
            setUserData(res.users);
            setCopyUser(res.users);
        }
        catch (error) {
            console.log('fetchUsers =', error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    // Filter By Gender
    const handleGender = (e) => {
        console.log('handleGender =', e.target.value);
        const selectedGender = e.target.value;
        let tempUser = [];
        if (selectedGender === 'male') {
            tempUser = copyUser.filter((item) => item.gender === selectedGender);
            console.log('tempUser =', tempUser);
            setUserData(tempUser);
        } else if (selectedGender === 'female') {
            tempUser = copyUser.filter((item) => item.gender === selectedGender);
            setUserData(tempUser);
        } else {
            setUserData(copyUser);
        }
    }

    // Filter By Name
    const handleName = (e) => {
        console.log('handleName =', e.target.value);
        const searchValue = e.target.value;
        let tempUser = [];
        tempUser = copyUser.filter((item) => item.firstName?.toLowerCase().includes(searchValue.toLowerCase()));
        console.log('tempUser =', tempUser);
        setUserData(tempUser);
    }

    // Filter By different Age critera
    const handleAge = (e) => {
        console.log('handleAge =', e.target.value);
        const ageValue = parseInt(e.target.value);
        let tempUser = [];
        if (ageValue === 35) {
            console.log(`inside ${ageValue}`);
            tempUser = copyUser.filter((item) => item.age >= 35);
            setUserData(tempUser);
        } else if (ageValue === 25 - 35) {
            console.log(`inside ${ageValue}`);
            tempUser = copyUser.filter((item) => item.age >= 26 && item.age <= 35);
            setUserData(tempUser);
        } else if (ageValue === 25) {
            console.log(`inside ${ageValue}`);
            tempUser = copyUser.filter((item) => item.age < 25);
            setUserData(tempUser);
        } else {
            setUserData(copyUser);
        }
    }

    // Filter By Age with unique age
    const uniqueAge = [...new Set(copyUser.map((item) => item.age))];
    const sortAge = uniqueAge.sort((a, b) => a - b);
    console.log('sortAge =', sortAge);

    const handleUniqueAge = (e) => {
        const selectedAge = e.target.value;
        console.log('handleUniqueAge Age =', selectedAge);
        if(selectedAge === '') {
            setUserData(copyUser);
        } else {
            const tempUser = copyUser.filter((item) => item.age === Number(selectedAge));
            console.log('handleUniqueAge tempUser =', tempUser);
            setUserData(tempUser);
        }
    }
    
    return (
        <div className="row">
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                <h4>Filter Operation on Dummy API</h4>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                {userData && userData.length > 0 ? (
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>BloodGroup</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((item, index = 0) => {
                                return (
                                    <tr key={index + 1}>
                                        <td>{index + 1}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.bloodGroup}</td>
                                        <td>{item.gender}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                ) : (
                    <div className='alert alert-danger text-danger'>
                        Data Not Found
                    </div>
                )}
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                <div className='alert alert-info'>
                    <label>Filter By Gender</label>  &nbsp;&nbsp;
                    <select onChange={handleGender}>
                        <option value="">Select Gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                </div>

                <div className='alert alert-success'>
                    <label>Filter By Name</label>  &nbsp;&nbsp;
                    <input type='text' placeholder='Search By Name' name='searchQuery' onChange={handleName} />
                </div>

                <div className='alert alert-primary'>
                    <label>Filter By Different Age Critera</label>  &nbsp;&nbsp;
                    <select onChange={handleAge}>
                        <option value="">Select Age</option>
                        <option value={35}>Age is greater than 35</option>
                        <option value={25 - 35}>Age between 25 to 35 </option>
                        <option value={25}>Age is less than 25</option>
                    </select>
                </div>

                <div className='alert alert-warning'>
                    <label>Filter By Unique Age With Sort</label>  &nbsp;&nbsp;
                    <select onChange={handleUniqueAge}>
                        <option value="">Select Age</option>
                        {sortAge.map((item) => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ThreeFilterOnApi;