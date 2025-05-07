import React, {useEffect} from "react";
import * as Icon from 'react-bootstrap-icons';
import AppImages from "../Assets";
import DummyUsers from '../Components/DummyUsers';
// import useFetch from "../Global/useFetch";
import CountryInfo from "../Components/CountryInfo";

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

            <section>
                <CountryInfo />
            </section>

            <hr className="bg-primary"/>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Get Call API with filtered </h4>
                            <DummyUsers />
                        </div>

                        <div className="col-md-6">
                            <img src={AppImages.ReactHttpRequest} alt="react-http-request" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <section className="grayBgWithPinkBorder">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            Form
                        </div>
                        <div className="col-md-8">
                            <h4>Using Custom Hook: </h4>
                            {isLoading && (
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )}

                            {!isLoading && isServerError ? (
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border text-danger" role="status">
                                        <span className="visually-hidden">Getting Error while fetching the Data...</span>
                                    </div>
                                </div>
                            ): (
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>pokemon Name</th>
                                            <th>Type</th>
                                            <th>Location</th>
                                            <th>Image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            apiData.map((item, index) =>{
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td>{item.pokemon}</td>
                                                        <td>{item.type}</td>
                                                        <td>{item.location}</td>
                                                        <td>
                                                            <img src={item.image_url} alt="poster" className="img-fluid" />
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default ReactHttpGetPage;