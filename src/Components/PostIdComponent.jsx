import React from "react";

const PostIdComponent = ({
    value,
    handlePageChange,
    handleSubmit,
}) => {
    return (
        <>
            <input
                type="text"
                className="form-control"
                placeholder="Enter id like 1 - 100"
                value={value}
                onChange={handlePageChange}
            />
            <br/>
            <button type="button" className="btn btn-warning btn-sm" onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default PostIdComponent;