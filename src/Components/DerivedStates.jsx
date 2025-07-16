import React, { useState } from 'react';

const DerivedStates = () => {
    const carData = [
        { id: 1, name:'Tata Punch', color: 'blue' },
        { id: 2, name:'Ciaz', color: 'blue' },
        { id: 3, name:'Hyundai Creta', color: 'white' },
        { id: 4, name:'Mahindra Thor', color: 'black' },
        { id: 5, name:'Skoda Rapid', color: 'blue' },
        { id: 6, name:'Audi', color: 'orange' },
        { id: 7, name:'Tata Harrier', color: 'Grey' },
        { id: 8, name:'Dezire', color: 'white' },
        { id: 9, name:'Baleno', color: 'blue' },
        { id: 10, name:'Kia Sonet', color: 'black' },
    ]
    const [carProducts, setCarProducts] = useState(carData);
    const [filterCar, setFilterCar] = useState(carProducts);
    // const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        console.log('searchValue =', searchValue);
        let temp = [];
        temp = filterCar.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        console.log('filterCar =', temp);
        setCarProducts(temp);
    }
    return (
        <div id='practical-tour'>
            <input type='search' placeholder='Search By Car Name' name='searchQuery' onChange={handleSearch} />
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Car Name</th>
                        <th>Color</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        carProducts.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.color}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DerivedStates;