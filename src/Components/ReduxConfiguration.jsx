import { Link } from "react-router-dom";
import AppImages from "../Assets";

const ReduxConfiguration = () => {
    return (
        <div id="redux-configuration" className="alert alert-info">
            <h6>Steps for configuring React Redux:</h6>
            <ul>
                <li>
                    Step 1: Firstly we need to create the store where we configure the common store
                </li>

                <li>
                    Step 2: Next step would be - go to the index.js file and Wrap the react app by using provider and add the store attribute and assign the store configuration. here is the syntax:
                    <pre className='aleet alert-warning'>
                        <code>import { "Provider" } from "react-redux";</code>
                    </pre>
                    
                    <pre className='aleet alert-warning'>
                        <code>import { "store" } from "./redux/store";</code>
                    </pre>
                    
                    <p>
                        <img src={AppImages.ReduxProviderSteps} alt={AppImages.ReduxProviderSteps} className='img-fluid'/>
                    </p>
                </li>
                
                <li>
                    Step 3: Create the feature slice, This is the actual file where you need to create feature about common States.
                </li>
                
                <li>
                    Step 4: Register the slice feature with store.js file., This file needs all the features slice registration at one place. Because a store can have multiple features based on your project requirement.
                </li>
                
                <li>
                    Step 5: Later you can use the useSelector() hook and this hook is helping for getting the latest data from the store in your whole react app and its easily imported by react-redux 
                </li>
                <li>
                    Step 5: And if you wanted to update the state then you need to use the useDispatch() hook and pass the action to the reducer, and finally reducer will take your action with payload and perform the opertion based on your request.
                </li>
            </ul>

            <h6>
                Best tutorial for Setup: <Link href="https://whataboutcoding.com/redux-toolkit-tutorial/" target="_target">https://whataboutcoding.com/redux-toolkit-tutorial/</Link> 
            </h6>
        </div>
    )
}

export default ReduxConfiguration;