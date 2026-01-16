import {useEffect, useState} from "react";

import employeesData from "../Global/EmployeesData";

const RowSelection = () => {
    const [empData, setEmpData] = useState();
    const [selectedRow, setSelectedRow] = useState([]);
    const checkboxHandler = (e) => {
        const { value, checked } = e.target;
        const checkedRow = JSON.parse(value);
        console.log('checkedRow =', checkedRow);
        if (checked) {
            setSelectedRow([...selectedRow, checkedRow]);
        } else {
            setSelectedRow(selectedRow.filter((item) => item.id !== checkedRow.id));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('selectedRow =', selectedRow);
    }

    useEffect(() => {
        setEmpData(employeesData);
    }, []);


    return (
        <div id="row-selection">
            <form className="img-thumbnail p-2" onSubmit={handleSubmit}>
                <h5>Table row selectoin with checkbox and send data to API</h5>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td>SNO</td>
                            <td>Name</td>
                            <td>Gender</td>
                            <td>Address</td>
                            <td>&nbsp;</td>
                        </tr>
                        {empData && empData.map((item, index) => {
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
                        })}
                    </tbody>
                </table>
                <button className="btn btn-info btn-sm">Submit Selected</button>
            </form>
            <br/>
            <pre> 
                { JSON.stringify(selectedRow, undefined, 2) }
            </pre>
        </div>
    )
}

export default RowSelection;