import React, {useState} from 'react';
import AppImages from "../Assets";
import ChildComponent from '../Components/ChildComponent';
import ColorChild from '../Components/ColorChild';
import TeamA from '../Components/TeamA';

const ChildToParentPage = () => {
    const [storeFamilyData, setStoreFamilyData] = useState([]);
    const [newBgColor, setNewBgColor] = useState(null);
    const [newBgColorCode, setNewBgColorCode] = useState('#ededed');
    const getFamilyData = (data) => {
        // console.log('getFamilyData =', data);
        setStoreFamilyData(data);
    }
    // console.log('getFamilyData State =', storeFamilyData);

    const getBgColor = (data) => {
        console.log('getBgColor =', data);
        setNewBgColor(data);
    }

    const changeBgColorCode = (colorValue) => {
        console.log('changeBgColorCode =', colorValue);
        setNewBgColorCode(colorValue);
    }

    const directOnPage = (e) => {
        const selectedColor = e.target.value
        setNewBgColorCode(selectedColor);
    }
    return (
        <div id='child-to-parent-page'>
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="pageHeading"> How to pass the Data from Child Component to Parent Component </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Let's check how can we pass the data from child to parent:</h5>
                            <p>Using callback function we can pass the data from Child to Parent</p>
                            <ChildComponent getFamilyClick={getFamilyData} changeBgColor={getBgColor}  />
                            <ul>
                                {
                                   storeFamilyData.map((item, index) => {
                                    return (
                                        <li key={index}>{item.name}</li>
                                    )
                                   }) 
                                }
                            </ul>

                            <div style={{width: '200px', height: '200px', border: '1px solid #ededed', background: `${newBgColor}`}}>

                            </div>
                        </div>

                        <div className="col-md-6 border-left">
                            <h5>Change Color by Child Component using Callback:</h5>
                            <ColorChild changeBgColorClick={changeBgColorCode} /> 
                            <hr className='bg-primary'/>
                            or choose here:  <input type='color' onChange={directOnPage} />
                            
                            <div
                                style={{height: '200px', width: '100%', borderRadius: '5px', backgroundColor: `${newBgColorCode}`}}> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className='bg-danger' />

            <section id="bidirectional-vs-unidirectional">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>React js is bidirectional or unidirectional</h4>
                            <p>
                                React uses a unidirectional data flow, which means that data flows in one direction, from parent to child components. This is a structural best practice for React applications.
                            </p>

                            <div className="alert alert-warning">
                                The React core team strongly recommends using unidirectional data flow as often as possible.
                            </div>

                            <p>
                                <b>Unidirectional Data Flow:</b> React enforces a unidirectional data flow, where data flows downwards from parent components to child components via props.
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
                                        <td>Use a special technique called inversion data flow</td>
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
            
            <hr className='bg-info' />

            <section className='container'>
                <div className='row'>
                    <div className="col-md-6">
                        <TeamA />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ChildToParentPage;