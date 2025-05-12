import React from "react";
import * as Icon from 'react-bootstrap-icons';
import AppImages from "../Assets";

const UseRefInfo = () => {
    return (
        <div id="use-ref-info">
            <h3> <i>useRef</i> React Hook Page <Icon.BookmarkDashFill /> </h3>
            <p>useRef is a React Hook, ref means references</p>
            <h6>with the help of useRef we can directly access to the DOM element</h6>
            <p>
                If you updating your useState hook then your program will re-render But with useRef hook your program will not rerender
            </p>

            <p>
                <code class="w3-codespan">useRef()</code> only returns one item. It returns an Object called <code class="w3-codespan">current</code>.
            </p>

            <img src={AppImages.UncontrolledImg} alt="UncontrolledImg" className="img-fluid" /> <br/><br/>
            
            <h6>Steps to define the useRef hook:</h6>
            <ul>
                <li>Firstly, you need to import the useRef from the react</li>
                <li>You need to assign the this useRef() to any variable like this <b>const inputRef = useRef()</b></li>
                <li>And lastly we can use this <b>inputRef</b> to any input element and we can access the dom element</li>
                <li>in any input element we can use like this - ref=inputRef</li>
                <li>so now you can access dom element of this ref</li>
                <li>generally we can use the .current object to make desired operation</li>
            </ul>

            <hr className="bg-primary"/>
        </div>
    )
}

export default UseRefInfo;