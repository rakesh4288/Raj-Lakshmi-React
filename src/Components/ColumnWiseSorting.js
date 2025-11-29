import {useEffect, useState} from 'react';
import * as Icon from 'react-bootstrap-icons';

const ColumnWiseSorting = () => {
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isApiError, setIsApiError] = useState(null);
    const [order, setOrder] = useState("ASC"); // By default we are keeping ascending order

    useEffect(() => {
        const fetchingUserData = async() => {
            setIsLoading(true);
            try {
                const res = await fetch('https://dummyjson.com/users')
                const response = await res.json();
                setUserData(response.users);
                setIsLoading(false);
            }

            catch(error) {
                console.log('fetchingUserData =', error);
                setIsApiError(error);
                setIsLoading(false);
            }
        }
        fetchingUserData();
    }, []);

    const sortingByString = (col) => {
        if(order === 'ASC') {
            const sorted = [...userData].sort((x,y) => x[col].toLowerCase() > y[col].toLowerCase() ? 1: -1)
            setUserData(sorted);
            setOrder("DSC");
        }

        if(order === 'DSC') {
            const sorted = [...userData].sort((x,y) => x[col].toLowerCase() < y[col].toLowerCase() ? 1: -1)
            setUserData(sorted);
            setOrder("ASC");
        }
    };

    const sortingByNumber = (value) => {
        // For Age Column
        if(value === 'age') {
            if(order === 'ASC') {
                const sorted = [...userData].sort((x,y) => x.age - y.age);
                setUserData(sorted);
                setOrder("DSC");
            }
    
            if(order === 'DSC') {
                const sorted = [...userData].sort((x,y) => y.age - x.age);
                setUserData(sorted);
                setOrder("ASC");
            }
        }

        // For Height Column
        if(value === 'height') {
            if(order === 'ASC') {
                const sorted = [...userData].sort((x,y) => x.height - y.height);
                setUserData(sorted);
                setOrder("DSC");
            }
    
            if(order === 'DSC') {
                const sorted = [...userData].sort((x,y) => y.height - x.height);
                setUserData(sorted);
                setOrder("ASC");
            }
        }

        // For Weight Column
        if(value === 'weight') {
            if(order === 'ASC') {
                const sorted = [...userData].sort((x,y) => x.weight - y.weight);
                setUserData(sorted);
                setOrder("DSC");
            }
    
            if(order === 'DSC') {
                const sorted = [...userData].sort((x,y) => y.weight - x.weight);
                setUserData(sorted);
                setOrder("ASC");
            }
        }
        
    }

    console.log('setUserData =', userData);
    return (
        <div id="columnWise-sorting">
            <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Sorting by dynamic column:</h4>
                            {isLoading && (
                                    <div className="d-flex justify-content-center">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                            )}

                            {isApiError && (
                                    <div className="d-flex justify-content-center">
                                        <div className="text-danger" role="status">
                                            Getting Error while fetching the Data... <Icon.FilterRight />
                                        </div>
                                    </div>
                            )}

                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col" onClick={() => sortingByString("firstName")}>
                                            First Name
                                            { order === 'ASC' ? <Icon.ArrowDown /> : <Icon.ArrowUp /> }
                                        </th>
                                        <th scope="col" onClick={() => sortingByString("lastName")}>
                                            Last Name
                                            { order === 'ASC' ? <Icon.ArrowDown /> : <Icon.ArrowUp /> }
                                        </th>
                                        <th scope="col" onClick={() => sortingByNumber("age")}>
                                            Age
                                            { order === 'ASC' ? <Icon.ArrowDown /> : <Icon.ArrowUp /> }
                                        </th>
                                        <th scope="col" onClick={() => sortingByString("gender")}>
                                            Gender
                                            { order === 'ASC' ? <Icon.ArrowDown /> : <Icon.ArrowUp /> }
                                        </th>
                                        <th scope="col" onClick={() => sortingByString("email")}>
                                            Email
                                            { order === 'ASC' ? <Icon.ArrowDown /> : <Icon.ArrowUp /> }
                                        </th>
                                        <th scope="col">Phone</th>
                                        <th scope="col" onClick={() => sortingByNumber("height")}>
                                            Height
                                            { order === 'ASC' ? <Icon.ArrowDown /> : <Icon.ArrowUp /> }
                                        </th>
                                        <th scope="col" onClick={() => sortingByNumber("weight")}>
                                            Weight
                                            { order === 'ASC' ? <Icon.ArrowDown /> : <Icon.ArrowUp />}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.length === 0 ? (
                                        <tr>
                                            <td colSpan={10} className='text-center'>
                                                <span className='text-danger'>No Data Found !!</span>
                                            </td>
                                        </tr>
                                        ) : userData.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                            <td>{ index + 1}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.age}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.height}</td>
                                            <td>{user.weight}</td>
                                        </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ColumnWiseSorting;