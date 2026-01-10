import { useMemo, useState } from "react";
import AppImages from "../Assets";

const UseMemoInfo = () => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);
    const handleNumberChange = (e) => {
        const currentNumber = e.target.value;
        setNumber(currentNumber);
    }

    const squareNumber = (number) => {
        console.log('squareNumber =', number);
        return Math.pow(number, 2);
    }

    const increment = () => {
        setCount(count + 1);
    }

    const showSquare = useMemo(() => {
        return squareNumber(number);
    }, [number]);
    return(
        <div id="use-memo-info">
            <h3> Let's Learn <i>useMemo</i> Hook</h3>
            <h6>The React useMemo Hook returns a memoized value</h6>
            <h6>The useMemo Hook only runs when one of its dependencies update.</h6>
            <p className="alert alert-warning">
                The useMemo and useCallback both Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
            </p>

            <p>
                <input type="number" value={number} onChange={handleNumberChange}  /> &nbsp; Show Square: {showSquare} <br/><br/>
                <button className="btn btn-success btn-sm" onClick={increment}>Increment</button>
                <span>&nbsp; Count: {count}</span>
            </p>

            <p>
                <img src={AppImages.ReactUseMemoImg} alt="use-memo-systanx" className="img-fluid" />
            </p>

            <h4>Performance</h4>
            <p>We can wrap the expensive function call with useMemo</p>
            <p className="alert alert-info">The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.</p>
            <hr className="bg-primary"/>
        </div>
    )
}

export default UseMemoInfo;