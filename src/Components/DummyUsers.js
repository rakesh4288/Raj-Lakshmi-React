import React, {useState} from 'react';
import { fetchingDummyInfo } from '../Global/GlobalApi';

const DummyUsers = () => {
    const [dummyData,setDummyData] = useState([]);
    const dummyInfo = async() => {
       const response = await fetchingDummyInfo();
       console.log('dummyInfo 1 =', response);
       // const reposnseArray = [];
       // reposnseArray.push(response.users);
       // setDummyData(reposnseArray);
       setDummyData(response.users);
    }

    console.log('dummyInfo 2 =', dummyData);
    return (
        <div id='dummy-products'>
            <h1>Dummy Products</h1>
            <button onClick={dummyInfo}>Show Dummy Products</button>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Age</td>
                        <td>BloodGroup</td>
                        <td>Gender</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        dummyData.map((item, index) => {
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