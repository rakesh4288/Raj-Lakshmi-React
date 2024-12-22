import React from "react";
import AppImages from "../Assets";

const UseStateInfo = () => {
    return(
        <div id="use-state-info">
            <h3> <i>useState</i> hook</h3>
            <p>The React <b>useState</b> Hook allows us to track state in a function component.</p>
            <p>State generally refers to data or properties that need to be tracking in an application.</p>
            
            <h5>Import useState</h5>
            <p>To use the useState Hook, we first need to import it into our component.</p>
            <code className="alert alert-danger">{`import { 'useState' } from "react";`}</code> <br/><br/>
            <p>Notice that we are destructuring useState from react as it is a named export.</p>
            
            <h5>Initialize useState</h5>
            <p>We initialize our state by calling <b>useState</b> in our function component.</p>
            <p>useState accepts an initial state and returns two values:</p>
            <ul>
                <li>The current state.</li>
                <li>A function that updates the state.</li>
            </ul>
            
            <p>
                <img src={AppImages.UseStateHookImg} alt="UseStateHookImg" className="img-fluid" />
            </p>

            <p>
                Notice that again, we are destructuring the returned values from useState.
            </p>

            <p>
                The first value, color, is our current state.
            </p>

            <p>
                The second value, setColor, is the function that is used to update our state.
            </p>
            <hr className="bg-danger"/>
        </div>
    )
}

export default UseStateInfo;