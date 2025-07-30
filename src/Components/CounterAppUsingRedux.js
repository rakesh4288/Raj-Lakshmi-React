import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../features/CounterSlice';

const CounterAppUsingRedux = () => {
    const [amount, setAmount] = useState(0);
    const count = useSelector((state) => state.CounterStore.value); 
    // conuter is basically name of slice

    const dispatch = useDispatch(); 
    // dispatch is just helping to go inside the store and finding the exact actio which we need to perform
    const incrementByOne = () => {
        dispatch(increment());
    }

    const decrementByOne = () => {
        dispatch(decrement());
    }

    const resetCounter = () => {
        dispatch(reset());
    }

    const handleAmount = (e) => {
        console.log('handleAmount =', e.target.value);
        const value = e.target.value;
        setAmount(value);
    }

    const handleIncrementAmount = () => {
        dispatch(incrementByAmount(amount));
    }
    
    return (
        <div>
            <br/>
            <div>
                <button className='btn btn-info btn-sm' onClick={incrementByOne}>Increment</button>
            </div>
            
            <h5>Counter: {count}</h5>
            
            <div>   
                <button className='btn btn-danger btn-sm' onClick={decrementByOne}>Decrement</button>
                &nbsp; 
                <button className='btn btn-success btn-sm' onClick={resetCounter}>Reset</button>
            </div>
            <br/>
            <div>   
                <input type='number' placeholder='Enter amount' value={amount} onChange={handleAmount} />
                &nbsp;
                <button className='btn btn-success btn-sm' onClick={handleIncrementAmount}>Increment By Amount</button>
            </div>
        </div>
    )
}

export default CounterAppUsingRedux;