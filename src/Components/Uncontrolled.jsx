import React, {useRef} from "react";

const Uncontrolled = () => {
    const yourNameRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Your Name is - ${yourNameRef.current.value}`);
    }
    return (
        <form id="controlled-component" onSubmit={handleSubmit}>
            <label>Enter Your Name:</label>
            <input type="text" ref={yourNameRef}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Uncontrolled;