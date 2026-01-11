import { useEffect, useState } from "react";

const RowSelectionOnApi = () => {
    const [userData, setUserData] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);
    const url = 'https://dummyjson.com/users';

    const fetchingUser = async() => {
        try{
            const response = await fetch(url);
            const res= await response.json();
            // console.log('fetchingUser =', res.users);
            setUserData(res.users);
        }
        catch (error) {
            console.log('fetchingUser Error =', error);
        }
    }
    useEffect(() => {
        fetchingUser();
    }, []);

    const checkboxHandler = (e) => {
        const {value, checked} = e.target;
        // console.log('checkboxHandler value =', JSON.parse(value));
        const checkedRow = JSON.parse(value);

        // console.log('checkboxHandler checked =', checked);
        if(checked) {
            setSelectedRow([...selectedRow, checkedRow]);
        } else {
            setSelectedRow(selectedRow.filter((item) => item.id !== checkedRow.id));
        }
    }
    // const isAllChecked = selectedRow.length === userData.length;
    // const handleCheckAll = (e) => {
    //    const {checked} = e.target;
    //    if(checked){
    //         setSelectedRow(userData);
    //    } else {
    //         setSelectedRow([]);
    //    }
    // }

    const handleCheckAllSubmit = (e) => {
        e.preventDefault();
        // console.log('setSelectedRow =', selectedRow);
    }

    // console.log('setSelectedRow Length =', selectedRow.length);
    // console.log('setSelectedRow =', selectedRow);
    return (
        <div id="row-selection-on-api" className="container pt-4 pb-4">
            <div className="row">
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <form className="img-thumbnail" onSubmit={handleCheckAllSubmit}>
                        <h5>Table Selection on API Data </h5>
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td>SNO</td>
                                    <td>Name</td>
                                    <td>Gender</td>
                                    <td>age</td>
                                    <td> &nbsp; </td>
                                </tr>
                                {userData && userData.map((item, index) => {
                                    return (
                                        <tr key={index + 1}>
                                            <td>{item.id}</td>
                                            <td>{item.firstName} &nbsp; {item.lastName}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.age}</td>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        id={`row-index${index + 1}`}
                                                        className="form-check-input"
                                                        value={JSON.stringify(item)}
                                                        onChange={checkboxHandler}
                                                    />
                                                    <label className="form-check-label" htmlFor={`row-index${index + 1}`}>
                                                        &nbsp;
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <button type="submit" className="btn btn-info btn-sm">Submit Selected</button>
                    </form>
                </div>

                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <pre>
                        { JSON.stringify(selectedRow, undefined, 2) }
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default RowSelectionOnApi;