import React, { useEffect, useState } from "react";

const userData = [
    {
        name: 'Rakesh Shah'
    },
    {
        name: 'Nitish Lamba'
    },
    {
        name: 'Dishant Adlakha'
    },
    {
        name: 'Deepika SD'
    },
    {
        name: 'Amadi Williams'
    },
]

const SelectAllCheckbox = () => {
    const [users, setUsers] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);

    useEffect(() => {
        setUsers(userData);
    }, []);


    const checkboxHandler = (e) => {
        // console.log('checkboxHandler =', e.target);
        const { name, checked } = e.target;
        // console.log('checkboxHandler name =', name);
        // console.log('checkboxHandler checked =', checked);
        

        if(name === "selectAllCheckbox") {
            let tempUser = users.map((user) => {
                return {...user, isChecked: checked}
            });
            setUsers(tempUser);
        } else {
            let tempUser = users.map((user) =>
                user.name === name ? { ...user, isChecked: checked } : user
            );
            setUsers(tempUser);
        }
    }
    console.log('setUsers =', users);
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('selectedRow =', selectedRow);
    }
    return (
        <form className="img-thumbnail" onSubmit={handleSubmit}>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    id="selectAllCheck"
                                    className="form-check-input"
                                    name="selectAllCheckbox"
                                    checked={users.filter((user) => user?.isChecked !== true).length < 1}
                                    onChange={checkboxHandler}
                                />
                                <label className="form-check-label" htmlFor="selectAllCheck">
                                    &nbsp;
                                </label>
                            </div>
                        </td>
                    </tr>
                    {
                        users && users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                id={`row-index${index + 1}`}
                                                className="form-check-input"
                                                name={user.name}
                                                checked={user.isChecked || false}
                                                onChange={checkboxHandler}
                                            />
                                            <label className="form-check-label" htmlFor={`row-index${index + 1}`}>
                                                &nbsp;
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button className="btn btn-info btn-sm" type="submit">Submit Selected</button>
        </form>
    )
}

export default SelectAllCheckbox;