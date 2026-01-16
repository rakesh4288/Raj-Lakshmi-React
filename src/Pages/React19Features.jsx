import AppImages from "../Assets";
const React19Features = () => {
    return (
        <div id="sample-id">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> React 19 Features</h4>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                        <h4>React 19 : New Features and Updates</h4>
                        <p>
                            Refrences: <br/>
                            <a href="https://www.freecodecamp.org/news/new-react-19-features-you-should-know-with-code-examples/" className="btn btn-success btn-sm" target="_blank" rel="noreferrer">
                                https://www.freecodecamp.org/news/new-react-19-features-you-should-know-with-code-examples/
                            </a>
                            <br/><br/>
                            <a href="https://react.dev/blog/2024/12/05/react-19" className="btn btn-info btn-sm" target="_blank" rel="noreferrer">
                                https://react.dev/blog/2024/12/05/react-19
                            </a>
                        </p>

                        <h5>Core Performance & Architecture</h5>
                        <h6>
                            <b> React Compiler:</b>
                            React Compiler is the replacement of useMemo() and useCallback(), This is helpful for optimizing the component and and reducing the unnecessary re-renders.
                        </h6>

                        <h6>
                            <b>Activity:</b> In React 19 Activity is best feature I would say. Activity wrapper is used for handling the show & hide feature. This Show and Hide i mean toggling feature we were already doing earlier But Activity wrapper is providing one more thing. It prereserving the state also. So imagine while creating the tabs using Acitvity so your current state will not erase it will be same as it.
                        </h6>

                        <hr className="bg-danger" />

                        <h5>New Hooks & API</h5>

                        <h6>
                            <b>useTransition:</b>
                            useTransition() hook is helping to handle the isPending status while calling the API, In React 18 we are handling the isPending status separately But in React 19 useTransition() hook providing the inbuilt method to handle the isPending status.
                        </h6>

                        <h6>
                            <b>useOptimistic: </b> useOptimistic() hook is heping to provide the best user experience while communicating with API. When are you handling the API using useOptimistic() hook so this hook directly updating the UI for best user experience and and the same time API calling is running the behind the screens. so once API executed so whatever response is coming now this time response showing at the screen But till time useOptimistic() hook changed the UI.
                        </h6>

                        <h6>useActionState</h6>
                        <h6>
                            <b>New API - use():</b>
                            use() hook is helping to handling the promise based requirement separately. Now earlier we were creating separate custom hook for handling such scenarios now in React 19 use() is providing by itself.
                        </h6>
                        <h6>useEffectEvent</h6>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div className="lightGreenBG img-thumbnail p-2">
                            <h6>How to update React 18 to React 19 ?</h6>
                            <p>
                                Upgrading from React 18 to React 19 involves updating your dependencies, applying codemods to handle breaking changes, and updating your TypeScript definitions. React 19 includes several breaking changes.
                            </p>

                            <ul>
                                <li>Firstly you need to identify about your dependencies.</li>
                                <li>Note down separately with version as well.</li>
                                <li>Before moving to 19, upgrade to React 18.3. This version is identical to 18.2 and it will help you to identify issues early. <br /> <i>npm install react@18.3.1 react-dom@18.3.1</i> </li>
                                <li>Then Install React 19 <br /> <i>npm install react@latest react-dom@latest</i></li>
                                <li>Run then Codemods for Automatic Refactoring</li>
                                <li>Then finally you need to do some Manual Fixes whereever required </li>
                            </ul>
                        </div>
                        <br />
                        <img src={AppImages.React_18_to_19} alt={AppImages.React_18_to_19} className="img-fluid" />
                    </div>
                </div>
            </div>

            <section id="react-use-transition">
                <div className="container alert alert-info mb-4">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h5>useTransition</h5>
                            <p>
                                A common use case in React apps is to perform a data mutation and then update state in response. For example, when a user submits a form to change their name, you will make an API request, and then handle the response. In the past, you would need to handle the pending states, errors, optimistic updates, and sequential requests manually.
                            </p>

                            <p>For example, you could handle the pending and error state in useState:</p>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6>With using useState</h6>
                            <p>
                                <img src={AppImages.React_19_UseTransition_1} alt={AppImages.React_19_UseTransition_1} className="img-fluid" />
                            </p>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6>With using useTransition</h6>
                            <p>
                                <img src={AppImages.React_19_UseTransition_2} alt={AppImages.React_19_UseTransition_2} className="img-fluid" />
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <p>
                                In React 19, we're adding support for using async functions in transitions to handle pending states, errors, forms, and optimistic updates automatically.
                            </p>

                            <p>
                                The async transition will immediately set the isPending state to true, make the async request(s), and switch isPending to false after any transitions. This allows you to keep the current UI responsive and interactive while the data is changing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="react-useOptimistic">
                <div className="container alert alert-success mb-4">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h5>useOptimistic(): Enhancing User Experience</h5>
                            <p>
                                For real-time applications, the useOptimistic() hook is helpful. Provides optimistic UI updates by allowing the UI to update immediately with the new state before the server confirms. It allows for optimistic updates, making your app feel snappy by updating the UI instantly and syncing with the server in the background.
                            </p>

                            <h6>How it works </h6>
                            <ul>
                                <li>
                                    <b>Optimistic state:</b> The hook creates a temporary, optimistic state that is immediately displayed in the UI.
                                </li>

                                <li>
                                    <b>Asynchronous action:</b> When an asynchronous action, like a network request, begins, you use a function provided by the hook to add the optimistic state.
                                </li>
                            </ul>
                            <p>
                                <img src={AppImages.React_19_UseOptimistic_1} alt={AppImages.React_19_UseOptimistic_1} className="img-fluid" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="react-useActionState">
                <div className="container alert alert-warning mb-4">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h5>useActionState(): Managing Asynchronous Actions</h5>
                            <p>
                                useActionState is designed to handle server-driven state updates. It allows developers to manage loading states, error handling, and success messages more efficiently.
                            </p>

                            <h6>Benefits of useActionState </h6>
                            <ul>
                                <li> Reduces boilerplate code for handling form submissions.</li>
                                <li> Manages pending states efficiently.</li>
                                <li> Improves error handling without external state management. </li>
                            </ul>
                            <p>
                                <img src={AppImages.React_19_UseActionState_1} alt={AppImages.React_19_UseActionState_1} className="img-fluid" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="react-use-api-hook-react-compiler">
                <div className="container alert alert-primary mb-4">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5>New API: use</h5>
                            <p>
                                React 19 release introduces an experimental API called use, designed to read resource values (like Promises or context) directly within render functions. This leads to more concise code for asynchronous data fetching and state management.
                            </p>

                            <h6>Key benefits: </h6>
                            <ul>
                                <li>Allows direct access to resource values in render functions, reducing the need for separate state variables or lifecycle methods</li>
                                <li> Primarily targets data fetching scenarios, simplifying Promise handling</li>
                                <li>React 19 lets you use promises, contexts, and async functions directly inside components.</li>
                            </ul>
                            <p>
                                <img src={AppImages.React_19_Use_Api_1} alt={AppImages.React_19_Use_Api_1} className="img-fluid" />
                            </p>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6>React Compiler:</h6>
                            <p>
                                A new compiler that automatically optimizes the components, reducing the need for manual memo or useMemo hooks and improving performance. It autonomously manages component rendering for UI state changes, eliminating the need for manual state and UI updates.
                            </p>

                            <h6>Key benefits:</h6>
                            <ul>
                                <li>Improved error reporting in react-dom</li>
                                <li>Seamless rendering of async scripts anywhere in a component tree</li>
                                <li>Better APIs loading and preloading browser resources to optimize resource loading</li>
                            </ul>

                            <h6>With React 18 useMemo </h6>
                            <p>
                                <img src={AppImages.React18UseMemo} className="img-fluid" alt={AppImages.React18UseMemo} />
                            </p>
                            <h6>With React 19 useMemo </h6>
                            <p>
                                <img src={AppImages.React19UseMemo} className="img-fluid" alt={AppImages.React19UseMemo} />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="react-useEffectEvent-activity">
                <div className="container alert alert-danger mb-4">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5>useEffectEvent</h5>
                            <p>
                                useEffectEvent is a new React 19 API designed to fix a long-time issue with useEffect: stale closures (when effects use old values of props/state).
                            </p>

                            <h6>Problem with normal useEffect: </h6>
                            <p>
                                If you use a function or state inside an effect, you must add it to the dependency array — otherwise it becomes stale. <br />
                                But sometimes adding dependencies causes
                            </p>

                            <ul>
                                <li>unnecessary re-runs</li>
                                <li>infinite loops</li>
                                <li>performance issues</li>
                            </ul>

                            <h6>When to use useEffectEvent</h6>
                            <p>
                                You should use useEffectEvent for functions that are conceptually "events" that happen to be fired from an Effect instead of a user event (that’s what makes it an “Effect Event”). You don't need to wrap everything in useEffectEvent, or to use it just to silence the lint error, as this can lead to bugs.
                            </p>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5>Activity:</h5>
                            <p>
                                The Activity component in React 19 is a new feature that allows developers to hide and restore the UI and internal state of its children. This provides a more efficient way to manage components that are frequently toggled between visible and hidden states, such as sidebars, tabs, or modal windows.
                            </p>

                            <h6>Key features and benefits of Activity:</h6>
                            <ul>
                                <li><b>Preserves state:</b> When a component wrapped in Activity mode="hidden" is hidden, its internal state (from useState hooks) is preserved. This means that when it becomes visible again, it will restore to its previous state without re-initialize or re-fetch data.</li>
                                <li><b>Improved user experience:</b> preserving state and optimizing performance, Activity contributes to a smoother and more responsive user experience, particularly in applications with dynamic UI elements</li>
                            </ul>

                            <p>
                                <img src={AppImages.React_19_Use_Activity_1} alt={AppImages.React_19_Use_Activity_1} className="img-fluid" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default React19Features;