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
        address: 'Trivandrum, Kerla, India'
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
    },
    {
        id: 6,
        name: 'Veronica Mathew',
        gender: 'Famle',
        address: 'California, USA'
    }
]

const SelectAllCheckbox = () => {
    const [rowSelected, setRowSelected] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    
    const handleEachRow = (e) => {
       const {value, checked} = e.target;
       const checkedRow = JSON.parse(value);
       let updatedRow;
       if(checked) {
        updatedRow = [...rowSelected, checkedRow];
        setRowSelected(updatedRow);
       } else {
           updatedRow = rowSelected.filter((item) => item.id !== checkedRow.id);
           setRowSelected(updatedRow);
       }

       setSelectAll(updatedRow.length === employeesData.length);
    }

    const handleSelectAll = (e) => {
       const {checked} = e.target;
       setSelectAll(checked);
       if(checked) {
        setRowSelected(employeesData);
       } else {
        setRowSelected([]);
       }
    }

    console.log('rowSelected =', rowSelected);
    return (
        <div className="img-thumbnail">
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
                                    checked={selectAll}  // Controlled checkbox
                                    onChange={handleSelectAll}  // Handler added
                                />
                                <label className="form-check-label" htmlFor="selectAllCheck">
                                    {selectAll ? 'Un Select All' : 'Select All'}
                                </label>
                            </div>
                        </td>
                    </tr>

                    {employeesData && employeesData.map((emp) => {
                        return (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.gender}</td>
                                <td>{emp.address}</td>
                                <td>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            id={`row-id-${emp.id}`}
                                            className="form-check-input"
                                            value={JSON.stringify(emp)}
                                            // checked={rowSelected.some(item => item.id === emp.id)}  // Controlled checkbox
                                            checked={rowSelected.some((item) => item.id === emp.id)}
                                            onChange={handleEachRow}
                                        />
                                        <label className="form-check-label" htmlFor={`row-id-${emp.id}`}>
                                            &nbsp;
                                        </label>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SelectAllCheckbox;