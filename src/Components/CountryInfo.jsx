import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const CountryInfo = () => {
    const [countryData, setCountryData] = useState([]);
    const [copyCountryData, setCopyCountryData] = useState([]);
    
    const [countryLoader, setCountryLoader] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [oneCountry, setOneCountry] = useState([]);
    const [oneCountryLoader, setOneCountryLoader] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const countryUrl = "https://restcountries.com/v3.1/all";
        const fetchingCountries = async () => {
            setCountryLoader(true);
            try {
                const response = await fetch(countryUrl);
                const res = await response.json();
                console.log('fetchingCountries =', res);
                setCountryData(res);
                setCopyCountryData(res);
                setCountryLoader(false);
            }
            catch (error) {
                console.log('fetchingCountries Error =', error);
                setCountryLoader(false);
            }
        }

        fetchingCountries();
    }, []);

    const countriesList = countryData.map((item) => ({
        value: item.cca2,
        label: item.name.common,
    }));

    // console.log('countriesList =', countriesList);

    const handleCountry = (selectedEvent) => {
        if (selectedEvent === '' || selectedEvent === null) {
            setSelectedCountry('');
        } else {
            setSelectedCountry(selectedEvent.value);
        }
    }

    // console.log('handleCountry =', selectedCountry);

    // https://restcountries.com/v3.1/name/{name}
    // https://restcountries.com/v3.1/alpha/{code}

    useEffect(() => {
        if (selectedCountry === '' || selectedCountry === null) {
            setOneCountry([]);
        } else {
            const fetchOneCountry = async () => {
                setOneCountryLoader(true);
                try {
                    const response = await fetch(`https://restcountries.com/v3.1/alpha/${selectedCountry}`)
                    const res = await response.json();
                    console.log('fetchOneCountry =', res);
                    setOneCountry(res);
                    setOneCountryLoader(false);
                }
                catch (error) {
                    console.log('fetchOneCountry =', error);
                    setOneCountryLoader(false);
                }
            }
            fetchOneCountry();
        }

    }, [selectedCountry]);

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const findCountry = (e) => {
        // console.log('findCountry =', e.target.value);
        let searchQuery = e.target.value;
        let tempArray = [];
        if(searchQuery === '') {
            setCountryData(copyCountryData);
        } else {
            tempArray = copyCountryData.filter((item) => item.name.common?.toLowerCase().includes(searchQuery.toLowerCase()));
            console.log('tempArray =', tempArray);
            setCountryData(tempArray);
        }
    }

    const countryFullInfo = (id) => {
        console.log('inside countryFullInfo');
        navigate(`/http-react-get-call/country-full-info/${id}`);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <h5> Search Country Name: </h5>
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable={true}
                        name="countries"
                        options={countriesList}
                        onChange={handleCountry}
                        ref={inputRef}
                    />
                </div>

                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                    {oneCountryLoader && (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
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

            <hr className='bg-primary' />

            <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                    {countryLoader && (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                    <h6 className='float-start'>All Countries List Here:</h6>
                    <h6 className='text-end'>Countries Count:<b>{countryData.length}</b></h6>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <td>SNO</td>
                                <td>Name</td>
                                <td>Capital</td>
                                <td>Region</td>
                                <td>Time Zone</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                countryData &&
                                countryData.map((item, index) => {
                                    return (
                                        <tr key={index + 1} onClick={() => countryFullInfo(item.altSpellings[0])} style={{cursor: 'pointer'}}>
                                            <td>{index + 1}</td>
                                            <td>{item.name.common}</td>
                                            <td>{item.capital}</td>
                                            <td>{item.region}</td>
                                            <td>
                                                <span className='wrapColumn'>
                                                    {item.timezones}
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <h6>Here are some filter available:</h6>
                    <div className='alert alert-info'>
                        <h6>Search By Country Name:</h6>
                        <input type='search' id='country-name' name='countryName' className='form-control' onChange={findCountry} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryInfo;