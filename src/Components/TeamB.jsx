import React from 'react';

const TeamB = ({familyInfo}) => {
    const pageName = "Team B - Child Component";
    const data = [
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
    ];
    const handleChild = () => {
        familyInfo(data);
    }
    return (
        <div id='team-b' className='alert alert-warning'>
            <h5>{pageName}</h5>
            <button type='button' className='btn btn-sm btn-dark' onClick={handleChild}>Child Button</button>
        </div>
    )
}

export default TeamB;