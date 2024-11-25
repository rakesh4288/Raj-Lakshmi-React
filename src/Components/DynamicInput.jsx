import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

const DynamicInput = () => {
    const initialFields = [{ value: '' }];
    const [fields, setFields] = useState(initialFields);

    const handleAddFields = () => {
        setFields([...fields, { value: '' }]);
    }

    const handleInput = (index, e) => {
        const newFields = [...fields] // Shallow Copy
        newFields[index].value = e.target.value;
        setFields(newFields);
    }

    const handleRemoveField = (index) => {
        const text = "Are you sure want to remove";
        if (window.confirm(text) === true) {
            const newFields = [...fields]; // Shallow Copy
            newFields.splice(index, 1);
            setFields(newFields);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit =', fields);
    }
    return (
        <div id='dynamic-component'>
            <form onSubmit={handleSubmit}>
                {
                    fields.map((field, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="col-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter anything"
                                        value={field.value}
                                        onChange={(e) => handleInput(index, e)}
                                    />
                                </div>

                                <div className="col-2">
                                    <button
                                        className="btn btn-primary btn-sm"
                                        onClick={() => handleRemoveField(index)}
                                    >
                                        <Icon.Trash />
                                    </button>
                                </div>
                                <br /><br />
                            </div>
                        )
                    })
                }
                <button type="button" className="btn btn-primary btn-sm" onClick={handleAddFields}>Add New Input</button>
                &nbsp;
                <button type="submit" className="btn btn-info btn-sm">Submit</button>
            </form>
        </div>
    )
}

export default DynamicInput;