import React, { useEffect, useState } from 'react';
import AppImages from '../Assets';

const DebouncingPage = () => {
    const [apiData, setApiData] = useState([]);
    const [pincode, setPincode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    //const url = 'https://api.postalpincode.in/pincode/411057';
    // https://demo.dataverse.org/api/search?q=mobile
    const url = `https://api.postalpincode.in/pincode/${pincode}`;

    const fetchingPincode = async() => {
        console.log('API calling');
        setIsLoading(true);
        try{
         const response = await fetch(url);
         const res = await response.json();
            if(res[0].Status === 'Success') {
                setApiData(res[0].PostOffice);
                setIsLoading(false);
            } else {
                setApiData([]);
                setIsLoading(false);
            }
        }
        catch(error) {
            setIsLoading(true);
            console.log('API Error: Getting error while calling API');
        }
     }

    useEffect(() => {
        const delayDebouncing = setTimeout(() => {
            fetchingPincode();
        }, 2000);

        return () => {
            clearTimeout(delayDebouncing);
        }
    }, [pincode]);

    const handleInput = (e) => {
        e.preventDefault();
        setPincode(e.target.value)
    }
    return (
        <div id='debouncing-page'>
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="pageHeading"> What is Debouncing and Throttling in React </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h4>Debouncing and Throttling in React</h4>
                        <h5>Debouncing:</h5>
                        <p>
                            Debouncing is a technique where you delay the execution of some set of function on certain amount of time has passed. This is a very useful technique in some cases where are calling function frequently. We should use this technique for improving the performance where you are trying to call some function frequently.
                        </p>

                        <p>
                            Generally we are using setTimeout() function for working with Debouncing. As you know we are not doing something new. This function is already present in native JavaScript. We are just using this technique for delaying some function to execute.
                        </p>

                        <h6>Most useful case when we are calling API on onChange event</h6>
                        <p>Yes so this is one of the best use case for api calling.</p>
                        <p className="text-danger">
                            Let's suppose you have one input and while typing any letter you wanted to execute the API. So just imagine your API will call will be executed on every typing letter. Now let's suppose any user typing 5-10 letter in just 4-5 seconds so how many API will get call. This is not a correct approach for searching.
                        </p>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <img src={AppImages.Debouncing_Img_1} alt="Debouncing_Img_1" className="img-fluid" />
                        <br/><br/><br/><br/><br/>
                        <p className="text-success">
                            Now let's see the solution: Here if we attach the API call inside setTimeout() function with some specific delay time like 3 or 5 seconds, so only this giveen time API call will get executed. So we can avoid the the multiple API call the same time.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                        <div className='alert alert-info'>
                            <label className='label'>Enter Indian Pincode: </label>
                            <input
                                type='search'
                                className='form-control'
                                onChange={handleInput}
                                // onChange={(e) => setPincode(e.target.value)}
                            />
                        </div>

                        <div>
                            <img src={AppImages.PostOfficeImg} alt='PostOfficeImg' className='img-fluid' />
                        </div>
                    </div>

                    <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12'>
                        <h5>Trying Debouncing with API </h5>
                        {
                            isLoading && (
                                <div className="d-flex justify-content-center" style={{textAlign: 'center'}}>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )
                        }
                        
                                
                        {   apiData.length === 0 ? (
                            <div className='alert alert-danger text-center'>
                                Please enter the Pincode in number format !!
                            </div>
                        ) : 
                        (
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>SNO</th>
                                        <th>Name</th>
                                        <th>Pincode</th>
                                        <th>District</th>
                                        <th>Region</th>                                        
                                        <th>State</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        apiData.map((item, index) => {
                                            return (
                                                <tr key={index + 1}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.Name}</td>
                                                    <td>{item.Pincode}</td>
                                                    <td>{item.District}</td>
                                                    <td>{item.Region}</td>
                                                    <td>{item.State}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        )}
                            
                    </div>
                </div>

            </section>

            <hr className="bg-success"/>

            <section className='container'>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>Throttling</h5>
                        <p>
                            Throttling is a similar type of technique as like debouncing. but instead of delaying the execution of a function on certain time. Here we are calling a function on every given interval time.
                        </p>

                        <p>
                            Here we are using setInterval() method to execute a function on given interval time.
                        </p>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th><span>Aspect</span></th>
                                    <th><span>Debouncing</span></th>
                                    <th><span>Throttling</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Definition</td>
                                    <td><span>Delays execution until a period of inactivity</span></td>
                                    <td><span>Limits execution to a fixed rate</span></td>
                                </tr>
                                <tr>
                                    <td>Execution Timing</td>
                                    <td><span>Executes once after the last event</span></td>
                                    <td><span>Executes at regular intervals</span></td>
                                </tr>
                                <tr>
                                    <td>Use Case</td>
                                    <td><span>Ideal for handling events with intermittent pauses (e.g., typing, resizing)</span></td>
                                    <td><span>Ideal for handling events with constant activity (e.g., scrolling, mouse movements)</span></td>
                                </tr>
                                <tr>
                                    <td>Advantage</td>
                                    <td><span>Reduces the number of function executions, which can improve performance and reduce unnecessary operations</span></td>
                                    <td><span>Ensures the function executes at a controlled rate, preventing performance degradation</span></td>
                                </tr>
                                <tr>
                                    <td>Disadvantage</td>
                                    <td><span>Delays function execution; might miss immediate feedback</span></td>
                                    <td><span>Might miss events if the throttle interval is too long</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div>
                            <img src={AppImages.Debouncing_Img_2} alt='debouncing img 2' className='img-fluid' />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h6>
                            Debouncing and Throttling are similar only the difference is between function behaviour.
                            Debouncing is working with setTimeout() and Throttling is working the setInterval(). 
                        </h6>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DebouncingPage