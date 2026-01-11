import { useMemo, useState } from "react";
import AppImages from "../Assets";

const UseMemoInfo = () => {


    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);

    const handleIncrement = () => {
        setAdd(add + 1);
    }

    const handleDecrement = () => {
        setMinus(minus - 1);
    }

    const useMemoFunction = useMemo(() => {
        console.log('inside handleMultiply');
        return add * 10;
    }, [add]);


    return (
        <div id="use-memo-info">
            <h3> Let's Learn <i>useMemo</i> Hook</h3>
            <h6>The React useMemo Hook returns a memoized value</h6>
            <h6>The useMemo Hook only runs when one of its dependencies updated.</h6>
            <p className="alert alert-warning">
                The useMemo and useCallback both Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
            </p>

            <div>
                <button className="btn btn-success btn-sm" onClick={handleIncrement}>Increment</button>
                &nbsp;
                <button className="btn btn-danger btn-sm" onClick={handleDecrement}>Decrement</button> <br />
                <div>Increment: {add}</div>
                <div>Decrement: {minus}</div>
                <div>Multiply By 10 with increment Value: {useMemoFunction} </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>
                    <h6>Without useMemo</h6>
                    <img src={AppImages.ReactUseMemo_1} alt={AppImages.ReactUseMemo_1} className="img-fluid" />
                </p>

                <p>
                    <h6>With useMemo Hook</h6>
                    <img src={AppImages.ReactUseMemo_2} alt={AppImages.ReactUseMemo_2} className="img-fluid" />
                </p>
            </div>

            <h4>Performance</h4>
            <p>We can wrap the expensive function call with useMemo</p>
            <p className="alert alert-info">The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.</p>
            <hr className="bg-primary" />
        </div>
    )
}

export default UseMemoInfo;