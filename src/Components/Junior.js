import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByValue } from '../features/counterSlice';

const Junior = () => {
    const myValue = useSelector((c) => c.counter.value);
    const dispatch = useDispatch();
    // const newUserDetails = [
    //     {
    //         'useId': 'raj09',
    //         'userName': 'Raj Lakshmi Shah',
    //         'userLocation': 'Phoenix City USA'
    //     }
    // ]
    return (
        <div>
            <h3>Junior</h3>
            <p>
                { myValue}
            </p>

            <button onClick={() => dispatch(incrementByValue(10))}>incrementByValue</button>

            {/* <button onClick={() => dispatch(updatingUserDetails(newUserDetails))}>Updating Details</button> */}
        </div>
    )
}

export default Junior;