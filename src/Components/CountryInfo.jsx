import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const CountryInfo = () => {
    const [countryData, setCountryData] = useState([]);
    const [countryLoader, setCountryLoader] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [oneCountry, setOneCountry] = useState([]);
    const [oneCountryLoader, setOneCountryLoader] = useState(false);
    useEffect(() => {
        const countryUrl = "https://restcountries.com/v3.1/all";
        const fetchingCountries = async () => {
            setCountryLoader(true);
            try {
                const response = await fetch(countryUrl);
                const res = await response.json();
                console.log('fetchingCountries =', res);
                setCountryData(res);
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

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h5> Search Country Name: </h5>
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable={true}
                        name="countries"
                        options={countriesList}
                        onChange={handleCountry}
                    />
                </div>

                <div className="col-md-9">
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
                <div className="col-md-12">
                    {countryLoader && (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Capital</th>
                                <th>Region</th>
                                <th>Currencies</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                countryData &&
                                countryData.map((item, index) => {
                                    return (
                                        <tr key={index + 1}>
                                            <td>{index + 1}</td>
                                            <td>{item.name.common}</td>
                                            <td>{item.capital}</td>
                                            <td>{item.region}</td>
                                            <td>{item.timezones}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CountryInfo;