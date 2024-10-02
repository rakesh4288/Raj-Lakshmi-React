import React, {useEffect, useState} from 'react';
import { fetchingDummyInfo } from '../Global/GlobalApi';

const DummyUsers = () => {
    const [userData,setUserData] = useState([]);
    const [filterUserData,setFilterUserData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const dummyUserInfo = async() => {
            const response = await fetchingDummyInfo();
           //  console.log('dummyInfo 1 =', response);
            // const reposnseArray = [];
            // reposnseArray.push(response.users);
            // setDummyData(reposnseArray);
            setUserData(response.users);
            setFilterUserData(response.users);
        }
        dummyUserInfo();
    }, []);

    // console.log('userData =', userData);

    const handleInputSearch = (e) => {
        const getSearch = e.target.value;
        // console.log('getSearch =', getSearch);
        if(getSearch.length > 0) {
            let tempUserData = [];
            tempUserData = filterUserData.filter((item) => item.firstName.toLowerCase().includes(getSearch));
            // console.log('tempUserData =', tempUserData);
            setUserData(tempUserData);
        } else {
            setUserData(filterUserData);
        }
        setQuery(getSearch);
    }

    const handleGender = (e) => {
        const getGender = e.target.value;
        let tempUserData = [];
        if(getGender === 'all') {
            setUserData(filterUserData);
        } else {
            tempUserData = filterUserData.filter((item) => item.gender === getGender);
            // console.log('handleGender tempUserData =', tempUserData);
            setUserData(tempUserData)
        }
    }

    return (
        <div id='dummy-products'>
            {/* <button onClick={dummyInfo}>Show Dummy Products</button> */}
            <label>SearchByName: </label> &nbsp;
            <input type='text' name='query' value={query} onChange={handleInputSearch} />

            &nbsp; <label>Filter By Gender:</label>
            &nbsp; <select onChange={handleGender}>
                <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Age</th>
                        <th>BloodGroup</th>
                        <th>Gender</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        userData.length === 0 ? (
                        <tr>
                            <td colSpan={5} style={{textAlign: 'center'}} className='text-danger'>Data Not Found</td>
                        </tr>
                    ) : 
                        userData.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.age}</td>
                                    <td>{item.bloodGroup}</td>
                                    <td>{item.gender}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DummyUsers;