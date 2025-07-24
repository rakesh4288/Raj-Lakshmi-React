import React, {useEffect} from "react";
import * as Icon from 'react-bootstrap-icons';
import AppImages from "../Assets";
import DummyUsers from '../Components/DummyUsers';
// import useFetch from "../Global/useFetch";
// import CountryInfo from "../Components/CountryInfo";

const ReactHttpGetPage = () => {
    // const url = "https://dummyapi.online/api/pokemon";
    // const { apiData, isLoading, isServerError} = useFetch(url);
    useEffect(() => {
        // ComponentDidMount()
        // this will runs on when component is loaded
    });

    useEffect(() => {
        // this is called ComponentDidUpdate()
        // This hooks will occur when we are passing any dependecies
        // [] this blank array is optional and giving opportunity for updating phase
    },[]);

    useEffect(() => {
        return () => {
            // Cleanup: Removing event listner
            // this is called ComponentWillUmount()
            // This is the final phase of component and its called when you need to unmount any business logic
        }
    }, []);
    return(
        <div id="react-http-get-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                How to call HTTP Get Call
                                <Icon.Airplane/>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <CountryInfo />
            </section> */}

            <hr className="bg-primary"/>

            <section>
                <div className="container">
                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h4>Get Call API with filtered </h4>
                            <DummyUsers />
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <img src={AppImages.ReactHttpRequest} alt="react-http-request" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactHttpGetPage;