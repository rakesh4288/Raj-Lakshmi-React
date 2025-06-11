import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
const CountryFullDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [oneCountry, setOneCountry] = useState([]);
    const [oneCountryLoader, setOneCountryLoader] = useState(false);

    console.log('params =', params);
    const {id} = params;
    console.log('params id=', id);

    // https://restcountries.com/v3.1/alpha/{code}
    const fetchingFullDetails = async() => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
            const res = await response.json();
            console.log('fetchingFullDetails =', res)
            setOneCountry(res);
            setOneCountryLoader(false);
        } catch (error) {
            console.log('fetchingCountries Error =', error);
            setOneCountryLoader(false);
        }
    }

    useEffect(() => {
        fetchingFullDetails();
    }, []);

    const backToPage = () => {
        console.log('inside backToPage');
        navigate('/http-react-get-call');
    }
    return (
        <div id='Country-full-details'>
            {oneCountryLoader && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="float-start pageHeading">
                                {oneCountry[0]?.name.common} <Icon.Flag/>
                            </h4>

                            <h4 className="float-end pageHeading">
                                <button className="btn btn-warning btn-sm" onClick={backToPage}>
                                    Back to Previous Page <Icon.ArrowBarLeft/>
                                </button>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                {
                    oneCountry.length === 0 ? (
                        <><br /> <div className='alert alert-danger'>Please select any country</div></>
                    ) : 
                    oneCountry.map(( item, index) => {
                        return (
                            <div className='row' key={index+1}>
                                <div className="col-md-7">
                                    <table className="table table-striped">
                                        <tbody>
                                            <tr>
                                                <td>Country </td>
                                                <td>{item.name.common}</td>
                                            </tr>
                                            <tr>
                                                <td>Capital </td>
                                                <td>{item.capital}</td>
                                            </tr>

                                            <tr>
                                                <td>Continent </td>
                                                <td>{item.region}</td>
                                            </tr>

                                            <tr>
                                                <td>Timezone </td>
                                                <td>{item.timezones}</td>
                                            </tr>

                                            {/* <tr>
                                                <td>Currency </td>
                                                <td>{ Object.values(item.currencies[0].symbol) }</td>
                                            </tr> */}

                                            <tr>
                                                <td>Population </td>
                                                <td>{item.population}</td>
                                            </tr>

                                            <tr>
                                                <td>Google Map </td>
                                                <td>
                                                    <a
                                                        href={item.maps.googleMaps}
                                                        target='_blank'
                                                        rel="noreferrer"
                                                    >
                                                        {item.maps.googleMaps}
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="col-md-5">
                                    <img src={oneCountry[0].flags.svg} alt='country flag' className='img-fluid img-thumbnail' />
                                </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CountryFullDetails;