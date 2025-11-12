import React, {useState} from 'react';
import TeamB from './TeamB';

const TeamA = () => {
    const [storeFamilyData, setStoreFamilyData] = useState([]);
    const pageName = "Team A - Parent Component";
    const handleFamily = (data) => {
        console.log('handleFamily = ', data);
        setStoreFamilyData(data);
    }
    return (
        <div id='team-a' className='alert alert-info'>
            <h5>{pageName}</h5>

            <ul>
                {storeFamilyData.map((item, index) => {
                    return (
                        <li key={index}>{item.name}</li>
                    )
                })}
            </ul>

            <TeamB familyInfo = {handleFamily} />
        </div>
    )
}

export default TeamA;