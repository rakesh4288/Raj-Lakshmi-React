import { useCallback, useState } from "react";
import UseCallBackChild from "./UseCallBackChild";

const UseCallBackInfo = () => {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);
    
    const handleIncrement = () => {
        setAdd(add + 1);
    }

    const handleDecrement = () => {
        setMinus(minus - 1);
    }

    // const newCity = () => {
    //     console.log('new city');
    // }

    const newCity = useCallback(() => {
        // any other operation
    }, [add]);
    
    return (
        <div id="use-callback-info">
            <h3><i>useCallback</i> hook </h3>
            <p>
                if you wanted to increase the performance of your react application so you can use <i>useCallback</i> hook
            </p>

            <p>
                The <b><i>useCallback</i></b> hook is used the memoized a function, And this hook is getting triggered when its dependencies change. The <b><i>useCallback</i></b> hook stores a memoized version of any <b>"DoSomthingFunction() which will only change when its dependencies changed.</b>
            </p>

            <p>
                <b>Remember:</b> useCallback hook is most effective when you are dealing with some complex components or deep component tree. It will help you to keep your app running smoothly.
            </p>

            <p className="alert alert-success">
                The useMemo and useCallback both Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
            </p>

            <div>
                <button className="btn btn-success btn-sm" onClick={handleIncrement}>Increment By 1</button> &nbsp;&nbsp;
                <button className="btn btn-info btn-sm" onClick={handleDecrement}>Decrement By 1</button>
                <h6>Addition {add}</h6>
                <h6>Substration (initialValue is 100): {minus}</h6>
            </div>

            <UseCallBackChild newCity={newCity} />
            
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/5zempLONkxM?si=DKNibHj9SBUkkCnf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <hr className="bg-success"/>
        </div>
    )
}

export default UseCallBackInfo;