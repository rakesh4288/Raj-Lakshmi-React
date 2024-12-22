import React, { useCallback } from "react";

const UseCallInfo = () => {

    const callbackFuntion = useCallback(() => {
        console.log('inside UseCallbackInfo Page');
    }, []);
    return (
        <div id="use-callback-info">
            <h3><i>useCallback</i> hook </h3>
            <p>
                if you wanted to increase the performance of your react application so you can use <i>useCallback</i> hook
            </p>

            <p>
                The <b><i>useCallback</i></b> hook is used the memooize a function, ensuring that it only gets recreated when its dependencies change. The <b><i>useCallback</i></b> hook stores a memoized version of any <b>"DoSomthingFunction() which will only change when its dependencies changed.</b>
            </p>
            <h5>Problem</h5>
            <p>
                One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.
            </p>

            <p>
                <b>Remember:</b> useCallback hook is most effective when you are dealing with some complex components or deep component tree. It will help you to keep your app running smoothly.
            </p>

            <p className="alert alert-success">
                The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
            </p>

            <button className="btn btn-success btn-sm" onClick={callbackFuntion}>useCallback</button>
            
            <hr className="bg-success"/>
        </div>
    )
}

export default UseCallInfo;