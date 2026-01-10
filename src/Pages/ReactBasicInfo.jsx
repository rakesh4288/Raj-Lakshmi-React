import MyInfo from "../Components/MyInfo";
import AppImages from "../Assets";

const ReactBasicInfo = () => {
    const myFamilyData = [
        {
            id: 1,
            name: 'Rakesh Shah',
            age: 36,
            gender: 'Male'
        },
        {
            id: 2,
            name: 'Lalita Sahu',
            age: 34,
            gender: 'Female'
        },
        {
            id: 3,
            name: 'Rajvika Shah',
            age: 6,
            gender: 'Female'
        },
        {
            id: 4,
            name: 'Rajlakshmi Shah',
            age: 1.1,
            gender: 'Female'
        }
    ]

    const handleClick = (event) => {
        const item = event.target.textContent;
        console.log('handleClick =', item);
    }
    return (
        <div id="react-basic-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading">
                                React Basic Understanding  <i className="bi bi-skip-backward"></i>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="check-prop-types">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                            <h4>How to Use PropTypes in React</h4>
                            <p>
                                PropTypes are simply a mechanism that ensures that the passed value is one of the correct datatype. This makes sure that we don't receive an error at the very end of our app by the console which might not be easy to deal with.
                            </p>

                            <p className="alert alert-warning">
                                Before the release of React 15.5.0, PropTypes were available in the React package, but now we have to add the prop-types library in our project.
                            </p>

                            <p>
                                We can install this following command in our terminal:
                            </p>

                            <p className="alert alert-info"> npm install prop-types --save</p>

                            <p>
                                We can use PropTypes to validate any data that which we are receiving via props. But before using it we will  have to import it as always in our app:
                            </p>

                            <p className="alert alert-info"> import PropTypes from 'prop-types';</p>

                            <p>
                                PropTypes are also objects with a key and a value pair where the 'key' is the name of the prop  while the value represents the type or class by which they are defined.
                            </p>

                            <MyInfo myName="Rakesh Shah" age={36} />

                            <div className="alert alert-danger">
                                <p>If your prop type is not correct then you will receive a warning message in console But your application will be running fine.</p>
                                <p>
                                    <b>Warning: Failed prop type: Invalid prop `age` of type `number` supplied to `MyInfo`, expected `string`.</b>
                                </p>
                            </div>

                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <th> Type</th>
                                        <th>Class</th>
                                        <th>Example</th>
                                    </tr>

                                    <tr>
                                        <td> String</td>
                                        <td> PropType.string </td>
                                        <td>“helllo”</td>
                                    </tr>

                                    <tr>
                                        <td>Object</td>
                                        <td>PropType.object</td>
                                        <td><span>{`name: “Rohit”`}</span></td>
                                    </tr>

                                    <tr>
                                        <td>Number</td>
                                        <td>PropType.number</td>
                                        <td>10</td>
                                    </tr>

                                    <tr>
                                        <td>Boolean</td>
                                        <td>PropType.bool</td>
                                        <td>true/false</td>
                                    </tr>

                                    <tr>
                                        <td>Function</td>
                                        <td>PropType.func</td>
                                        <td><span>const say = {`console.log(“hello”)`}</span></td>
                                    </tr>

                                    <tr>
                                        <td>Symbol</td>
                                        <td>PropType.symbol</td>
                                        <td><span>Symbol(“m”)</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <p>
                                <img src={AppImages.CheckingPropTypesImg} alt="checking-prop-types" className="img-fluid" />
                            </p>

                            <p>
                                As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application.
                            </p>

                            <p>
                                But even if you don't use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="check-prop-types" className="lightBlueBG pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h4>Event Delegation in React</h4>
                            <h6>
                                Event Delegation in React is a technique that allows you to handle events at a higher level in the DOM rather than attaching event listeners to every individual child elements. <br/> Basically It works by the taking advantage of event bubbling, where an event starts at the target element and bubbles up to its ancestors.
                            </h6>

                            <p>
                                As you see here, we are attaching thr event on every list and list can be huge If we mapping with this to API response. So what we can do we can remove the event listner from here and add this event listner in a parent elementk so in this case parent element can take the advantges of bubble up and pass the information.
                            </p>

                            <h6>My Family Info</h6>


                            
                            <ul>
                                {
                                    myFamilyData.map((item, index) => {
                                        return (
                                            <li key={item.id} onClick={handleClick} style={{cursor: "pointer"}}>
                                                {item.name} - {item.age}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            
                            <hr className="bg-dark "/>

                            <ul onClick={handleClick}>
                                {
                                    myFamilyData.map((item, index) => {
                                        return (
                                            <li key={item.id}  style={{cursor: "pointer"}}>
                                                {item.name} - {item.age}
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <p>
                                <img src={AppImages.EventDelegation_1} alt={AppImages.EventDelegation_1} className="img-fluid" />
                            </p>

                            <p>
                                <img src={AppImages.EventDelegation_2} alt={AppImages.EventDelegation_2} className="img-fluid" />
                            </p>

                            <h6>Instead of this we can add the event on parent element:</h6>

                            <p>
                                <img src={AppImages.EventDelegation_3} alt={AppImages.EventDelegation_2} className="img-fluid" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactBasicInfo;