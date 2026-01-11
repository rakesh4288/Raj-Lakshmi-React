import React, {useState} from "react";

const SimpleCheckboxObject = () => {
    const options = [
        { id: 1, value: 'cricket', label: 'Playing Cricket' },
        { id: 2, value: 'dancing', label: 'Dancing' },
        { id: 3, value: 'driving', label: 'Driving a Car' },
        { id: 4, value: 'travelling', label: 'Travelling' }
    ];

    const [selected, setSelected] = useState([]); // store checked values as array
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        const newValue = JSON.parse(value);
        // setSelected(prev => {
        //     if (checked) return [...prev, value];           // add when checked
        //     return prev.filter(v => v !== value);          // remove when unchecked
        // });

        if(checked) {
            setSelected([...selected, newValue]);
        } else {
            setSelected(selected.filter((item) => item.id !== newValue.id));
        }
    };

    return(
        <div className="row">
            <div className="col-md-12">
                <h5>Simple Checkbox Operation With Object</h5>
            </div>

            <div className="col-md-6">
                <div className="list-group">
                    {options.map(opt => (
                        <label className="list-group-item" key={opt.id}>
                            <input
                                className="form-check-input me-1"
                                type="checkbox"
                                value={JSON.stringify(opt)}
                                onChange={handleCheckboxChange}
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
            </div>

            <div className="col-md-6">
                <h6>Selected:</h6>
                <pre>{JSON.stringify(selected, null, 2)}</pre>
            </div>
        </div>
    )
}

export default SimpleCheckboxObject;