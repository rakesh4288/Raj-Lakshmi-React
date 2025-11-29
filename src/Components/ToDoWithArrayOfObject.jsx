import React, { useState } from "react";

const ToDoWithArrayOfObject = () => {
    const initialUsers = [
        {
            id: 1,
            userName: 'Rakesh Shah',
            age: 35,
            gender: 'Male'
        },
        {
            id: 2,
            userName: 'Lalita Sahu',
            age: 34,
            gender: 'Female'
        },
        {
            id: 3,
            userName: 'Swaraj Shah',
            age: 3,
            gender: 'Male'
        },
        {
            id: 4,
            userName: 'Ramya Mantri',
            age: 3,
            gender: 'Female'
        },
        {
            id: 5,
            userName: 'Rajvika',
            age: 7,
            gender: 'Female'
        },
        {
            id: 6,
            userName: 'Rajlakshmi',
            age: 2,
            gender: 'Female'
        }
    ]

    const initialFormValues = { userName: "", age: "", gender: "" };

    const [userRecord, setUserRecord] = useState(initialUsers);
    const [cloneUserRecord, setCloneUserRecord] = useState(initialUsers);
    const [userForm, setUserForm] = useState(initialFormValues);

    const handleInput = (e) => {
        const {name, value} = e.target;
        // setUserForm((prevState) => {
        //     return {
        //         ...prevState,
        //         [name]: value
        //     }
        // });
        setUserForm({
            ...userForm,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserRecord([...userRecord, {id: userRecord.length + 1, ...userForm}]);
        setCloneUserRecord([...userRecord, {id: userRecord.length + 1, ...userForm}]);
        setUserForm(initialFormValues); // reset inputs
    }

    

    const handleSearch = (e) => {
        const searchInput = e.target.value;
        let tempArray = [];
        tempArray = cloneUserRecord.filter((item) => item.userName.toLowerCase().includes(searchInput.toLowerCase()));
        setUserRecord(tempArray);
    }

    // const handleSearch = (e) => {
    //     const searchInput = (e.target.value || '').trim().toLowerCase();
    //     const tempArray = searchInput === ''
    //         ? cloneUserRecord
    //         : cloneUserRecord.filter(item => {
    //             // defensive: ensure userName exists before calling toLowerCase
    //             return item.userName && item.userName.toString().toLowerCase().includes(searchInput);
    //         });
    //     setUserRecord(tempArray);
    // }

    console.log('userForm =', userForm);
    console.log('userRecord =', userRecord);
    return(
        <div id="to-do-operation-with-array-of-object">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> To Do Operations With Array Of Object</h4>
                        </div>
                    </div>
                </div>
            </section>

            
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <form className='lightGreenBG rounded shadow-sm p-3' onSubmit={handleSubmit}>
                        <h5>User Registration:</h5>
                        <div className='mb-3'>
                            <label htmlFor="name" className="form-label"> Name:</label>
                            <input type='text' className='form-control' id='name' name="userName" value={userForm.userName} onChange={handleInput} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="age" className="form-label"> Age:</label>
                            <input type='text' className='form-control' id='age' name="age" value={userForm.age} onChange={handleInput} />                                    
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="email" className="form-label"> Gender:</label> &nbsp;
                            <input 
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={userForm.gender === 'Male'} onChange={handleInput} 
                            />{' '}
                            Male &nbsp;
                            
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={userForm.gender === 'Female'} onChange={handleInput} 
                            />{' '}
                            Female &nbsp;
                        </div>

                        <div className="mb-3">
                            <button type='submit' className='btn btn-dark btn-sm'>Submit</button>
                        </div>
                    </form>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div className="float-start">
                        <h5>User List</h5></div>
                    <div className="float-end">
                        <input type="search" placeholder='Search by Name' name='searchQuery' onChange={handleSearch} />
                    </div>

                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                            </tr>
                        </thead>

                        <tbody>
                            {userRecord.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.gender}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ToDoWithArrayOfObject;