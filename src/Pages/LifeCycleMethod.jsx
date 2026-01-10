import { useEffect } from "react";
import AppImages from "../Assets";

const LifeCycleMethod = () => {


    useEffect(() => {
        // ComponentDidMount
        // While loading the component this hooks is executed 
        // This phase begins when a component is created and inserted into the DOM.
    });

    useEffect(() => {
        // ComponentDidUpdate
        // While passing dependicies in blank array we can achieve the updating phase ComponentDidUpdate
    }, []);

    useEffect(() => {
        return () => {
            // ComponentWillUnmount
            // This is the final phase when a component is removed from the DOM.
        }
    }, []);



    return (
        <div id="sample-id">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> Life Cycle Method in React Js</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>The React lifecycle is an essential concept for any React developer to understand the concept. Each component in React has a lifecycle that you can monitor and manipulate during its three main phases: <b>Mounting</b>, <b>Updating</b>, and <b>Unmounting</b>. </p>

                            <p>The React lifecycle is divided into three main phases:</p>
                            <ol>
                                <li value="1">
                                    <b className="text-danger">Initialization phase:</b>This is the stage where the component is getting constructed with the given Props and default state. This is done in the constructor of a Component Class.
                                </li>
                                <li value="2">
                                    <b className="text-success">Mounting Phase</b>: This phase begins when a component is created and inserted into the DOM.
                                </li>
                                <li value="3">
                                    <b className="text-info">Updating Phase</b>: This occurs when a component is re-rendered due to changes in props or state.
                                </li>
                                <li value="4">
                                    <b className="text-warning">Unmounting Phase</b>: This is the final phase when a component is removed from the DOM.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-9">
                            <p>
                                <img src={AppImages.LifeCycleMethodImg} alt="LifeCycleMethodImg" className="img-fluid" />
                            </p>
                        </div>

                        <div className="col-md-3">
                            <h4>1. Mounting: ComponentDidMount()</h4> <br/>
                            <h4>2. Updation: ComponentDidUpdate()</h4> <br/>
                            <h4>3. Ummounting: ComponentWillUnmount()</h4>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-primary"/>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Life Cycle Method in Hooks ?</h3>
                            <p>
                                We use only <b>useEffect</b> hook for for handling the Life Cycle Method in Function Component:
                            </p>

                            <p>
                                <img src={AppImages.HooksLifeCycleMethod} alt="HooksLifeCycleMethod" className="img-fluid" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LifeCycleMethod;