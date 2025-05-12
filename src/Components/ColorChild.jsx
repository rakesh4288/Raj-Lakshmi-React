import React, { useState } from "react";

const ColorChild = ({
    changeBgColorClick,
}) => {
    const [sendColorValue, setSendColorValue] = useState('#ededed');
    const sendBgColorCode = (e) => {
        const selectedColor = e.target.value;
        console.log('selectedColor =', selectedColor);
        setSendColorValue(selectedColor)
    }
    return (

        <form id="color-child" className="form-inline" onSubmit={(e)=> e.preventDefault() }>
            <div className="form-group">
                <div style={{float: 'left', paddingRight: '10px'}}>
                    <label htmlFor="inputPassword6">Choose Color: </label>
                </div>

                <div style={{float: 'left', paddingRight: '10px'}}>
                    <input type="color" style={{height: '30px'}} onChange={sendBgColorCode} />
                </div>

                <button className="btn btn-info btn-sm" onClick={()=> changeBgColorClick(sendColorValue)}>Change</button>
            </div>
        </form>
    )
}

export default ColorChild;