

import React,{useState} from "react";

const Controlled = () => {
    const [yourName, setYourName] = useState();
    const handleInput = (e) => {
        setYourName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Your Name = ${yourName}`)
    }
    return (
        <form id="controlled-component" onSubmit={handleSubmit}>
            <label>Enter Your Name: </label>
            <input type="text" value={yourName} onChange={handleInput} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Controlled;


