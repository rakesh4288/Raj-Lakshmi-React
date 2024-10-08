import React, {useState} from "react";

const employees = [
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

const CheckboxRowSelection = () => {
    const [selectedRow, setSelectedRow] = useState([]);
    const checkboxHandler = (e) => {
        const { value, checked } = e.target;
        const newValue = JSON.parse(value);
        if (checked) {
            setSelectedRow([...selectedRow, newValue])
        } else {
            setSelectedRow(selectedRow.filter((item) => item.id !== newValue.id))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('selectedRow =', selectedRow);
    }
    return (
        <form className="img-thumbnail" onSubmit={handleSubmit}>
            <h6>Table row selectoin with checkbox and send data to API</h6>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>SNO</td>
                        <td>Name</td>
                        <td>Gender</td>
                        <td>Address</td>
                        <td>&nbsp;</td>
                    </tr>
                    {
                        employees && employees.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.address}</td>
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
                        })
                    }
                </tbody>
            </table>

            <button className="btn btn-info btn-sm" onClick={handleSubmit}>Submit Selected</button>
        </form>
    )
}

export default CheckboxRowSelection;