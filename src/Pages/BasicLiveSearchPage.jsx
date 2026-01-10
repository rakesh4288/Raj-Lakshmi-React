import { useState, useEffect } from "react";
const BasicLiveSearchPage = () => {
    const url = "https://dummyjson.com/users";
    const [userData, setUserData] = useState([]);
    const [fullInfo, setFullInfo] = useState(null)
    const [searchValue, setSearchValue] = useState('');
    const handleInput = (e) => {
        setSearchValue(e.target.value);
    }

    const onSearch = (selectedItem) => {
        const { firstName } = selectedItem;
        setSearchValue(firstName);
        setFullInfo(selectedItem);
    }

    useEffect(() => {
        const fetchingUsers = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setUserData(data.users);
        }

        fetchingUsers();
    }, []);
    return (
        <div id="basic-live-search">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> Basic Live Search <i className="bi bi-search"></i> </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="searchContainer">
                                <div className="searchInner">
                                    <input
                                        type="search"
                                        placeholder="Search First Name Here..."
                                        className="form-control"
                                        value={searchValue}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div className="searchDropdown">
                                    {userData.filter((item) => {
                                        const searchTerm = searchValue.toLowerCase();
                                        const firstName = item.firstName.toLowerCase();
                                        return searchTerm && firstName.startsWith(searchTerm) && firstName !== searchTerm
                                    })
                                        .map((item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="searchaDropdownRow"
                                                    onClick={() => onSearch(item)}
                                                >
                                                    {item.firstName}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>


                            <div>
                                <br />
                                {fullInfo && (
                                    <table className="table table-striped">
                                        <tbody>
                                            <tr>
                                                <td>Id</td>
                                                <td>{fullInfo.id}</td>
                                            </tr>

                                            <tr>
                                                <td>Name</td>
                                                <td>{fullInfo.firstName} &nbsp; {fullInfo.lastName}</td>
                                            </tr>

                                            <tr>
                                                <td>Age</td>
                                                <td>{fullInfo.age}</td>
                                            </tr>

                                            <tr>
                                                <td>Gender</td>
                                                <td>{fullInfo.gender}</td>
                                            </tr>

                                            <tr>
                                                <td>Email</td>
                                                <td>{fullInfo.email}</td>
                                            </tr>

                                            <tr>
                                                <td>Phone</td>
                                                <td>{fullInfo.phone}</td>
                                            </tr>

                                            <tr>
                                                <td>Address</td>
                                                <td>
                                                    Address: {fullInfo.address.address} <br />
                                                    City: {fullInfo.address.city} <br />
                                                    State: {fullInfo.address.state} <br />
                                                    Postal Code: {fullInfo.address.postalCode} <br />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>

                        <div className="col-md-6">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Jd7s7egjt30?si=i1wBVt_AQrU2scGe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BasicLiveSearchPage;