import { useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showDmartEmp } from '../Features/DmartEmpSlice';

const DmartReduxList = () => {
    const {apiData, isLoading, isError} = useSelector((state) => {
       console.log("useSelector =", state.DmartEmpStore);
        return state.DmartEmpStore
    });

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showDmartEmp());
    }, []);

    console.log("showDmartEmpAllData =", apiData);
    console.log("isLoading =", isLoading);
    console.log("isError =", isError);
    return(
        <div className='container' id="student-redux-list">
        <div className='row mb-4'>
            <div className='col-12'>
                <h4 className="fw-bold text-primary d-flex align-items-center gap-2">
                    <Icon.ListTask /> Dmart Employee Record
                </h4>
            </div>
        </div>
        <div className='row'>
            {isLoading && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
            )}
            
            {apiData && apiData.length > 0 && apiData.map((item) => (
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4' key={item.id}>
                    <div className="card shadow-sm border-0 rounded-4 h-100 dmartCard position-relative">
                        <div className="card-header rounded-top-4">
                            <span className="fw-semibold">Emp Id:</span> {item.empId}
                        </div>
                        <div className="card-body">
                            <h6 className="card-title text-dark">{item.empName}</h6>
                            <p className="card-text mb-1">
                                <Icon.EnvelopeFill className="me-2 text-secondary" /> {item.empEmail}
                            </p>
                            
                            <p className="card-text mb-3">
                                <Icon.GeoAltFill className="me-2 text-secondary" /> {item.empCity}
                            </p>
                            
                            <Link to="#" className="btn btn-outline-primary btn-sm float-end d-flex align-items-center gap-1">
                                Show in Detail <Icon.ArrowBarRight/>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default DmartReduxList;