import { useState } from "react";

const SimpleCheckboxArray = () => {
    const hobbies = [ 'Cricket', 'Dancing', 'Driving', 'Travelling'];
    const [selectedHobby, setSelectedHobby] = useState([]);
    const handleCheckboxChange = (e) => {
        const {value, checked} = e.target;
        if(checked) {
            setSelectedHobby([...selectedHobby , value]);
        } else {
            setSelectedHobby(selectedHobby.filter((item) => item !== value));
        }
    }

    return(
        <div id="sample-id">
            <div className="row">
                <div className="col-md-12">
                    <h5>Simple Checkbox Operation With Array</h5>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="list-group">
                        {hobbies.map((hobby, index) => (
                            <label className="list-group-item" key={index + 1}>
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value={hobby}
                                    onChange={handleCheckboxChange}
                                />
                                {hobby}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <pre>
                        {selectedHobby}
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default SimpleCheckboxArray;