import AppImages from "../Assets";
import DerivedStates from "../Components/DerivedStates";

const InterviewSeries_1 = () => {
    return (
        <div id="interview-part-1">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> React Interview Questions Answer Part 1 
                                <i className="bi bi-fullscreen"></i>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="virtual-dom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5>What is Virtual DOM concept in React Js</h5>
                            <h6>Before leaning virtual let's understand the DOM first</h6>
                            <div className="alert alert-warning">
                                <h6>What is DOM ?</h6>
                                <p>
                                    <b>DOM stands for Document Object Model.</b> In simple terms, it is a structured representation of the HTML elements that are present in a webpage. DOM represents the entire UI of your application as a tree data structure. It contains a node for each UI element present in the web document. It is very useful as it allows web developers to modify content through JavaScript
                                </p>
                            </div>

                            <div className="alert alert-info">
                                <h6>What is Virtual DOM ?</h6>
                                <p><b>Virtual DOM is a lightweighted copy of the actual DOM.</b> Its a virtual representation of the DOM and its optimized the code and take the updates on every object that exists in the original DOM,</p>

                                <p>
                                    Manipulating the DOM is slow,  but manipulating Virtual DOM is very fast because its not taking full refresh of the page, only selected node will get changed.
                                </p>

                                <p>
                                    So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <p>Understand by Figure: </p>
                            <p>
                                <img src={AppImages.virtualDom_1} alt="virtualDom_1" className="img-fluid" />
                            </p>

                            <div className="alert alert-danger">
                                <h6>Summary</h6>
                                <p>
                                    <b>Virtual DOM plays a major role in boosting the performance</b> of the applications. When the state of a component changes in an application, the Virtual DOM is getting updated and then compared with its previous state of the component. This feature made things move faster and also reduced cost. <br/> We hope you understood the comparison of virtual dom vs real dom and why React uses virtual dom.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-primary" />

            <section id="prop_vs_state">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Difference between props and state ?</h4>
                            <p>
                                When we start working with React JS, it's important to understand the differences between state and props.
                                Here, we'll take a look at some common conditions and compare the behavior of props and state.
                            </p>

                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>State</th>
                                        <th>Props</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>States are managing within the component</td>
                                        <td>But Props are getting passed from the parent component</td>
                                    </tr>

                                    <tr>
                                        <td>State can be changed and it's called a mutable</td>
                                        <td>Where props are in readonly mode we cannot be change, it's called immutable</td>
                                    </tr>

                                    <tr>
                                        <td>State can be accessed using the use state hooks in a functional components and in a class component we can use by this.state</td>
                                        <td>Similarly, Props can be accessed in functional component using props as a parameter And in a class based component we can accessed by this.props keyword</td>
                                    </tr>

                                    <tr>
                                        <td>States are controlled by React component</td>
                                        <td>Where as Props are controlled by the parent component</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h5>State vs Props in React: A Comparison Table</h5>
                            <p>
                                <img src={AppImages.StatePropsCamparison} alt="state props" className="img-fluid" />
                            </p>

                            <p>
                                As we can see from the table, <b>props</b> and <b>states</b> have some similarities. They are both plain JavaScript objects that can contain default values, and they are both read-only when using the `this` keyword.
                            </p>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <p>
                                <img src={AppImages.StateVsProps} alt="state props" className="img-fluid" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-primary" />

            <section id="spread-operator-with-props">
                <div className="container">
                    <div className="row">
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                            <h5>Using Spread Operator with Component Props:</h5>
                            <h6>What will be happen if we pass the hard code value along with dynamic object</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <p>
                                If we pass the hard code props along with existing dynamic props so the priority of rendering will be hard coded props 
                            </p>
                            <p>
                                <img src={AppImages.Props_Design_1} alt="props design one" className="img-fluid" />
                            </p>

                            <p>
                                <img src={AppImages.Props_Design_3} alt="props design three" className="img-fluid" />
                            </p>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <p>
                                Here you can see we are just accepting the props as we do regularly.
                            </p>

                            <p>
                                <img src={AppImages.Props_Design_2} alt="props design two" className="img-fluid" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-danger" />

            <section id="bidirectional-vs-unidirectional">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>React js is bidirectional or unidirectional</h4>
                            <p>
                                React Js uses a unidirectional data flow, which means that data flows in one direction, from parent to child components. This is a structural best practice for React applications.
                            </p>

                            <div className="alert alert-warning">
                                The React core team strongly recommends use a unidirectional data flow as often as possible.
                            </div>

                            <p>
                                <b>Unidirectional Data Flow:</b> React enforces a unidirectional data flow, where data flows downwards from parent components to child components via props. This one-way flow of data makes the application state more predictable and easier to reason about.
                            </p>

                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>Unidirectional data flow</th>
                                    </tr>

                                    <tr>
                                        <td>How data flows</td>
                                        <td>Data flows down from parent components to child components via props</td>
                                    </tr>

                                    <tr>
                                        <td>Benefits</td>
                                        <td>Makes the application state more predictable and easier to reason about, and makes large scale codebases easier to follow and more performant</td>
                                    </tr>

                                    <tr>
                                        <td>What can't happen</td>
                                        <td>Child components can't update the data that comes from parent components, and the view can't change the state</td>
                                    </tr>

                                    <tr>
                                        <td>What to do if a child component needs to send a message to its parent</td>
                                        <td>Use a special technique called inversion data flow or some callback technique</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-md-6">
                            <p>
                                <img src={AppImages.ReactDataApproach} alt="react-data-approach" className="img-fluid" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-primary"/>

            <section id="package-vs-package-lock.json">
                <div className="container">
                    <div className="row">
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                            <h5>Difference between package.json and package-lock.json ?</h5>
                        </div>
                    </div>  

                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h6>package.json</h6>
                            <p>
                                Package.json is the main configuration for any Node.js project.
                            </p>

                            <ul>
                                <li>
                                    This file contains the metadata information about the project like project name, project description, author & license information, scripts, etc.
                                </li>
                                
                                <li>
                                    There are two types of dependencies, first is the dependencies and another one is dev dependencies.
                                </li>
                            </ul>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h6>package-lock.json</h6>
                            <p>
                                package-lock.json file is automatically generated by npm.
                            </p>

                            <p>
                                Actually package-lock.json is maintaining the exact version of each installed package in React application which allows you to re-install them. Future installs will be able to build an identical dependency tree.
                            </p>

                            <p>
                                The package-lock.json is used to lock the dependencies to a specific version number.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-success"/>

            <section id="dependencies-vs-Devdependencies">
                <div className="container">
                    <div className="row">
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                            <h3>Difference between dependencies vs dev dependencies ?</h3>
                            <p>
                                Every node js project is including a file called package.json, which serves as a central repository for an important project metadata. <br/> This file holds information such as dependencies and dev dependencies.
                            </p>
                        </div>
                    </div>  

                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h6>Dependencies</h6>
                            <p>
                                Dependencies are mostly required for the production build and core functionality of the React. In other ways - dependencies are required to run the application in production,
                            </p>

                             <ul>
                                <li> 
                                    <b>Production Use:</b> These are essential for running the application in production.
                                </li>

                                <li>
                                    <b>Automatic Installation:</b> These packages are automatically installed when you run npm install command.
                                </li>
                            </ul>

                            <p>
                                <img  src={AppImages.Dependecies} alt={AppImages.Dependecies} className="img-fluid"/>
                            </p>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h6>Dev Dependencies</h6>
                            <p>
                                Where as Dev Dependencies are the required only during development phase, not in production.
                            </p>
                            <p>
                                In package.json file, there is an object called as dev Dependencies and its containing the all packages that are used in the project in its development phase and not in the production or testing environment
                            </p>

                            <p>
                                <img  src={AppImages.DevDependecies} alt={AppImages.DevDependecies} className="img-fluid"/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-success"/>

            <section id="derived-state" className="pt-3 mb-4">
                <div className="container">
                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h5>What is Derived States ?</h5>
                            <h6>
                                Derived states is basically a state value that can be computed from the existing states or props instead of storing a independently.
                            </h6>

                            <h6>
                                Actually this is a way to avoid the redundant data and keep the states straight forward in the component.
                            </h6>

                            <DerivedStates />
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <div className="border p-2">
                                <h6>Look at below screenshot:</h6>
                                <p>
                                    Total variable coming from Derived States, as soon as User states get updated so total variable will also get updated.
                                </p>

                                <p>
                                    <img  src={AppImages.DerivedStatesImg_1} alt={AppImages.DerivedStatesImg_1} className="img-fluid"/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="bg-primary"/>

            <section id="derived-state" className="pt-3 mb-4">
                <div className="container">
                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h5>What is getDerivedStatesFromProps ?</h5>
                            <h6>
                                The getDerivedStateFromProps method is a static lifecycle method which is used when the state of a component depends on changes of props. <b>It is a static method which is called just before render() method in both mounting and updating phase in React.</b>
                            </h6>

                            <pre className="alert alert-warning">
                                <span>getDerivedStateFromProps(props, state) </span>
                            </pre>

                            <h6>Parameters:</h6>
                            <ul>
                                <li value="1">
                                    <b>props:</b>
                                    <span> The updated props which is passed from the parent component</span>
                                </li>
                                <li value="2">
                                    <b>state:</b><span> The current state of the component</span>
                                </li>
                            </ul>

                            <h6>Return:</h6>
                            <p>
                                We have to return an object to update state or null to indicate that nothing has changed.
                            </p>

                            
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <p>
                                <img  src={AppImages.DerivedStatesImg_2} alt={AppImages.DerivedStatesImg_2} className="img-fluid"/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InterviewSeries_1;