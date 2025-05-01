import React from "react";
import AppImages from "../Assets";

const UseEffectInfo = () => {
    return(
        <div id="use-effect-info">
            <h4> A brief introduction of about <i>useEffect</i> Hook</h4>
            <p className="alert alert-info">
                The useEffect Hook allows you to perform side effects in your components.
            </p>

            <p className="alert alert-warning">
                Some examples of side effects are like: fetching the data, directly updating the DOM, and timers.
                useEffect accepts two arguments. <br/> <b>The second argument is optional.</b>
            </p>
            
            <p>
                <img src={AppImages.useEffectImgOne} alt="use effect one" className="img-fluid img-thumbnail" />
            </p>

            <p>
                But wait!! It keeps counting even though it should only count once! <br/>

                useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect. <br/><br/>

                This is not what we want. There are several ways to control when side effects run.
            </p>

            <p className="alert alert-info">
                We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
            </p>

            <div className="row">
                <div className="col-6">
                    <p>
                        <img src={AppImages.useEffectImgTwo} alt="use effect two" className="img-fluid img-thumbnail" />
                    </p>
                </div>

                <div className="col-6">
                    <p>
                        <img src={AppImages.useEffectImgThree} alt="use effect three" className="img-fluid img-thumbnail" />
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <p>
                        <img src={AppImages.useEffectImgFour} alt="use effect four" className="img-fluid img-thumbnail" />
                    </p>
                </div>
            </div>

            <br/><br/><br/><br/><hr className="bg-primary"/>
        </div>
    )
}

export default UseEffectInfo;