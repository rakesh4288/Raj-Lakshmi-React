import { useEffect, useState } from "react";
import { DummyUserApi } from "../Global/ApiUrl";
import AppImages from "../Assets";

const DataLimitUsingSlice = () => {
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchingUserData = async() => {
        setIsLoading(true);
        try {
            const response = await fetch(DummyUserApi);
            const res = await response.json();
            console.log('fetchingUserData =', res.users);
            setUserData(res.users);
            setIsLoading(false);
        }
        catch(error) {
            console.log('DataLimitUsingSlice =', error);
        }
    }

    useEffect(() => {
        fetchingUserData();
    }, []);
    return (
        <div id="data-limit-using-slice">
            <h5>How to perform limit in API call:</h5>
            <p> we can use traditional array.slice() method to make the limit:</p>

            <p>
                <img src={AppImages.MapSliceLimit} alt={AppImages.MapSliceLimit} className="img-fluid" />
            </p>

            {isLoading && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}

            {userData.length === 0 ? (
                    <div className="text-danger"> User Data is not available </div>
            ) : (
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Gender</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            userData.slice(0, 5).map((item, index) => {
                                return (
                                    <tr key={index + 1}>
                                        <td>{item.id}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.gender}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            )}

            <div className="alert alert-info">
                <h5>How to handle the large amount of response while calling API:</h5>

                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td>Technique</td>
                            <td>When to Use</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Pagination</td>
                            <td>API supports it / too many records</td>
                        </tr>

                        <tr>
                            <td>Lazy loading / Infinite scroll</td>
                            <td>UI loads in chunks as needed</td>
                        </tr>

                        <tr>
                            <td>Virtualization</td>
                            <td>Rendering hundreds/thousands of items</td>
                        </tr>

                        <tr>
                            <td>Memoization</td>
                            <td>Avoid reprocessing the same data</td>
                        </tr>

                        <tr>
                            <td>Web Workers</td>
                            <td>Heavy data transformation</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DataLimitUsingSlice;