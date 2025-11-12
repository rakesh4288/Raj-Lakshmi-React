import { useCallback, useEffect, useState } from "react";

const UseCallBackInfo = () => {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1);
    //     // setCount((prevCount) => prevCount + 1)
    // }

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    useEffect(() => {
        console.log('Increment function is getting triggered !');
    }, [increment]);

    return (
        <div id="use-callback-info">
            <h3><i>useCallback</i> hook </h3>
            <p>
                if you wanted to increase the performance of your react application so you can use <i>useCallback</i> hook
            </p>

            <p>
                The <b><i>useCallback</i></b> hook is used the memoized a function, And this hook is getting triggered when its dependencies change. The <b><i>useCallback</i></b> hook stores a memoized version of any <b>"DoSomthingFunction() which will only change when its dependencies changed.</b>
            </p>
            <h5>Problem</h5>
            <p>
                One reason to use useCallback is to prevent a component from re-rendering unless its props getting changed.
            </p>

            <p>
                <b>Remember:</b> useCallback hook is most effective when you are dealing with some complex components or deep component tree. It will help you to keep your app running smoothly.
            </p>

            <p className="alert alert-success">
                The useMemo and useCallback both Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
            </p>

            <div>
                <button className="btn btn-success btn-sm" onClick={increment}>Increment</button> &nbsp;&nbsp;
                <button className="btn btn-info btn-sm" onClick={() => setOtherCount(otherCount + 1)}>Other Count</button>
                <h6>Count {count}</h6>
                <h6>Other Count {otherCount}</h6>
            </div>
            
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/jX57Hcq-Rv8?si=kEF_nF3zgVcmYoWU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <hr className="bg-success"/>
        </div>
    )
}

export default UseCallBackInfo;