import { useState } from "react";

const employeesData = [
    {
        id: 1,
        name: 'Rakesh Shah',
        gender: 'male',
        address: 'Pune India'
    },
    {
        id: 2,
        name: 'Pramod Patil',
        gender: 'male',
        address: 'London UK'
    },
    {
        id: 3,
        name: 'SD Deepika',
        gender: 'female',
        address: 'trivandrum, Kerla, India'
    },
    {
        id: 4,
        name: 'Amadi Williams',
        gender: 'female',
        address: 'New York, USA'
    },
    {
        id: 5,
        name: 'Nitish Lamba',
        gender: 'male',
        address: 'Noida, UP, India'
    }
]

const SelectAllCheckbox = () => {
    const [rowSelected, setRowSelected] = useState([]);
    const selectRowHandler = (row) => {
        setRowSelected((prevSelected) => (prevSelected.some((selected) => selected.id === row.id)
        ? prevSelected.filter((selected) => selected.id !== row.id) : [...prevSelected, row]))
    }

    console.log('rowSelected =', rowSelected);
    const isAllChecked = rowSelected.length === employeesData.length;

    const handleSelectAll = (e) => {
        const {checked} = e.target;
        if(checked) {
            setRowSelected(employeesData);
            console.log('handleSelectAll =', employeesData);
        } else {
            setRowSelected([]);
            console.log('handleSelectAll =', employeesData);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Final Object =', rowSelected);
    }
    return (
        <form className="img-thumbnail">
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Gender</td>
                        <td>Address</td>
                        <td>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    id="selectAllCheck"
                                    className="form-check-input"
                                    name="selectAllCheckbox"
                                    checked={isAllChecked}
                                    onChange={handleSelectAll}
                                />
                                <label className="form-check-label" htmlFor="selectAllCheck">
                                    { rowSelected.length === employeesData.length ? 'Deselect All' : 'Select All' }
                                </label>
                            </div>
                        </td>
                    </tr>
                    {employeesData && employeesData.map((emp, index) => {
                        return (
                            <tr key={index}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.gender}</td>
                                <td>{emp.address}</td>
                                <td>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            id={`row-index${index + 1}`}
                                            className="form-check-input"
                                            value={emp.id}
                                            checked={rowSelected.some((row) => row.id === emp.id)}
                                            onChange={() => selectRowHandler(emp)}
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
            <button className="btn btn-success btn-sm" type="submit" onClick={handleSubmit}>Submit Selected</button>
            <br/>
            <pre>
                { JSON.stringify(rowSelected, undefined, 2) }
            </pre>
        </form>
    )
}

export default SelectAllCheckbox;