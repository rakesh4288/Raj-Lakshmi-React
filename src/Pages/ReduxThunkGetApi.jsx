import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDummyUserSlice } from '../features/DummyUserSlice';

const ReduxThunkGetApi = () => {
    const userData = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleFetchUser = () => {
        dispatch(fetchDummyUserSlice());
    }

    console.log('handleFetchUser =', userData.DummyUserStore);
    return (
        <div id='redux-thunk-get-api-page'>
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> Http Get API calling using Redux Thunk</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="lightGreenBG">
                                <h6>Steps for configure Redux:</h6>
                                <ul>
                                    <li>
                                        Step 1: Firstly we need to create the store where we configure the store
                                    </li>

                                    <li>
                                        Step 2: Next step would be - go to the index.js file and Wrap the react app by using provider and add the store attribute and assign the store configuration.
                                    </li>
                                    
                                    <li>
                                        Step 3: Create the feature slice, This is the actual file where you need to create feature about common States.
                                    </li>
                                    
                                    <li>
                                        Step 4: Register the slice feature with store.js file., This file needs all the features slice registration.
                                    </li>
                                    
                                    <li>
                                        Step 5: Later you can use the useSelector() hook and this hook need to import by react-redux for getting the latest data from the store in your whole react app
                                    </li>
                                    <li>
                                        Step 5: And if you wanted to update the state then you need to use the useDispatch() hook and pass the action to the reducer, and finally reducer function will take your action with payload and perform the opertion based on your request.
                                    </li>
                                </ul>

                                <h6>
                                    Best tutorial for Setup: <Link href="https://whataboutcoding.com/redux-toolkit-tutorial/" target="_target">https://whataboutcoding.com/redux-toolkit-tutorial/</Link> 
                                </h6>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5>How to call the API using Redux Thunk:</h5>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/2JBx_06dD1k?si=VLPTfoq2U7AP1GDt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='grayBgWithPinkBorder'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <button className='btn btn-info btn-sm' onClick={handleFetchUser}>
                                Fetch Dummy User via Redux Thunk:
                            </button>

                            <br/><br/>
                            {
                                userData.DummyUserStore.isLoading && (
                                    <div className="d-flex justify-content-center">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                )
                            }

                            {
                                userData.DummyUserStore?.apiData?.users?.length === 0 
                                || userData.DummyUserStore?.apiData === null ? (
                                    <div className='alert alert-danger' style={{textAlign: 'center'}}>
                                        User Data Not Found
                                    </div>
                                )
                                : 
                                (
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
                                                userData.DummyUserStore?.apiData.users?.map((item, index) => {
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
                                )
                            }
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReduxThunkGetApi;