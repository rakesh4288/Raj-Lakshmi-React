import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counterSlice';
const Green = () => {
    // If you wanted to pass or update any info into the Store then we can use the useDispatch()
    const dispatch = useDispatch();
    // const incrementByOne = () => {
    //     console.log('inside increment');
    //     dispatch(increment);
    // }
    return(
        <div>
            <h1>Green component</h1>
            {/* <button onClick={incrementByOne}>increment</button> */}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Green;